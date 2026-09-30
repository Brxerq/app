// One entry per data-scene. Each scene says which form layer(s) it shows, how big the subject is
// (world units, used to fit the DOM frame), how the camera behaves, and what to do each frame.
import { clamp, lerp, smooth } from './util.js';
import { MARKETS, KARACHI, faceTo } from './forms/globe.js';
import { CORRIDOR } from './forms/others.js';
import { SHELF } from './forms/vision.js';
import { Vector3 } from 'three';

export const LAYER = {
  portrait: 0, globe: 1, wave: 2, shelf: 3, liveness: 4, species: 5, funnel: 6,
  corridor: 7, field: 8, ruler: 9, skyline: 10, orrery: 11, portrait2: 12, calm: 13,
};
export const LAYER_Z = {};
for (const k of Object.values(LAYER)) LAYER_Z[k] = -16 * k;

export const NOM = {
  0: { w: 6.4, h: 6.7 },
  1: { w: 6.0, h: 6.0 },
  2: { w: 10.2, h: 5.6 },
  3: { w: 7.6, h: 5.9 },
  4: { w: 6.4, h: 5.8 },
  5: { w: 6.6, h: 6.4 },
  6: { w: 7.0, h: 7.6 },
  7: { w: 6.8, h: 3.8 },
  8: { w: 6.7, h: 8.3 },
  9: { w: 7.6, h: 8.6 },
  10: { w: 10.6, h: 5 },
  11: { w: 8.8, h: 8 },
  12: { w: 6.4, h: 6.7 },
  13: { w: 10, h: 6 },
};

// float index of the step whose centre the viewport centre is passing (0 … n-1)
export function stepIndex(steps, yc) {
  if (!steps.length) return 0;
  if (yc <= steps[0].c) return 0;
  for (let i = 0; i < steps.length - 1; i++) {
    if (yc <= steps[i + 1].c) return i + (yc - steps[i].c) / Math.max(1, steps[i + 1].c - steps[i].c);
  }
  return steps.length - 1;
}

const angDiff = (a, b) => {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
};
// raise the camera but keep the subject centred: the pitch always points back at the origin
const lookDownAtOrigin = (base, raise) => {
  base.y += raise;
  base.pitch = -Math.atan2(raise, base.D);
};
const rot = (u, layer, yaw, pitch) => {
  const fr = u.uFormRot.value;
  fr[layer * 2] = yaw;
  fr[layer * 2 + 1] = pitch;
};

const _v = new Vector3();
const shelfScene = {
  layer: LAYER.shelf,
  update(seg, { u, p, t, dir, fade, frameId }) {
    const rv = u.uReveal.value;
    rv[1] = smooth(0.08, 0.26, p);
    rv[2] = smooth(0.3, 0.48, p);
    rv[3] = smooth(0.52, 0.7, p);
    u.uFx2.value.w = (t * 0.11) % 1;
    const yaw = Math.sin(t * 0.2) * 0.06, pitch = 0.02;
    rot(u, LAYER.shelf, yaw, pitch);
    // the detections get their confidence tags, pinned to the boxes (text comes from the page)
    const hud = dir.hud;
    if (hud) {
      const tags = (seg.el.querySelector('[data-detections]')?.dataset.detections || '').split('|');
      const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      SHELF.gaps.forEach(([r, sl], g) => {
        const x = SHELF.x0 + sl * SHELF.dx - SHELF.boxW / 2, y = SHELF.rows[r] - 0.02 + SHELF.boxH / 2, z = 0.04;
        let X = cy * x + sy * z, Z = -sy * x + cy * z, Y = y;
        const Y2 = cp * Y - sp * Z; Z = sp * Y + cp * Z; Y = Y2;
        _v.set(X, Y, Z + LAYER_Z[LAYER.shelf]);
        hud.place('shelf' + g, tags[g] || 'empty', _v, smooth(0.85, 1, rv[1 + g]) * smooth(0.6, 0.96, fade ?? 1));
      });
      dir._hudFrame = frameId;
    }
  },
};
const livenessScene = {
  layer: LAYER.liveness,
  update(seg, { u, p, t }) {
    const rv = u.uReveal.value;
    for (let k = 0; k < 4; k++) rv[1 + k] = smooth(0.02 + k * 0.2, 0.16 + k * 0.2, p);
    rot(u, LAYER.liveness, 0.62 + Math.sin(t * 0.25) * 0.08, 0.22);
  },
};
const speciesScene = {
  layer: LAYER.species,
  update(seg, { u, p, t }) {
    u.uFx.value.z = smooth(0.2, 0.62, p);
    rot(u, LAYER.species, t * 0.08, 0.25);
  },
};

export const SCENES = {
  // ---------------------------------------------------------------- hero portrait
  portrait: {
    layer: LAYER.portrait,
    pose(seg, p, base, ctx) {
      const k = ctx.dir.introEase ?? 1;
      base.z += (1 - k) * 3.2;
      base.roll += (1 - k) * 0.06;
      return base;
    },
  },

  // ---------------------------------------------------------------- the dive: into the pupil, out into the globe
  dive: {
    from: LAYER.portrait,
    to: LAYER.globe,
    mix: (p) => smooth(0.3, 0.84, p),
    pose(seg, p, base, ctx) {
      const d = ctx.dir;
      const hero = d.segs.find((s) => s.def === SCENES.portrait);
      const globe = d.segs.find((s) => s.def === SCENES.globe);
      const eye = d.eye || { x: 0.5, y: 0.7 };
      const a = hero ? d.poseOf(hero, 1, ctx) : base;
      const b = globe ? d.poseOf(globe, 0, ctx) : base;
      const zEye = 0.28;
      const t1 = clamp(p / 0.5, 0, 1), t2 = clamp((p - 0.5) / 0.5, 0, 1);
      const e1 = t1 * t1 * (3 - 2 * t1), e2 = t2 * t2 * (3 - 2 * t2);
      if (p < 0.5) {
        const k = Math.pow(e1, 1.6);
        return {
          x: lerp(a.x, eye.x, k), y: lerp(a.y, eye.y, k), z: lerp(a.z, zEye, Math.pow(e1, 1.25)),
          yaw: lerp(a.yaw, 0, k), pitch: lerp(a.pitch, 0, k), roll: lerp(a.roll, 0, k),
          ppx: lerp(a.ppx, 0, k), ppy: lerp(a.ppy, 0, k), sz: a.sz,
        };
      }
      return {
        x: lerp(eye.x, b.x, e2), y: lerp(eye.y, b.y, e2), z: lerp(zEye, b.z, e2),
        yaw: 0, pitch: 0, roll: 0,
        ppx: lerp(0, b.ppx, e2), ppy: lerp(0, b.ppy, e2), sz: lerp(a.sz, b.sz, e2),
      };
    },
    update(seg, ctx) {
      ctx.u.uSwirl.value = 1.5;
      // the four method lines light up in step with the dive
      const idx = clamp(Math.floor(ctx.p * 4.4), 0, 3);
      if (seg.idx !== idx) {
        seg.idx = idx;
        seg.el.querySelectorAll('.method__step').forEach((li, i) => {
          li.classList.toggle('is-on', i === idx);
          li.classList.toggle('is-past', i < idx);
        });
      }
    },
  },

  // ---------------------------------------------------------------- Global Health: the globe
  globe: {
    layer: LAYER.globe,
    update(seg, ctx) {
      const u = ctx.u;
      const n = seg.steps.length; // intro, 6 markets, numbers, list
      const si = stepIndex(seg.steps, ctx.yc);
      const targets = [];
      const rest = faceTo(30, 48);
      targets.push({ yaw: rest.yaw, pitch: rest.pitch * 0.9 });
      for (const m of MARKETS) {
        const f = faceTo(m.lat, m.lon);
        targets.push({ yaw: f.yaw, pitch: f.pitch * 0.82 + 0.1 });
      }
      const wide = faceTo(18, -18);
      targets.push({ yaw: wide.yaw, pitch: wide.pitch });
      targets.push({ yaw: wide.yaw - 0.9, pitch: wide.pitch });
      const i0 = clamp(Math.floor(si), 0, targets.length - 1), i1 = clamp(i0 + 1, 0, targets.length - 1);
      const f = smooth(0, 1, si - i0);
      const A = targets[i0], B = targets[i1];
      rot(u, LAYER.globe, A.yaw + angDiff(A.yaw, B.yaw) * f + Math.sin(ctx.t * 0.07) * 0.02, lerp(A.pitch, B.pitch, f));
      const rv = u.uReveal.value;
      for (let k = 1; k <= 6; k++) {
        rv[k] = smooth(k - 0.85, k - 0.2, si);
        rv[6 + k] = smooth(k - 0.45, k - 0.05, si);
      }
      seg.state = { si, n };
    },
    pose(seg, p, base) {
      const si = seg.state?.si ?? 0;
      const near = Math.max(0, 1 - Math.abs(si - Math.round(si)) * 2.2) * (si >= 0.6 && si <= 6.4 ? 1 : 0);
      base.z -= near * 1.6;
      return base;
    },
  },

  // ---------------------------------------------------------------- voice: waveform → booked slots
  wave: {
    layer: LAYER.wave,
    update(seg, { u, t, yc }) {
      const si = stepIndex(seg.steps, yc);
      u.uFx.value.x = 1.15 + 0.4 * Math.sin(t * 0.7) + Math.min(0.5, si * 0.18);
      rot(u, LAYER.wave, -0.22, 0.1);
    },
  },

  // ---------------------------------------------------------------- vision: three sub-scenes over one section
  vision: {
    split(seg) {
      const projects = seg.steps.filter((s) => s.el.classList.contains('project'));
      const bounds = [seg.top, ...projects.slice(1).map((s) => s.top), seg.bottom];
      return [shelfScene, livenessScene, speciesScene].map((def, i) => {
        const top = bounds[i], bottom = bounds[i + 1];
        return { ...seg, def, top, bottom, len: bottom - top, steps: seg.steps.filter((s) => s.c >= top && s.c < bottom) };
      });
    },
  },

  // ---------------------------------------------------------------- sales: the funnel
  funnel: {
    layer: LAYER.funnel,
    update(seg, { u, t }) {
      rot(u, LAYER.funnel, Math.sin(t * 0.18) * 0.25, 0.18);
    },
  },

  // ---------------------------------------------------------------- the web: fly down a corridor of frames
  corridor: {
    layer: LAYER.corridor,
    update(seg, ctx) {
      const si = stepIndex(seg.steps, ctx.yc);
      seg.state = { si };
      seg.lastFrame = ctx.frameId;
      const sl = ctx.dir.slabs;
      if (sl) sl.frame(ctx.dt, { si, vel: ctx.dir.vel, near: (ctx.fade ?? 1) > 0.05, ptr: ctx.dir.ptr, time: ctx.t });
    },
    pose(seg, p, base) {
      const si = clamp((seg.state?.si ?? 0) - 1, 0, 8);
      const k0 = Math.floor(si), k1 = Math.min(8, k0 + 1), f = smooth(0, 1, si - k0);
      const fx = (k) => (k % 2 === 0 ? -CORRIDOR.x : CORRIDOR.x);
      base.x += lerp(fx(k0), fx(k1), f);
      base.z -= si * CORRIDOR.dz;
      base.sz -= si * CORRIDOR.dz;
      return base;
    },
  },

  // ---------------------------------------------------------------- cold storage: the same field, before a single run has lit it
  archive: {
    layer: LAYER.field,
    update(seg, { u }) {
      u.uFx.value.y = 0;
    },
  },

  // ---------------------------------------------------------------- a resting starfield between chapters
  calm: { layer: LAYER.calm },

  // ---------------------------------------------------------------- reliability: the field of runs
  field: {
    layer: LAYER.field,
    update(seg, { u, yc }) {
      const si = stepIndex(seg.steps, yc);
      u.uFx.value.y = smooth(0.35, 2.2, si);
    },
  },

  // ---------------------------------------------------------------- career: a time axis, each role a beam
  ruler: {
    layer: LAYER.ruler,
    update(seg, { u, yc, vh }) {
      const rv = u.uReveal.value;
      const items = seg.items || [];
      for (let g = 0; g < items.length && g < 8; g++) {
        const c = items[g].c;
        const draw = smooth(c - vh * 0.95, c - vh * 0.4, yc);
        const glow = 1 - smooth(0.12, 0.55, Math.abs(yc - c) / vh);
        rv[1 + g] = draw + draw * glow * 0.999;
      }
      seg.state = { q: items.length ? clamp((yc - items[0].c) / Math.max(1, items[items.length - 1].c - items[0].c), 0, 1) : 0 };
    },
    pose(seg, p, base) {
      base.y -= ((seg.state?.q ?? 0) - 0.5) * 1.1;
      return base;
    },
  },

  // ---------------------------------------------------------------- commits: night skyline
  skyline: {
    layer: LAYER.skyline,
    update(seg, { u, p, t }) {
      u.uFx.value.w = smooth(0.0, 0.55, p);
      rot(u, LAYER.skyline, Math.sin(t * 0.15) * 0.05, 0);
    },
    pose(seg, p, base) {
      lookDownAtOrigin(base, 1.0);
      base.x += lerp(-0.5, 0.5, p);
      return base;
    },
  },

  // ---------------------------------------------------------------- toolbox: the orrery
  orrery: {
    layer: LAYER.orrery,
    update(seg, ctx) {
      const { u, t, p } = ctx;
      u.uFx2.value.x = t * 0.22 + p * 2.2;
      u.uFx2.value.y = ctx.dir.orreryRing ?? -5;
    },
    pose(seg, p, base) {
      lookDownAtOrigin(base, 2.6);
      return base;
    },
  },

  // ---------------------------------------------------------------- contact: back out of the eye
  portrait2: {
    layer: LAYER.portrait2,
    pose(seg, p, base, ctx) {
      const eye = ctx.dir.eye || { x: 0.5, y: 0.7 };
      const e = smooth(0, 0.7, p);
      const k = Math.pow(e, 0.9);
      const zEye = LAYER_Z[LAYER.portrait2] + 0.28;
      return {
        x: lerp(eye.x, base.x, k), y: lerp(eye.y, base.y, k), z: lerp(zEye, base.z, k),
        yaw: base.yaw, pitch: base.pitch, roll: base.roll,
        ppx: lerp(0, base.ppx, k), ppy: lerp(0, base.ppy, k), sz: base.sz,
      };
    },
  },
};

export { KARACHI };
