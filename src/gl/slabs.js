// The selected work as textured slabs hanging in the corridor. Each one develops over the sketch the strokes drew of
// it, as it arrives. Images and links come from the DOM. The develop is either ink (noise front) or scan (a sweep).
import { Mesh, PlaneGeometry, Raycaster, ShaderMaterial, SRGBColorSpace, TextureLoader, Vector2, LinearMipmapLinearFilter } from 'three';
import { CORRIDOR } from './forms/others.js';
import { LAYER, LAYER_Z } from './scenes.js';
import { clamp, smooth, lerp } from './util.js';

const vert = /* glsl */ `
uniform float uBend;
uniform float uHover;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 p = position;
  float b = sin(uv.x * 3.14159) * sin(uv.y * 3.14159);
  p.z += b * uBend * 0.55 + uHover * 0.12 * b;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
}`;

const frag = /* glsl */ `
precision highp float;
uniform sampler2D uTex;
uniform float uAspect;     // image w/h
uniform float uSlab;       // slab w/h
uniform float uReveal;
uniform float uHover;
uniform float uFade;
uniform float uMode;       // 0 ink, 1 scan
uniform float uTime;
uniform float uLoaded;
varying vec2 vUv;

float hash(vec2 p) { p = fract(p * vec2(123.34, 345.45)); p += dot(p, p + 34.23); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3. - 2. * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float fbm(vec2 p) { return .5 * vnoise(p) + .25 * vnoise(p * 2.03) + .125 * vnoise(p * 4.1) + .0625 * vnoise(p * 8.3); }

vec2 cover(vec2 uv) {
  vec2 s = vec2(1.);
  if (uAspect > uSlab) s.x = uSlab / uAspect; else s.y = uAspect / uSlab;
  return (uv - .5) * s + .5;
}

void main() {
  vec2 uv = cover(vUv);
  // hover: split the channels and push the image a touch
  vec2 off = vec2(.006, 0.) * uHover;
  vec3 img = vec3(texture2D(uTex, uv + off).r, texture2D(uTex, uv).g, texture2D(uTex, uv - off).b);
  vec3 sig = vec3(1., .82, .25);

  float vis, edge;
  if (uMode < .5) {
    float n = fbm(vUv * vec2(7., 4.) + 3.1);
    float front = uReveal * 1.25 - .12;
    vis = smoothstep(n - .02, n + .02, front);
    edge = smoothstep(.09, 0., abs(n - front)) * step(.001, uReveal) * step(uReveal, .999);
  } else {
    float x = vUv.x;
    vis = smoothstep(uReveal - .004, uReveal - .03, x);
    edge = exp(-pow((x - uReveal) * 40., 2.)) * step(.001, uReveal) * step(uReveal, .999);
  }
  // not developed yet: nothing at all, and no depth either, so the sketch drawn just behind the slab shows through
  float a = max(vis * uLoaded, edge) * smoothstep(0., .3, uFade);
  if (a < .1) discard;
  vec3 col = img * vis * uLoaded * .76; // a white page stays under the bloom threshold instead of glaring
  // slabs that are not the focus sink into blue; passed ones are already faded out
  float lum = dot(col, vec3(.3, .59, .11));
  col = mix(vec3(lum) * vec3(.45, .6, 1.), col, smoothstep(.2, 1., uFade));
  col *= .18 + .82 * uFade;
  col += sig * (edge * 1.4 + uHover * .04);
  gl_FragColor = vec4(col, a);
}`;

export class Slabs {
  constructor(stage) {
    this.stage = stage;
    this.items = [];
    this.hover = -1;
    this.ray = new Raycaster();
    this.ndc = new Vector2(9, 9);
    this.loader = new TextureLoader();
    this.loadedAny = false;
  }

  build(sites) {
    const { W, H, dz, x } = CORRIDOR;
    const z0 = LAYER_Z[LAYER.corridor];
    sites.forEach((s, k) => {
      const mat = new ShaderMaterial({
        vertexShader: vert, fragmentShader: frag, depthWrite: true, depthTest: true, transparent: true,
        uniforms: {
          uTex: { value: null }, uAspect: { value: 1.905 }, uSlab: { value: W / H },
          uReveal: { value: 0 }, uHover: { value: 0 }, uFade: { value: 0 }, uMode: { value: s.mode === 'scan' ? 1 : 0 },
          uTime: { value: 0 }, uLoaded: { value: 0 }, uBend: { value: 0 },
        },
      });
      const mesh = new Mesh(new PlaneGeometry(W, H, 28, 14), mat);
      const cx = k % 2 === 0 ? -x : x, cy = Math.sin(k * 1.7) * 0.18;
      mesh.position.set(cx, cy, z0 - k * dz - 0.03);
      mesh.renderOrder = -1; // before the strokes, so a developed slab hides the sketch behind it
      mesh.visible = false;
      mesh.userData.k = k;
      this.stage.scene.add(mesh);
      this.items.push({ mesh, mat, href: s.href, src: s.src, loaded: false, reveal: 0, fade: 0, hover: 0 });
    });
  }

  load(k) {
    const it = this.items[k];
    if (!it || it.loading || it.loaded) return;
    it.loading = true;
    this.loader.load(it.src, (tex) => {
      tex.colorSpace = SRGBColorSpace;
      tex.minFilter = LinearMipmapLinearFilter;
      tex.anisotropy = 4;
      it.mat.uniforms.uTex.value = tex;
      it.mat.uniforms.uAspect.value = tex.image.width / tex.image.height;
      it.loaded = true;
    });
  }

  /** called each frame by the corridor scene */
  frame(dt, { si, vel, near, ptr, time }) {
    const cam = this.stage.camera;
    let hit = -1;
    if (near) {
      this.ndc.set(ptr.tx, ptr.ty);
      this.ray.setFromCamera(this.ndc, cam);
      const vis = this.items.filter((i) => i.mesh.visible && i.reveal > 0.05).map((i) => i.mesh); // undeveloped = nothing to click
      const h = this.ray.intersectObjects(vis, false)[0];
      if (h) hit = h.object.userData.k;
    }
    this.hover = hit;
    const site = si - 1; // 0 = first site
    for (let k = 0; k < this.items.length; k++) {
      const it = this.items[k];
      const rel = k - site;
      const want = near && rel > -1.4 && rel < 3.4;
      it.mesh.visible = near && rel > -2 && rel < 4.5 && (it.fade > 0.02 || want);
      if (near && rel < 2.6) this.load(k);
      if (it.mesh.visible) {
        const u = it.mat.uniforms;
        it.reveal += (smooth(-0.8, -0.05, -rel) - it.reveal) * (1 - Math.exp(-dt * 3.2)); // develops as it arrives
        // in focus: 1. Ahead: dimmer. Passed: fades away before it can cover the next frame
        const fadeT = rel >= 0 ? lerp(1, 0.28, smooth(0, 2.4, rel)) : lerp(1, 0, smooth(0.05, 0.45, -rel));
        it.fade += ((want ? fadeT : 0) - it.fade) * (1 - Math.exp(-dt * 5));
        it.hover += ((hit === k ? 1 : 0) - it.hover) * (1 - Math.exp(-dt * 8));
        u.uReveal.value = it.reveal;
        u.uFade.value = it.fade;
        u.uHover.value = it.hover;
        u.uLoaded.value += ((it.loaded ? 1 : 0) - u.uLoaded.value) * (1 - Math.exp(-dt * 4));
        u.uBend.value = clamp(vel * 1.4, -1, 1);
        u.uTime.value = time;
        it.mesh.scale.setScalar(1 + it.hover * 0.025);
      }
    }
    document.documentElement.classList.toggle('slab-hover', hit >= 0);
  }

  open() {
    const it = this.items[this.hover];
    if (it?.href) window.open(it.href, '_blank', 'noopener');
  }

  hide() {
    for (const it of this.items) it.mesh.visible = false;
    this.hover = -1;
    document.documentElement.classList.remove('slab-hover');
  }
}
