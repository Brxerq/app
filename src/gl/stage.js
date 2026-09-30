// Renderer, camera, post chain, quality governor and the frame loop.
import { Color, NeutralToneMapping, PerspectiveCamera, Scene, Vector2, WebGLRenderer } from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Strokes } from './strokes.js';

export const TIERS = {
  high: { dpr: 1.5, strokes: 1, bloom: true, ca: true },
  medium: { dpr: 1.25, strokes: 0.62, bloom: false, ca: true },
  low: { dpr: 1, strokes: 0.32, bloom: false, ca: false },
};
const ORDER = ['high', 'medium', 'low'];

const finish = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uCA: { value: 0.0 }, uGrain: { value: 0.035 }, uVig: { value: 0.5 }, uRes: { value: new Vector2(1, 1) } },
  vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform float uTime, uCA, uGrain, uVig; uniform vec2 uRes; varying vec2 vUv;
    float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
    void main(){
      vec2 c = vUv - .5; float r2 = dot(c, c);
      vec2 off = c * (r2 * uCA + 0.0002);
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      col *= 1. - uVig * smoothstep(.16, .62, r2 * 1.6);
      float g = hash(vUv * uRes + fract(uTime) * 91.);
      col += (g - .5) * uGrain * (.25 + col);
      gl_FragColor = vec4(max(col, 0.), 1.);
    }`,
};

export class Stage {
  constructor(canvas, { tier = 'high', maxStrokes = 65536 } = {}) {
    this.canvas = canvas;
    this.tierName = tier;
    this.tier = TIERS[tier];
    this.renderer = new WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance', stencil: false });
    this.renderer.setClearColor(new Color(0x05060a), 1);
    this.renderer.toneMapping = NeutralToneMapping;
    this.renderer.toneMappingExposure = 1.0;

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(32, 1, 0.1, 500);
    this.camera.position.set(0, 0, 12);
    this.pp = { x: 0, y: 0 }; // principal-point shift in NDC (where the world origin lands on screen)

    this.strokes = new Strokes(maxStrokes);
    this.scene.add(this.strokes.mesh);
    this.strokes.setActive(Math.floor(maxStrokes * this.tier.strokes));

    this.composer = null;
    this.bloom = null;
    this.fin = null;
    this.frameCbs = [];
    this.running = false;
    this.acc = { n: 0, t: 0, warm: 0 };
    this.time = 0;
    this.last = 0;
    this.buildPost();
    this.resize();

    this._raf = this._raf.bind(this);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.stop();
      else if (this.wantRun) this.start();
    });
  }

  buildPost() {
    if (this.composer) {
      this.composer.dispose?.();
      this.composer = null;
    }
    const t = this.tier;
    if (!t.bloom && !t.ca) return;
    const composer = new EffectComposer(this.renderer);
    composer.addPass(new RenderPass(this.scene, this.camera));
    if (t.bloom) {
      this.bloom = new UnrealBloomPass(new Vector2(256, 256), 0.42, 0.5, 0.82);
      composer.addPass(this.bloom);
    }
    this.fin = new ShaderPass({ ...finish, uniforms: { ...finish.uniforms, uRes: { value: new Vector2(1, 1) } } });
    composer.addPass(this.fin);
    composer.addPass(new OutputPass());
    this.composer = composer;
  }

  setTier(name) {
    if (!TIERS[name]) return;
    this.tierName = name;
    this.tier = TIERS[name];
    this.strokes.setActive(Math.floor(this.strokes.count * this.tier.strokes));
    this.buildPost();
    this.resize();
  }

  demote() {
    const i = ORDER.indexOf(this.tierName);
    if (i < ORDER.length - 1) {
      this.setTier(ORDER[i + 1]);
      return ORDER[i + 1];
    }
    return null;
  }

  resize() {
    const w = Math.max(1, window.innerWidth), h = Math.max(1, window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, this.tier.dpr);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (this.composer) {
      this.composer.setPixelRatio(dpr);
      this.composer.setSize(w, h);
    }
    this.dpr = dpr;
    this.w = w;
    this.h = h;
    const u = this.strokes.uniforms;
    u.uRes.value.set(w * dpr, h * dpr);
    u.uPx.value = dpr;
    if (this.fin) this.fin.uniforms.uRes.value.set(w * dpr, h * dpr);
  }

  /** shift the projection so the world origin (of the current pose) appears at NDC (x, y) */
  applyPrincipalPoint() {
    const m = this.camera.projectionMatrix.elements;
    m[8] = -this.pp.x;
    m[9] = -this.pp.y;
    this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert();
  }

  onFrame(cb) {
    this.frameCbs.push(cb);
  }

  start() {
    this.wantRun = true;
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    requestAnimationFrame(this._raf);
  }

  stop() {
    this.running = false;
  }

  _raf(now) {
    if (!this.running) return;
    requestAnimationFrame(this._raf);
    const dt = Math.min(0.1, (now - this.last) / 1000);
    this.last = now;
    this.time += dt;
    this.strokes.uniforms.uTime.value = this.time;
    if (this.fin) this.fin.uniforms.uTime.value = this.time;
    for (const cb of this.frameCbs) cb(dt, this.time);
    this.applyPrincipalPoint();
    this.render();
    this.govern(dt);
  }

  render() {
    if (this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  }

  // if the machine can't hold ~40fps for a while, step the quality down (never back up: no oscillation)
  govern(dt) {
    const a = this.acc;
    if (this.time < 3) return; // let shaders compile and textures upload
    a.n++;
    a.t += dt;
    if (a.n >= 90) {
      const avg = a.t / a.n;
      a.n = 0;
      a.t = 0;
      if (avg > 0.026) {
        a.warm++;
        if (a.warm >= 2) {
          a.warm = 0;
          const to = this.demote();
          if (to) this.onDemote?.(to);
        }
      } else a.warm = 0;
    }
  }

  dispose() {
    this.stop();
    this.strokes.dispose();
    this.composer?.dispose?.();
    this.renderer.dispose();
  }
}
