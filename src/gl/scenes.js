// One entry per data-scene. Each scene says which form layer(s) it shows, how big the subject is
// (world units, used to fit the DOM frame), how the camera behaves, and what to do each frame.
import { clamp, lerp, smooth } from './util.js';
import { KARACHI, R as GLOBE_R, faceTo, sph } from './forms/globe.js';
import { CORRIDOR, timelineLayout, toolCell } from './forms/others.js';
import { Vector3 } from 'three';

// in page order, so the camera always travels forward
export const LAYER = { portrait: 0, globe: 1, corridor: 2, calm: 3, timeline: 4, calm2: 5, skyline: 6, tools: 7, portrait2: 8 };
export const LAYER_Z = {};
for (const k of Object.values(LAYER)) LAYER_Z[k] = -16 * k;

export const NOM = {
  0: { w: 6.4, h: 6.7 },
  1: { w: 6.0, h: 6.0 },
  2: { w: 6.8, h: 3.8 },
  3: { w: 10, h: 6 },
  4: { w: 7.6, h: 7.0 },
  5: { w: 10, h: 6 },
  6: { w: 10.6, h: 5 },
  7: { w: 6.2, h: 7.4 },
  8: { w: 6.4, h: 6.7 },
};
// a heading without its favicon or letter mark, e.g. "Stackloom Technologies", "Endifaa | اندفاع"
const plainText = (el) => {
  const c = el.cloneNode(true);
  c.querySelectorAll('.fav, .vh').forEach((n) => n.remove());
  return c.textContent.replace(/\s+/g, ' ').trim();
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
// a form-space point turned the way the shader's rotYX turns the form (yaw about y, then pitch about x)
const _v = new Vector3();
const rotYX = (p, yaw, pitch) => {
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  const z = -sy * p[0] + cy * p[2];
  return _v.set(cy * p[0] + sy * p[2], cp * p[1] - sp * z, sp * p[1] + cp * z);
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

  // ---------------------------------------------------------------- clients: the globe turns from Karachi to each country
  globe: {
    layer: LAYER.globe,
    update(seg, ctx) {
      const u = ctx.u;
      // step 0 is the intro (facing home), step k the k-th country row; all of it read from the page
      const P = (seg.places ||= seg.steps.filter((s) => s.el.dataset.lat).map((s) => ({
        lat: +s.el.dataset.lat, lon: +s.el.dataset.lon, name: s.el.querySelector('h3')?.textContent.trim() || '',
      })));
      const si = stepIndex(seg.steps, ctx.yc);
      const home = faceTo(KARACHI.lat, KARACHI.lon);
      const targets = [{ yaw: home.yaw, pitch: home.pitch * 0.9 }];
      for (const m of P) {
        const f = faceTo(m.lat, m.lon);
        targets.push({ yaw: f.yaw, pitch: f.pitch * 0.82 + 0.1 });
      }
      const i0 = clamp(Math.floor(si), 0, targets.length - 1), i1 = clamp(i0 + 1, 0, targets.length - 1);
      const f = smooth(0, 1, si - i0);
      const A = targets[i0], B = targets[i1];
      const yaw = A.yaw + angDiff(A.yaw, B.yaw) * f + Math.sin(ctx.t * 0.07) * 0.02, pitch = lerp(A.pitch, B.pitch, f);
      rot(u, LAYER.globe, yaw, pitch);
      // each country: its arc from Karachi draws on as its row arrives (0..1), then it glows while the row is read (1..2)
      const rv = u.uReveal.value;
      for (let k = 0; k < P.length && k < 15; k++) {
        const s = k + 1;
        rv[1 + k] = smooth(s - 0.85, s - 0.2, si) + 1 - smooth(0.3, 0.75, Math.abs(si - s));
      }
      seg.state = { si };
      // the country being read gets its name pinned above its pin
      const hud = ctx.dir.hud;
      if (hud) {
        const k = Math.round(si) - 1, m = P[k];
        if (m) {
          const w = rotYX(sph(m.lat, m.lon, GLOBE_R + 0.55), yaw, pitch);
          const facing = smooth(0.15, 0.45, w.z / (GLOBE_R + 0.55));
          w.z += LAYER_Z[LAYER.globe];
          hud.place('globe', m.name, w, facing * (1 - smooth(0.2, 0.42, Math.abs(si - (k + 1)))) * smooth(0.6, 0.96, ctx.fade ?? 1));
        }
        ctx.dir._hudFrame = ctx.frameId;
      }
    },
    pose(seg, p, base) {
      const si = seg.state?.si ?? 0, n = seg.places?.length ?? 0;
      const near = Math.max(0, 1 - Math.abs(si - Math.round(si)) * 2.2) * (si >= 0.6 && si <= n + 0.4 ? 1 : 0);
      base.z -= near * 1.2;
      return base;
    },
  },

  // ---------------------------------------------------------------- the work: fly down a corridor of sketched sites
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
      const last = Math.max(0, seg.steps.length - 2);
      const si = clamp((seg.state?.si ?? 0) - 1, 0, last);
      const k0 = Math.floor(si), k1 = Math.min(last, k0 + 1), f = smooth(0, 1, si - k0);
      const fx = (k) => (k % 2 === 0 ? -CORRIDOR.x : CORRIDOR.x);
      base.x += lerp(fx(k0), fx(k1), f);
      base.z -= si * CORRIDOR.dz;
      base.sz -= si * CORRIDOR.dz;
      return base;
    },
  },

  // ---------------------------------------------------------------- quiet starfields for the reading chapters
  calm: { layer: LAYER.calm },
  calm2: { layer: LAYER.calm2 },

  // ---------------------------------------------------------------- career: the roles as a timeline; the one being read glows
  timeline: {
    layer: LAYER.timeline,
    update(seg, ctx) {
      const u = ctx.u, items = seg.items || [];
      const roles = (seg.roles ||= items.map((it) => ({
        start: it.el.dataset.start,
        end: it.el.dataset.end,
        // the Latin name only ("Endifaa", not "Endifaa | اندفاع"), without its favicon or letter mark
        name: plainText(it.el.querySelector('h3')).split(' | ')[0],
      })));
      if (!roles.length || roles.some((r) => !r.start || !r.end)) return;
      const L = (seg.layout ||= timelineLayout(roles));
      // the bars draw on left to right as the chapter arrives, then the role being read glows
      const draw = smooth(0, 0.06, ctx.p); // quick: on a phone the list covers the chart soon after
      const on = Math.round(stepIndex(items, ctx.yc));
      const rv = u.uReveal.value;
      for (let k = 0; k < roles.length && k < 15; k++) rv[1 + k] = draw + (k === on ? draw * 0.5 : 0);
      const yaw = Math.sin(ctx.t * 0.1) * 0.12, pitch = 0.06;
      rot(u, LAYER.timeline, yaw, pitch);
      // company names at the start of their bars (the one being read as a pill), years under the axis
      const hud = ctx.dir.hud;
      if (hud) {
        const alpha = smooth(0.6, 0.96, ctx.fade ?? 1) * draw;
        const at = (x, y) => {
          const w = rotYX([x, y, 0], yaw, pitch);
          w.z += LAYER_Z[LAYER.timeline];
          return w;
        };
        roles.forEach((r, k) => hud.place('role' + k, r.name, at(L.bars[k].x0, L.bars[k].y + 0.14), alpha, k === on ? '' : 'dim'));
        L.years.forEach((y, k) => hud.place('year' + k, String(y.year), at(y.x - 0.12, L.axisY - 0.32), alpha, 'dim'));
        hud.place('now', 'now', at(L.now - 0.12, L.top + 0.22), alpha, 'dim');
        ctx.dir._hudFrame = ctx.frameId;
      }
    },
  },

  // ---------------------------------------------------------------- toolbox: the tools' logos; hovering a group lights its row
  tools: {
    layer: LAYER.tools,
    update(seg, ctx) {
      const u = ctx.u;
      const groups = (seg.groups ||= [...seg.el.querySelectorAll('.ring')].map((r) => [...r.querySelectorAll('li')].map((li) => li.textContent.trim())));
      const counts = groups.map((g) => g.length);
      const on = ctx.dir.toolGroup;
      const rv = u.uReveal.value;
      for (let k = 0; k < groups.length && k < 15; k++) rv[1 + k] = k === on ? 1.4 : 1;
      const yaw = Math.sin(ctx.t * 0.1) * 0.22, pitch = 0.08;
      rot(u, LAYER.tools, yaw, pitch);
      // the hovered group's tools get their names under their logos
      const hud = ctx.dir.hud;
      if (hud) {
        const alpha = smooth(0.6, 0.96, ctx.fade ?? 1);
        for (let j = 0; j < 6; j++) {
          const name = groups[on]?.[j];
          if (!name) {
            hud.place('tool' + j, '', _v, 0);
            continue;
          }
          const p = toolCell(on, j, counts);
          const w = rotYX([p[0] - 0.45, p[1] - 0.8, p[2]], yaw, pitch);
          w.z += LAYER_Z[LAYER.tools];
          hud.place('tool' + j, name, w, alpha);
        }
        ctx.dir._hudFrame = ctx.frameId;
      }
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

  // ---------------------------------------------------------------- contact: back out of the eye
  portrait2: {
    layer: LAYER.portrait2,
    pose(seg, p, base, ctx) {
      const eye = ctx.dir.eye || { x: 0.5, y: 0.7 };
      const e = smooth(0, 0.2, p); // settled before the contact copy is read, so it never sits on the zoomed face
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
