// Procedural forms for the middle of the journey. Each returns { pos, dir, aux } for N strokes.
// Anything that comes from the page (roles, sites, tools) is read from the DOM, never duplicated here.
import { mulberry32, halton, clamp } from '../util.js';
import { makeForm, put, hide, dust, rectEdge } from './kit.js';

const TAU = Math.PI * 2;

// ---------------------------------------------------------------- voice: waveform → booked slots
export function waveForm(N, seed = 21) {
  const f = makeForm(N), rand = mulberry32(seed);
  let i = 0;
  const lanes = 11;
  const nLane = Math.floor(N * 0.24);
  for (; i < nLane; i++) {
    const lane = i % lanes;
    const x = -4.4 + halton(i, 2) * 4.9;
    put(f, i, x, (lane - 5) * 0.2, (lane - 5) * 0.14, 0.2, 0, 0, 0.4 + rand() * 0.3, 0.2 + (lane / lanes) * 0.4, 0, lane / lanes + rand() * 0.06, 1, rand());
  }
  // the gate where speech becomes structure
  for (let k = 0; k < 700 && i < N; k++, i++) {
    put(f, i, 0.62 + (rand() - 0.5) * 0.03, (halton(k, 2) * 2 - 1) * 2.7, (rand() - 0.5) * 0.1, 0, 0.14, 0, 0.7, 0.5);
  }
  // 200 slots, 95% booked
  const cols = 20, rows = 10;
  const missed = new Set();
  while (missed.size < 10) missed.add(Math.floor(rand() * cols * rows));
  for (let s = 0; s < cols * rows; s++) {
    const c = s % cols, r = Math.floor(s / cols), miss = missed.has(s);
    for (let k = 0; k < 9 && i < N; k++, i++) {
      put(f, i, 1.0 + c * 0.175 + (rand() - 0.5) * 0.03, -1.55 + r * 0.34 + (rand() - 0.5) * 0.05, (rand() - 0.5) * 0.05, 0, 0.2, 0, miss ? 0.16 : 0.7 + rand() * 0.3, miss ? 0.05 : 0.9);
    }
  }
  dust(f, i, rand, { r0: 4, r1: 12, w: 0.18, sx: 1.4, sy: 0.6 });
  return f;
}

// ---------------------------------------------------------------- reliability: 4,500 marks, 0.4% miss
export function fieldForm(N, { runs = 4500, rate = 0.4 } = {}, seed = 33) {
  const f = makeForm(N), rand = mulberry32(seed);
  const cols = 60, rows = 75, sp = 0.105;
  const nFail = Math.round((runs * rate) / 100);
  const fail = new Set();
  while (fail.size < nFail) fail.add(Math.floor(rand() * runs));
  let i = 0;
  for (let m = 0; m < runs && i < N; m++, i++) {
    const col = Math.floor(m / rows), row = m % rows;
    put(f, i, (col - (cols - 1) / 2) * sp, (row - (rows - 1) / 2) * sp, 0, 0, 0.056, 0, 1.1, 0.42, 0, m / runs, 3, fail.has(m) ? 1 : 0);
  }
  const dustN = Math.min(N - i, Math.floor(N * 0.16));
  const start = i;
  for (; i < start + dustN; i++) {
    const t = rand() * TAU, r = 5 + rand() * 7;
    put(f, i, Math.cos(t) * r * 1.5, (rand() - 0.5) * 9, Math.sin(t) * r - 3, 0.05, 0, 0, 0.16 + rand() * 0.1, 0.2);
  }
  for (; i < N; i++) hide(f, i, rand);
  return f;
}

// ---------------------------------------------------------------- sales: prospects flow down a funnel
export function funnelForm(N, seed = 41) {
  const f = makeForm(N), rand = mulberry32(seed);
  let i = 0;
  const flow = Math.floor(N * 0.8);
  for (; i < flow; i++) put(f, i, 0, 0, 0, 0.11, 0, 0, 0.5 + rand() * 0.5, 0.3, 0, rand(), 2, rand());
  // four stage rings: opportunities → engagement → negotiation → closed
  const stages = [0.1, 0.36, 0.62, 0.88];
  const R0 = 3.0, R1 = 0.3, H = 3.3;
  for (let k = 0; k < stages.length; k++) {
    const s = stages[k];
    const r = R0 + (R1 - R0) * Math.pow(s, 0.8);
    for (let j = 0; j < 420 && i < N; j++, i++) {
      const a = (j / 420) * TAU;
      put(f, i, Math.cos(a) * r, H * (0.5 - s) * 2 - 0.1, Math.sin(a) * r * 0.55, -Math.sin(a) * 0.13, 0, Math.cos(a) * 0.07, 0.9, 0.12 + k * 0.28);
    }
  }
  dust(f, i, rand, { r0: 4, r1: 10, w: 0.15, sx: 1.1, sy: 0.9 });
  return f;
}

// ---------------------------------------------------------------- the web: frames receding down a corridor
export const CORRIDOR = { W: 5.6, H: 2.94, dz: 4.6, x: 1.15 };
export function corridorForm(N, count = 9, seed = 51) {
  const f = makeForm(N), rand = mulberry32(seed);
  let i = 0;
  const { W, H, dz, x } = CORRIDOR;
  const per = 1300;
  for (let k = 0; k < count; k++) {
    const cx = k % 2 === 0 ? -x : x, cy = Math.sin(k * 1.7) * 0.18, cz = -k * dz;
    for (let j = 0; j < per && i < N; j++, i++) {
      const e = rectEdge(halton(j, 2), 0, cx, cy, W + 0.14, H + 0.14);
      const dxl = e.dx * 0.2, dyl = e.dy * 0.2;
      put(f, i, e.x, e.y, cz, dxl, dyl, 0, 0.55 + rand() * 0.4, 0.2 + (k / count) * 0.6, 0, 0, 10);
    }
  }
  for (const side of [-1, 1]) {
    for (let j = 0; j < 1500 && i < N; j++, i++) {
      const z = 6 - halton(j, 2) * (count * dz + 12);
      put(f, i, side * 5.6, -2.5, z, 0, 0, -0.5, 0.45, 0.15 + rand() * 0.1);
    }
  }
  const start = i;
  for (; i < start + Math.floor(N * 0.4); i++) {
    const t = rand() * TAU, r = 4.5 + rand() * 6;
    put(f, i, Math.cos(t) * r, Math.sin(t) * r * 0.7, -rand() * 60 + 10, 0, 0, -0.18, 0.22 + rand() * 0.2, 0.2 + rand() * 0.25, 0, 0, 8, rand());
  }
  for (; i < N; i++) hide(f, i, rand);
  return f;
}

// ---------------------------------------------------------------- career: a time-axis with each role as a beam
const MONTH = 0.24;
const parseYM = (s) => {
  const [y, m] = s.split('-').map(Number);
  return y * 12 + (m - 1);
};
/** time runs down the page: the present at the top, every role a vertical beam between its start and end */
export function rulerForm(N, seed = 61) {
  const f = makeForm(N), rand = mulberry32(seed);
  const now = new Date();
  const nowM = now.getFullYear() * 12 + now.getMonth();
  const roles = [...document.querySelectorAll('#career .role[data-start]')].map((el, idx) => {
    const s = parseYM(el.dataset.start);
    const present = el.dataset.end === 'present';
    return { idx, s, e: present ? nowM : parseYM(el.dataset.end), present };
  });
  const minM = Math.min(nowM - 30, ...roles.map((r) => r.s));
  const yOf = (m) => 3.7 - (nowM - m) * MONTH;
  let i = 0;
  // one tick per month, taller each January; the present is a bright line
  for (let m = minM; m <= nowM && i < N; m++) {
    const jan = m % 12 === 0, now0 = m === nowM;
    const n = now0 ? 220 : jan ? 110 : 36;
    for (let j = 0; j < n && i < N; j++, i++) {
      put(f, i, -3.5 + (j / (n - 1)) * 7, yOf(m), 0, 0.22, 0, 0, now0 ? 1.2 : jan ? 0.8 : 0.3, now0 ? 0.95 : jan ? 0.65 : 0.14);
    }
  }
  const lanes = Math.max(1, roles.length - 1);
  for (const r of roles) {
    const x0 = -2.7 + (r.idx / lanes) * 5.4;
    const yTop = yOf(r.e), yBot = yOf(r.s);
    const g = 1 + r.idx;
    for (let j = 0; j < 3000 && i < N; j++, i++) {
      const u = halton(j, 2), v = halton(j, 3); // u: 0 at the newest end, 1 at the oldest
      const edge = j % 6 === 0;
      const x = x0 + (edge ? (j % 12 === 0 ? -0.27 : 0.27) : (v - 0.5) * 0.54);
      put(f, i, x, yTop + (yBot - yTop) * u, (rand() - 0.5) * 0.06, 0, -0.15, 0, edge ? 0.95 : 0.45, r.present ? 0.9 - u * 0.4 : 0.14 + (1 - u) * 0.14, g, u, 0);
    }
  }
  dust(f, i, rand, { r0: 5, r1: 12, w: 0.13, sx: 1.2, sy: 0.9 });
  return { ...f, roles: roles.length };
}

// ---------------------------------------------------------------- commits: a night skyline from the contribution graph
export function skylineForm(N, weeks, seed = 71) {
  const f = makeForm(N), rand = mulberry32(seed);
  const cols = 53, rows = 7, sp = 0.19;
  const max = Math.max(1, ...(weeks || []).map((d) => d.count));
  let i = 0;
  const base = -1.2;
  // ground grid
  for (let j = 0; j < 2600 && i < N; j++, i++) {
    const row = j % rows;
    put(f, i, (halton(j, 2) - 0.5) * cols * sp, base, (row - 3) * sp, 0.2, 0, 0, 0.32, 0.12, 0, 0, 0);
  }
  for (let d = 0; d < cols * rows && i < N; d++) {
    const w = Math.floor(d / rows), day = d % rows;
    const c = weeks?.[d]?.count ?? 0;
    const h = 0.05 + Math.pow(c / max, 0.7) * 3.1;
    const n = 4 + Math.round(h * 46);
    const x = (w - (cols - 1) / 2) * sp, z = (day - 3) * sp;
    for (let j = 0; j < n && i < N; j++, i++) {
      const y = base + (j / n) * h;
      const wx = (rand() - 0.5) * 0.1;
      put(f, i, x + wx, y, z, 0, 0.09, 0, 0.4 + (c ? 0.5 : 0) + rand() * 0.2, c ? 0.35 + (c / max) * 0.6 : 0.1, 0, w / cols, 5, rand());
    }
  }
  dust(f, i, rand, { r0: 5, r1: 12, w: 0.14, sx: 1.6, sy: 0.6 });
  return f;
}

// ---------------------------------------------------------------- toolbox: five rings turning about the same axis
export const ORRERY = {
  radii: [1.15, 1.95, 2.75, 3.55, 4.3],
  tiltX: [0.25, -0.42, 0.55, -0.2, 0.36],
  tiltZ: [0.0, 0.3, -0.3, 0.2, -0.12],
};
export function ringPoint(k, theta) {
  const r = ORRERY.radii[k];
  let x = Math.cos(theta) * r, y = 0, z = Math.sin(theta) * r;
  const tx = ORRERY.tiltX[k], tz = ORRERY.tiltZ[k];
  let y1 = y * Math.cos(tx) - z * Math.sin(tx), z1 = y * Math.sin(tx) + z * Math.cos(tx);
  y = y1; z = z1;
  const x2 = x * Math.cos(tz) - y * Math.sin(tz), y2 = x * Math.sin(tz) + y * Math.cos(tz);
  return [x2, y2, z];
}
export function orreryForm(N, counts = [4, 4, 3, 2, 3], seed = 81) {
  const f = makeForm(N), rand = mulberry32(seed);
  let i = 0;
  const per = Math.floor(N * 0.075);
  for (let k = 0; k < 5; k++) {
    for (let j = 0; j < per && i < N; j++, i++) {
      const th = halton(j, 2) * TAU;
      const p = ringPoint(k, th), q = ringPoint(k, th + 0.02);
      put(f, i, p[0], p[1], p[2], (q[0] - p[0]) * 7, (q[1] - p[1]) * 7, (q[2] - p[2]) * 7, 0.24 + rand() * 0.12, 0.18 + k * 0.05, 0, 0, 6, k);
    }
    // nodes: clusters of brighter strokes where the tools sit
    for (let n = 0; n < counts[k]; n++) {
      const th = (n / counts[k]) * TAU + k * 0.7;
      for (let j = 0; j < 200 && i < N; j++, i++) {
        const spread = (rand() - 0.5) * 0.09;
        const p = ringPoint(k, th + spread), q = ringPoint(k, th + spread + 0.03);
        const jitter = 0.05;
        put(f, i, p[0] + (rand() - 0.5) * jitter, p[1] + (rand() - 0.5) * jitter, p[2] + (rand() - 0.5) * jitter, (q[0] - p[0]) * 4, (q[1] - p[1]) * 4, (q[2] - p[2]) * 4, 0.8, 0.8, 0, 0, 6, k);
      }
    }
  }
  dust(f, i, rand, { r0: 5, r1: 12, w: 0.16 });
  return f;
}
export function orreryNodePos(k, n, count) {
  return ringPoint(k, (n / count) * TAU + k * 0.7);
}

export { clamp };

// ---------------------------------------------------------------- calm: a slow starfield, the resting state between chapters
export function calmForm(N, seed = 97) {
  const f = makeForm(N), rand = mulberry32(seed);
  dust(f, 0, rand, { r0: 2.5, r1: 12, w: 0.24, heat: 0.16 });
  return f;
}
