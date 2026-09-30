// Turns the DOM + native scroll into camera, morph state and per-scene choreography.
// The page is the single source of truth: sections say which scene they are (data-scene) and where the
// subject should sit (.stage__frame); this file only reads that and flies the camera accordingly.
import { Vector3 } from 'three';
import { clamp, lerp, smooth } from './util.js';
import { SCENES, LAYER, LAYER_Z, NOM } from './scenes.js';

const FOV = 32;
const TAN = Math.tan((FOV * Math.PI) / 360);

const ease = (t) => t * t * (3 - 2 * t);
const easeIO = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export class Director {
  constructor(stage, { mobile = false } = {}) {
    this.stage = stage;
    this.u = stage.strokes.uniforms;
    this.mobile = mobile;
    this.segs = [];
    this.phases = [];
    this.y = 0; // smoothed scroll
    this.yPrev = 0;
    this.vel = 0;
    this.ptr = { x: 0, y: 0, ax: 0, ay: 0, tx: 9, ty: 9, moved: 0 }; // tx/ty: the light pen (off-screen until used); ax/ay: parallax
    this.trail = [];
    this.intro = { done: false };
    this.data = {}; // async data (github etc.) scenes can read
    this.active = null;
    this.pose = { x: 0, y: 0, z: 12, yaw: 0, pitch: 0, roll: 0, ppx: 0, ppy: 0 };
    this._v = new Vector3();
    this.ready = false;
    this.frameId = 0;
    this.slabs = null;
    this.hud = null;
    this._hudFrame = -1;
    this.toolGroup = -1; // the toolbox group under the pointer
  }

  // ---------- DOM measurement ----------
  measure() {
    const vh = window.innerHeight, vw = window.innerWidth;
    const sy = window.scrollY;
    this.vh = vh;
    this.vw = vw;
    const segs = [];
    for (const el of document.querySelectorAll('main > section[data-scene]')) {
      if (el.hidden) continue;
      const def = SCENES[el.dataset.scene];
      if (!def) continue;
      const r = el.getBoundingClientRect();
      const top = r.top + sy;
      const subj = el.querySelector('.stage__subject');
      const frame = el.querySelector('.stage__frame');
      let box = { cx: vw * 0.5, cy: vh * 0.5, w: vw * 0.6, h: vh * 0.7 };
      if (subj && frame) {
        const fr = frame.getBoundingClientRect();
        const sr = subj.getBoundingClientRect();
        box = { cx: fr.left + fr.width / 2, cy: fr.top - sr.top + fr.height / 2, w: Math.max(40, fr.width), h: Math.max(40, fr.height) };
      }
      const steps = [...el.querySelectorAll('.stage__copy .step, .step')].filter((s, i, a) => a.indexOf(s) === i);
      // career rows: the timeline lights the one being read
      const items = [...el.querySelectorAll('.role')].map((s) => {
        const b = s.getBoundingClientRect();
        return { el: s, c: b.top + sy + b.height / 2 };
      });
      segs.push({
        el, def, id: el.id, top, bottom: top + r.height, len: r.height, box, items,
        steps: steps.map((s) => {
          const b = s.getBoundingClientRect();
          return { el: s, c: b.top + sy + b.height / 2, top: b.top + sy, h: b.height };
        }),
      });
    }
    this.segs = segs;
    this.buildPhases();
  }

  buildPhases() {
    const vh = this.vh;
    const S = this.segs;
    const n = S.length;
    const pad = S.slice(0, -1).map((a, i) => Math.min(vh * 0.45, a.len * 0.3, S[i + 1].len * 0.3));
    const P = [];
    for (let i = 0; i < n; i++) {
      const a = S[i];
      P.push({ type: 'seg', seg: a, i, y0: i > 0 ? a.top + pad[i - 1] : -1e5, y1: i < n - 1 ? a.bottom - pad[i] : a.bottom });
      if (i < n - 1) {
        const y0 = a.bottom - pad[i];
        P.push({ type: 'trans', from: a, to: S[i + 1], i, y0, y1: Math.max(S[i + 1].top + pad[i], y0 + 1) });
      }
    }
    this.phases = P;
    this.ready = P.length > 0;
  }

  // ---------- input ----------
  setPointer(nx, ny) {
    this.ptr.tx = this.ptr.ax = nx;
    this.ptr.ty = this.ptr.ay = ny;
  }

  // ---------- per-frame ----------
  update(dt, t) {
    if (!this.ready) return;
    const st = this.stage;
    const u = this.u;
    const vh = this.vh;
    // damped scroll: everything WebGL derives from this, so wheel notches turn into glide
    const target = window.scrollY;
    const k = 1 - Math.exp(-dt * 6.5);
    this.yPrev = this.y;
    this.y += (target - this.y) * k;
    if (Math.abs(target - this.y) < 0.05) this.y = target;
    const vel = (this.y - this.yPrev) / Math.max(dt, 1e-3) / vh; // viewport-heights per second
    this.vel += (vel - this.vel) * (1 - Math.exp(-dt * 8));

    const yc = this.y + vh * 0.5;
    const ph = this.findPhase(yc);
    this.frameId++;
    const ctx = { dir: this, u, t, dt, vh, yc, mobile: this.mobile, data: this.data, stage: st, frameId: this.frameId };

    let from, to, mix, pose;
    if (ph.type === 'seg') {
      const sg = ph.seg;
      const p = clamp((yc - ph.y0) / Math.max(1, ph.y1 - ph.y0), 0, 1);
      const def = sg.def;
      from = def.from ?? def.layer;
      to = def.to ?? def.layer;
      mix = def.mix ? def.mix(p, ctx) : 0;
      def.update?.(sg, { ...ctx, p, mix, fade: 1 });
      pose = this.poseOf(sg, p, ctx);
      this.active = sg;
    } else {
      const A = ph.from, B = ph.to;
      const x = clamp((yc - ph.y0) / (ph.y1 - ph.y0), 0, 1);
      const m = ease(x);
      from = A.def.to ?? A.def.layer;
      to = B.def.from ?? B.def.layer;
      mix = from === to ? 0 : x;
      A.def.update?.(A, { ...ctx, p: 1, mix: 0, fade: 1 - m });
      B.def.update?.(B, { ...ctx, p: 0, mix: 0, fade: m });
      const pa = this.poseOf(A, 1, ctx), pb = this.poseOf(B, 0, ctx);
      pose = this.blendPose(pa, pb, m);
      this.active = m < 0.5 ? A : B;
    }

    if (this.hud && this._hudFrame !== this.frameId) this.hud.hideAll();
    if (this.slabs && !this.segs.some((sg) => sg.def === SCENES.corridor && sg.lastFrame === this.frameId)) this.slabs.hide();

    // opening: a scattered cloud draws itself into the portrait
    if (!this.intro.done) {
      if (window.scrollY > this.vh * 0.6) {
        this.intro.done = true;
        this.introEase = 1;
        u.uIntro.value = 1;
        u.uLight.value = 1;
        u.uWarm.value = 0;
      } else {
        from = -1;
        to = LAYER.portrait;
        mix = this.intro.mix;
      }
    }

    // uniforms
    u.uForms.value.set(from, to);
    u.uMix.value = mix;
    this.applyPose(pose, dt, t);
    st.fin && (st.fin.uniforms.uCA.value = st.tier.ca ? 0.004 + clamp(Math.abs(this.vel) * 0.35, 0, 1) * 0.11 : 0);
    u.uStreak.value = 0.8 + clamp(Math.abs(this.vel) * 2.5, 0, 1.1);
  }

  findPhase(y) {
    const P = this.phases;
    for (let i = 0; i < P.length; i++) if (y <= P[i].y1) return P[i];
    return P[P.length - 1];
  }

  // camera pose for a segment at local progress p (0..1)
  poseOf(seg, p, ctx) {
    const def = seg.def;
    const box = seg.box;
    const nomL = def.layer ?? def.from;
    const nom = def.nom || NOM[nomL] || { w: 6, h: 6 };
    const ppu = Math.min(box.w / nom.w, box.h / nom.h); // pixels per world unit we want at the form plane
    const D = this.vh / (2 * TAN * ppu);
    const ppx = (box.cx / this.vw) * 2 - 1;
    const ppy = 1 - (box.cy / this.vh) * 2;
    let base = { x: 0, y: 0, z: (LAYER_Z[nomL] ?? 0) + D, yaw: 0, pitch: 0, roll: 0, ppx, ppy, D, sz: LAYER_Z[nomL] ?? 0 };
    if (def.pose) base = def.pose(seg, p, base, ctx) || base;
    return base;
  }

  blendPose(a, b, m) {
    const o = {};
    for (const key of ['x', 'y', 'z', 'yaw', 'pitch', 'roll', 'ppx', 'ppy', 'sz']) o[key] = lerp(a[key], b[key], m);
    return o;
  }

  applyPose(pose, dt, t) {
    const st = this.stage, cam = st.camera, ptr = this.ptr;
    const k = 1 - Math.exp(-dt * 5);
    ptr.x += (ptr.ax - ptr.x) * k;
    ptr.y += (ptr.ay - ptr.y) * k;
    const drift = 0.5;
    cam.position.set(pose.x + ptr.x * 0.35 * drift + Math.sin(t * 0.13) * 0.06, pose.y + ptr.y * 0.22 * drift + Math.cos(t * 0.11) * 0.04, pose.z);
    cam.rotation.set(pose.pitch - ptr.y * 0.018, pose.yaw - ptr.x * 0.03, pose.roll, 'YXZ');
    st.pp.x = pose.ppx;
    st.pp.y = pose.ppy;
    // focus plane follows the subject
    this.u.uFocus.value.set(Math.abs(pose.z - (pose.sz ?? 0)), 15, 0.012);
    this.updatePointerWorld(pose);
  }

  updatePointerWorld(pose) {
    const st = this.stage, cam = st.camera, ptr = this.ptr, u = this.u;
    // ray through the pointer, intersected with the plane of the active form
    const zPlane = LAYER_Z[this.active?.def.layer ?? this.active?.def.from ?? 0] ?? 0;
    cam.updateMatrixWorld();
    const ndcX = ptr.tx, ndcY = ptr.ty;
    // account for the principal-point shift
    const v = this._v.set(ndcX - 0, ndcY - 0, 0.5).unproject(cam);
    const dir = v.sub(cam.position).normalize();
    const tHit = (zPlane - cam.position.z) / (dir.z || -1e-4);
    const hit = cam.position.clone().addScaledVector(dir, tHit);
    u.uPtr.value.copy(hit);
    // trail
    ptr.moved *= 0.9;
    const tr = u.uTrail.value;
    if (!this._lastHit || this._lastHit.distanceTo(hit) > 0.12) {
      this._lastHit = hit.clone();
      tr.unshift(tr.pop());
      tr[0].set(hit.x, hit.y, hit.z, 1);
    }
    for (const q of tr) q.w *= 0.955;
  }
}

export { smooth, easeIO };
