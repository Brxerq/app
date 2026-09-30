// The one substance: N light-strokes whose home positions live in per-form data textures.
// The vertex shader morphs between any two forms; everything else (globe spin, voice, field…) is a
// per-stroke "fx" switch driven by a handful of uniforms the director sets each frame.
import {
  AdditiveBlending, BufferAttribute, DataArrayTexture, FloatType, InstancedBufferAttribute, InstancedBufferGeometry,
  Mesh, NearestFilter, RGBAFormat, ShaderMaterial, Vector2, Vector3, Vector4,
} from 'three';

export const MAX_FORMS = 16;

const vert = /* glsl */ `
precision highp float;
precision highp sampler2DArray;

uniform sampler2DArray uPos;   // xyz position, w brightness
uniform sampler2DArray uDir;   // xyz direction*length, w heat (0 cobalt … 0.6 white … 1 yellow, <0 alarm)
uniform sampler2DArray uAux;   // x group, y param, z fx id, w extra
uniform float uTexW;
uniform vec2  uForms;          // from / to layer (-1 = scattered cloud)
uniform float uMix;
uniform float uTime;
uniform vec2  uRes;
uniform float uPx;
uniform float uWidth;
uniform float uBright;
uniform float uWarm;
uniform float uSwirl;
uniform float uStreak;
uniform float uStagger;
uniform float uLight;          // 0..1 how much of the warm "light" population is switched on
uniform float uIntro;          // 0..1 draw-on sweep for the very first portrait
uniform vec3  uPtr;
uniform float uPtrR;
uniform float uPtrPush;
uniform vec4  uTrail[8];
uniform vec2  uFormRot[16];
uniform vec3  uFormOff[16];
uniform float uFormScale[16];
uniform float uReveal[16];
uniform vec4  uFx;             // x voice, y run, z spread, w grow
uniform vec4  uFx2;            // x orbit, y active, z focus, w scan
uniform vec3  uFocus;          // focus plane z, focus range, fog k
attribute float aId;

varying vec2 vUv;
varying vec4 vCol;

const float PI = 3.14159265;

float hash11(float p) { p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
vec3 hash31(float p) {
  vec3 p3 = fract(vec3(p) * vec3(.1031, .1030, .0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xxy + p3.yzz) * p3.zyx);
}
vec3 flow(vec3 p, float t) {
  return vec3(
    sin(p.y * 1.7 + t) + sin(p.z * 2.3 - t * .8),
    sin(p.z * 1.9 + t * .9) + sin(p.x * 2.1 + t * 1.1),
    sin(p.x * 1.6 - t * .7) + sin(p.y * 2.4 + t * 1.2));
}
float easeIO(float t) { return t < .5 ? 4. * t * t * t : 1. - pow(-2. * t + 2., 3.) * .5; }

vec3 palette(float h) {
  vec3 cobalt = vec3(.30, .42, 1.0);
  vec3 ice    = vec3(.72, .80, 1.0);
  vec3 warm   = vec3(1.0, .93, .78);
  vec3 yellow = vec3(1.0, .80, .18);
  vec3 amber  = vec3(1.0, .55, .06);
  vec3 alarm  = vec3(1.0, .22, .16);
  if (h < 0.) return alarm;
  vec3 c = mix(cobalt, ice, smoothstep(0., .35, h));
  c = mix(c, warm, smoothstep(.35, .6, h));
  c = mix(c, yellow, smoothstep(.6, .85, h));
  c = mix(c, amber, smoothstep(.85, 1., h));
  return c;
}

mat3 rotYX(vec2 r) {
  float cy = cos(r.x), sy = sin(r.x), cp = cos(r.y), sp = sin(r.y);
  mat3 ry = mat3(cy, 0., -sy, 0., 1., 0., sy, 0., cy);
  mat3 rx = mat3(1., 0., 0., 0., cp, sp, 0., -sp, cp);
  return rx * ry;
}

float portraitGate(int layer, vec4 aux) {
  if (layer != 0) return 1.;
  float sweep = smoothstep(aux.y - .3, aux.y, uIntro * 1.3);
  return sweep * (aux.w > .5 ? uLight : 1.);
}

// Per-form dynamic behaviour. p/d/w/heat are the stroke's rest state in form space.
void applyFx(int layer, inout vec3 p, inout vec3 d, inout float w, inout float heat, vec4 aux, float h) {
  int fx = int(aux.z + .5);
  if (fx == 0 || fx == 9 || fx == 10) return;
  float t = uTime;
  if (fx == 1) {            // voice: continuous waveform on the left resolving into booked slots on the right
    float x = p.x;
    float k = smoothstep(.15, -.55, x / 3.6);                      // 1 on the wave side, 0 on the slot side
    float env = uFx.x * (.35 + .65 * sin(x * .9 - t * 1.3) * sin(x * .37 + t * .8));
    float ph = aux.y * 6.2831;
    float y = sin(x * 2.3 - t * 2.6 + ph) * .34 + sin(x * 5.1 + t * 1.7 + ph * 2.) * .14 + sin(x * .8 + t * .6) * .22;
    p.y += y * env * k * (1. + aux.w * .6);
    float dy = (cos(x * 2.3 - t * 2.6 + ph) * .34 * 2.3 + cos(x * 5.1 + t * 1.7 + ph * 2.) * .14 * 5.1) * env * k;
    d.xy = normalize(vec2(1., dy)) * length(d.xy);
    float play = fract(t * .11) * 8. - 4.;                          // playhead sweeping left → right
    w *= 1. + 1.4 * exp(-pow((x - play) * 1.2, 2.));
    heat += .45 * exp(-pow((x - play) * 1.2, 2.));
    return;
  }
  if (fx == 2) {            // funnel: everything flows down, brightness ramps as it converts
    float s = fract(aux.y + t * (.045 + h * .03));                  // 0 top … 1 throat
    float R0 = 3.0, R1 = .3, H = 3.3;
    float r = mix(R0, R1, pow(s, .8)) * (.5 + .5 * hash11(h * 71.));
    float a = aux.w * 6.2831 + s * 1.3 + t * .1;
    p = vec3(cos(a) * r, H * (.5 - s) * 2. - .1, sin(a) * r * .55);
    d = normalize(vec3(-sin(a) * .25, -1., cos(a) * .12)) * length(d);
    heat = .05 + s * .95;
    w *= .5 + s * .55;
    return;
  }
  if (fx == 3) {            // field: marks light up as the run progresses, misses go red then get handled
    float run = uFx.y;
    float on = smoothstep(aux.y - .012, aux.y, run);
    float missed = aux.w;
    float flash = missed * on * (1. - smoothstep(aux.y + .05, aux.y + .16, run));
    float handled = missed * smoothstep(aux.y + .1, aux.y + .2, run);
    w *= .3 + on * (1.8 + flash * 2.6 + handled * 1.4);
    heat = mix(.42, .95, handled);
    if (flash > .02) heat = -1.;
    d.y *= (.7 + on * .6) * (1. + missed * on * 1.6);
    return;
  }
  if (fx == 4) {            // species: clusters are tight on train data, scatter on validation
    vec3 j = hash31(h * 913. + aux.w * 17.) - .5;
    p += j * uFx.z * (.35 + 1.9 * h);
    heat = mix(heat, .05, uFx.z * step(.6441, aux.w));              // ~36% land in the wrong cluster
    return;
  }
  if (fx == 5) {            // skyline: towers grow from the ground
    float g = smoothstep(0., 1., clamp(uFx.w * 1.4 - aux.y * .5, 0., 1.));
    p.y = -1.2 + (p.y + 1.2) * g;
    d *= g;
    w *= .25 + .75 * g;
    return;
  }
  if (fx == 6) {            // orrery: each ring turns about its own axis at its own speed
    float ring = aux.w;
    float ang = uFx2.x * (.35 + ring * .22) * (mod(ring, 2.) < 1. ? 1. : -1.);
    float c = cos(ang), s = sin(ang);
    p.xz = mat2(c, -s, s, c) * p.xz;
    d.xz = mat2(c, -s, s, c) * d.xz;
    float act = 1. - smoothstep(0., 1.2, abs(ring - uFx2.y));
    w *= .55 + .9 * act;
    heat += .25 * act;
    return;
  }
  if (fx == 7) {            // scan: a bright band sweeps the frame
    float s = uFx2.w;
    float band = exp(-pow((p.y / 3. + .5 - s) * 9., 2.));
    w *= 1. + 2.2 * band;
    heat += .35 * band;
    return;
  }
  if (fx == 8) {            // tunnel dust drifts towards the camera
    p.z += mod(t * 1.2 + h * 40., 80.) - 40.;
    return;
  }
}

void main() {
  int id = int(aId + .5);
  int W = int(uTexW);
  ivec2 tc = ivec2(id % W, id / W);
  float h = hash11(aId * .7311 + 3.7);
  float h2 = hash11(aId * 1.913 + 9.1);

  int la = int(uForms.x + .5); int lb = int(uForms.y + .5);
  bool cloudA = uForms.x < -.5;

  vec3 pa, da; vec4 ua; float wa, ha;
  vec3 pb, db; vec4 ub; float wb, hb;

  if (cloudA) {
    vec3 r = hash31(aId) - .5;
    pa = normalize(r + 1e-3) * (4. + 9. * h2) + flow(r * 3., uTime * .2) * .6;
    da = normalize(hash31(aId + 5.) - .5) * .09; wa = .55; ha = .02; ua = vec4(0.);
  } else {
    vec4 P = texelFetch(uPos, ivec3(tc, la), 0);
    vec4 D = texelFetch(uDir, ivec3(tc, la), 0);
    ua = texelFetch(uAux, ivec3(tc, la), 0);
    pa = P.xyz; wa = P.w; da = D.xyz; ha = D.w;
    applyFx(la, pa, da, wa, ha, ua, h);
    mat3 R = rotYX(uFormRot[la]);
    pa = R * (pa * uFormScale[la]) + uFormOff[la]; da = R * (da * uFormScale[la]);
  }
  {
    vec4 P = texelFetch(uPos, ivec3(tc, lb), 0);
    vec4 D = texelFetch(uDir, ivec3(tc, lb), 0);
    ub = texelFetch(uAux, ivec3(tc, lb), 0);
    pb = P.xyz; wb = P.w; db = D.xyz; hb = D.w;
    applyFx(lb, pb, db, wb, hb, ub, h);
    mat3 R = rotYX(uFormRot[lb]);
    pb = R * (pb * uFormScale[lb]) + uFormOff[lb]; db = R * (db * uFormScale[lb]);
  }

  // per-stroke progress with a stagger so the swarm peels apart instead of moving as one sheet
  float stag = uStagger;
  float t = clamp((uMix - h * stag) / max(1. - stag, .001), 0., 1.);
  float e = easeIO(t);
  float mid = sin(PI * t);

  vec3 P = mix(pa, pb, e);
  vec3 D = mix(da, db, e);
  float w = mix(wa, wb, e);
  float heat = mix(ha, hb, e);

  // travel: swirl + streak along the direction of motion
  vec3 mv = pb - pa;
  vec3 sw = flow(P * .32 + h * 9., uTime * .35);
  P += sw * mid * uSwirl * (.4 + h2);
  float mvl = length(mv) + 1e-4;
  vec3 mdir = mv / mvl;
  D = mix(D, mdir * (length(D) + mid * uStreak * (.3 + h2)), clamp(mid * 1.6, 0., .92));

  // groups draw on (globe arcs, ruler beams …)
  float grpA = ua.x, grpB = ub.x;
  // reveal value: 0..1 draws the group on (by its param), 1..2 adds an "active" glow
  float rvA = grpA < .5 ? 1. : uReveal[int(grpA + .5)];
  float rvB = grpB < .5 ? 1. : uReveal[int(grpB + .5)];
  float revA = grpA < .5 ? 1. : smoothstep(ua.y - .04, ua.y, min(rvA, 1.));
  float revB = grpB < .5 ? 1. : smoothstep(ub.y - .04, ub.y, min(rvB, 1.));
  float glow = mix(max(rvA - 1., 0.), max(rvB - 1., 0.), e);
  w *= mix(revA, revB, e) * (1. + glow * 1.5);
  heat += glow * .3;

  // hero portrait: the sketch draws on left→right, then the warm light develops
  w *= mix(portraitGate(la, ua), portraitGate(lb, ub), e);

  // pointer: the light-pen pushes and lights nearby strokes
  vec3 dp = P - uPtr;
  float inf = exp(-dot(dp, dp) / (uPtrR * uPtrR));
  P += normalize(dp + vec3(1e-4)) * inf * uPtrPush * (.35 + h);
  float lit = inf;
  for (int i = 0; i < 8; i++) {
    vec4 tr = uTrail[i];
    vec3 dq = P - tr.xyz;
    lit += exp(-dot(dq, dq) / (uPtrR * uPtrR * 1.6)) * tr.w * .5;
  }

  // globe strokes fade on the far side so the front reads cleanly
  {
    bool globeStroke = (e > .5) ? (ub.z > 8.5 && ub.z < 9.5) : (ua.z > 8.5 && ua.z < 9.5);
    if (globeStroke) {
      int L = (e > .5) ? lb : la;
      vec3 n = normalize(P - uFormOff[L]);
      float fd = dot(n, normalize(cameraPosition - P));
      w *= mix(.12, 1., smoothstep(-.12, .32, fd));
    }
  }

  // to screen space
  vec3 P0 = P - D * .5, P1 = P + D * .5;
  vec4 c0 = projectionMatrix * viewMatrix * vec4(P0, 1.);
  vec4 c1 = projectionMatrix * viewMatrix * vec4(P1, 1.);
  if (c0.w < .05 || c1.w < .05 || w < .01) { gl_Position = vec4(2., 2., 2., 1.); vCol = vec4(0.); vUv = vec2(0.); return; }

  vec2 s0 = c0.xy / c0.w * .5 * uRes;
  vec2 s1 = c1.xy / c1.w * .5 * uRes;
  vec2 dv = s1 - s0;
  float dl = length(dv);
  vec2 dn = dl > .001 ? dv / dl : vec2(1., 0.);
  vec2 nn = vec2(-dn.y, dn.x);

  vec4 mvp = viewMatrix * vec4(P, 1.);
  float dist = -mvp.z;
  float coc = clamp(abs(dist - uFocus.x) / uFocus.y, 0., 1.);
  float fog = exp(-max(dist - 10., 0.) * uFocus.z);

  float hw = max(.55, uWidth * uPx * (1. + coc * 1.6) * (.75 + .5 * h2)) * .5;
  float minLen = hw * 2.4;
  float ext = max(0., (minLen - dl) * .5);
  vec2 sp = mix(s0, s1, position.x) + dn * (position.x * 2. - 1.) * (hw * .9 + ext) + nn * position.y * hw;
  float bw = mix(c0.w, c1.w, position.x);
  gl_Position = vec4(sp / (.5 * uRes) * bw, mix(c0.z, c1.z, position.x), bw);

  float twinkle = .82 + .18 * sin(uTime * (1.5 + h * 3.) + h * 40.);
  float thin = min(1., hw * 1.9);
  float nearK = ((e > .5) ? ub.z : ua.z) > 9.5 ? 1. : 0.;
  float passed = mix(1., smoothstep(uFocus.x - 6., uFocus.x - 1.6, dist), nearK);
  float a = uBright * w * twinkle * fog * thin * passed / (1. + coc * 1.8) * (1. + lit * 1.6);
  vec3 col = palette(heat < -.5 ? -1. : clamp(heat + uWarm, 0., 1.3));
  vUv = vec2(position.x, position.y);
  vCol = vec4(col * (1. + lit * .5), a);
}
`;

const frag = /* glsl */ `
precision highp float;
varying vec2 vUv;
varying vec4 vCol;
void main() {
  float across = 1. - vUv.y * vUv.y;
  float along = sin(3.14159265 * vUv.x);
  float a = pow(max(across, 0.), 1.4) * (.3 + .7 * along);
  gl_FragColor = vec4(vCol.rgb, vCol.a * a);
}
`;

export class Strokes {
  /**
   * @param {number} count strokes drawn at full quality
   * @param {number} layers number of form layers
   */
  constructor(count, layers = MAX_FORMS) {
    this.count = count;
    this.layers = layers;
    this.texW = Math.ceil(Math.sqrt(count));
    const texels = this.texW * this.texW;
    const mk = () => {
      const t = new DataArrayTexture(new Float32Array(texels * 4 * layers), this.texW, this.texW, layers);
      t.format = RGBAFormat;
      t.type = FloatType;
      t.minFilter = NearestFilter;
      t.magFilter = NearestFilter;
      t.generateMipmaps = false;
      t.unpackAlignment = 1;
      t.needsUpdate = true;
      return t;
    };
    this.pos = mk();
    this.dir = mk();
    this.aux = mk();

    const geo = new InstancedBufferGeometry();
    // unit quad: x = along the stroke (0 start … 1 end), y = across (-1 … 1)
    geo.setAttribute('position', new BufferAttribute(new Float32Array([0, -1, 0, 0, 1, 0, 1, -1, 0, 1, 1, 0]), 3));
    geo.setIndex([0, 2, 1, 1, 2, 3]);
    const ids = new Float32Array(texels);
    for (let i = 0; i < texels; i++) ids[i] = i;
    geo.setAttribute('aId', new InstancedBufferAttribute(ids, 1));
    geo.instanceCount = count;
    this.geometry = geo;

    const trail = [];
    for (let i = 0; i < 8; i++) trail.push(new Vector4(0, 0, 0, 0));
    this.uniforms = {
      uPos: { value: this.pos }, uDir: { value: this.dir }, uAux: { value: this.aux },
      uTexW: { value: this.texW },
      uForms: { value: new Vector2(-1, 0) },
      uMix: { value: 0 },
      uTime: { value: 0 },
      uRes: { value: new Vector2(1, 1) },
      uPx: { value: 1 },
      uWidth: { value: 1.35 },
      uBright: { value: 0.42 },
      uWarm: { value: 0 },
      uSwirl: { value: 1.15 },
      uStreak: { value: 0.85 },
      uStagger: { value: 0.55 },
      uLight: { value: 1 },
      uIntro: { value: 1 },
      uPtr: { value: new Vector3(0, 0, 0) },
      uPtrR: { value: 0.9 },
      uPtrPush: { value: 0.35 },
      uTrail: { value: trail },
      uFormRot: { value: new Float32Array(MAX_FORMS * 2) },
      uFormOff: { value: new Float32Array(MAX_FORMS * 3) },
      uFormScale: { value: new Float32Array(MAX_FORMS).fill(1) },
      uReveal: { value: new Float32Array(MAX_FORMS).fill(1) },
      uFx: { value: new Vector4(1, 0, 0, 1) },
      uFx2: { value: new Vector4(0, 0, 0, 0) },
      uFocus: { value: new Vector3(9, 14, 0.012) },
    };
    this.material = new ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: this.uniforms,
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });
    this.mesh = new Mesh(geo, this.material);
    this.mesh.frustumCulled = false;
  }

  /** copy a generated form into a layer of the data textures */
  setForm(layer, form) {
    const texels = this.texW * this.texW;
    const off = layer * texels * 4;
    const n = Math.min(form.pos.length, texels * 4);
    this.pos.image.data.set(form.pos.subarray(0, n), off);
    this.dir.image.data.set(form.dir.subarray(0, n), off);
    this.aux.image.data.set(form.aux.subarray(0, n), off);
    for (const t of [this.pos, this.dir, this.aux]) {
      t.addLayerUpdate?.(layer);
      t.needsUpdate = true;
    }
  }

  setActive(n) {
    this.geometry.instanceCount = Math.max(1000, Math.min(n, this.texW * this.texW));
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
    this.pos.dispose();
    this.dir.dispose();
    this.aux.dispose();
  }
}
