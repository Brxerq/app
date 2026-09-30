// Procedural forms for the middle of the journey. Each returns { pos, dir, aux } for N strokes.
// Anything that comes from the page (sites, commits) is read from the DOM or passed in, never duplicated here.
import { mulberry32, halton } from '../util.js';
import { makeForm, put, hide, dust, rectEdge } from './kit.js';
import { screenForm } from './portrait.js';

const TAU = Math.PI * 2;

// ---------------------------------------------------------------- the work: frames receding down a corridor
export const CORRIDOR = { W: 5.6, H: 2.94, dz: 4.6, x: 1.15 };
/**
 * One frame per site. Given the decoded screenshots, each frame is drawn as a sketch of its site, sitting just behind
 * the plane where the screenshot later develops (so the image covers it); without them, as a plain outline.
 * Sites are interleaved stroke by stroke: low tiers only draw a prefix of the form, and every frame must survive that.
 */
export function corridorForm(N, count = 9, imgs = null, seed = 51) {
  const f = makeForm(N), rand = mulberry32(seed);
  const { W, H, dz, x } = CORRIDOR;
  const S = Math.min(N, imgs ? Math.floor(N * 0.55) : count * 1300);
  const per = Math.ceil(S / count);
  const sk = imgs && imgs.map((img, k) => screenForm(img, per, { w: W, h: H, seed: 60 + k }));
  let i = 0;
  for (; i < S; i++) {
    const k = i % count, j = Math.floor(i / count);
    const cx = k % 2 === 0 ? -x : x, cy = Math.sin(k * 1.7) * 0.18, cz = -k * dz;
    if (!sk || j % 8 === 0) {
      const e = rectEdge(halton(sk ? j / 8 : j, 2), 0, cx, cy, W + 0.14, H + 0.14);
      put(f, i, e.x, e.y, cz, e.dx * 0.2, e.dy * 0.2, 0, 0.55 + rand() * 0.4, 0.2 + (k / count) * 0.6, 0, 0, 10);
    } else {
      const s = sk[k], q = j * 4;
      put(f, i, cx + s.pos[q], cy + s.pos[q + 1], cz - 0.08 + s.pos[q + 2], s.dir[q], s.dir[q + 1], 0, s.pos[q + 3], s.dir[q + 3], 0, 0, 10);
    }
  }
  for (const side of [-1, 1]) {
    for (let j = 0; j < 1500 && i < N; j++, i++) {
      const z = 6 - halton(j, 2) * (count * dz + 12);
      put(f, i, side * 5.6, -2.5, z, 0, 0, -0.5, 0.45, 0.15 + rand() * 0.1);
    }
  }
  const start = i;
  for (; i < Math.min(N, start + Math.floor(N * 0.4)); i++) {
    const t = rand() * TAU, r = 4.5 + rand() * 6;
    put(f, i, Math.cos(t) * r, Math.sin(t) * r * 0.7, -rand() * 60 + 10, 0, 0, -0.18, 0.22 + rand() * 0.2, 0.2 + rand() * 0.25, 0, 0, 8, rand());
  }
  for (; i < N; i++) hide(f, i, rand);
  return f;
}

// ---------------------------------------------------------------- career: the roles as a timeline drawn in light
// Time runs left to right and each role is a trail of light from its start to its end, one row per role, newest at
// the top like the list beside it. Current roles run warm up to the "now" line; past ones cool.
const monthOf = (s) => {
  const [y, m] = s.split('-').map(Number);
  return y * 12 + m - 1;
};
export function timelineLayout(roles, now = new Date()) {
  const nowM = now.getFullYear() * 12 + now.getMonth();
  const m0 = Math.min(...roles.map((r) => monthOf(r.start))) - 2, m1 = nowM + 2;
  const W = 6.4, rowH = 0.82;
  const x = (m) => -W / 2 + (W * (m - m0)) / (m1 - m0);
  const y = (k) => ((roles.length - 1) / 2 - k) * rowH + 0.35;
  const bars = roles.map((r, k) => ({ x0: x(monthOf(r.start)), x1: x(r.end === 'present' ? nowM : monthOf(r.end) + 1), y: y(k), present: r.end === 'present' }));
  const years = [];
  for (let yr = Math.ceil(m0 / 12); yr * 12 <= m1; yr++) years.push({ year: yr, x: x(yr * 12) });
  return { m0, m1, x, bars, years, now: x(nowM), axisY: y(roles.length - 1) - 0.75, top: y(0) + 0.5 };
}
export function timelineForm(N, roles, seed = 61) {
  const f = makeForm(N), rand = mulberry32(seed);
  const L = timelineLayout(roles);
  const n = L.bars.length;
  let i = 0;
  // the trails, interleaved role by role so low tiers keep every bar; param = how far along, so a bar draws left to right
  const T = Math.floor(N * 0.3);
  for (; i < T && n; i++) {
    const k = i % n, j = Math.floor(i / n), b = L.bars[k];
    const u = halton(j, 2), v = halton(j, 3);
    const edge = j % 5 === 0; // brighter edges keep the bar crisp
    const head = b.present ? Math.exp(-Math.pow((1 - u) * 9, 2)) : 0; // a current role burns brightest at "now"
    put(f, i, b.x0 + (b.x1 - b.x0) * u, b.y + (edge ? (j % 10 === 0 ? 0.075 : -0.075) : (v - 0.5) * 0.15), (rand() - 0.5) * 0.04,
      0.1 + rand() * 0.12, 0, 0, (edge ? 0.8 : 0.32) + head * 0.6, (b.present ? 0.75 : 0.28) + head * 0.25 + (rand() - 0.5) * 0.06, 1 + k, u, 0);
  }
  const line = (x0, y0, x1, y1, count, w, heat) => {
    for (let j = 0; j < count && i < N; j++, i++) {
      const u = halton(j, 2);
      const dx = x1 - x0, dy = y1 - y0, dl = Math.hypot(dx, dy) || 1;
      put(f, i, x0 + dx * u, y0 + dy * u, 0, (dx / dl) * 0.08, (dy / dl) * 0.08, 0, w, heat);
    }
  };
  // the axis, a tick a month (taller each January), a faint gridline each year, and the "now" line
  line(L.x(L.m0), L.axisY, L.x(L.m1), L.axisY, 1200, 0.55, 0.2);
  for (let m = L.m0; m <= L.m1; m++) line(L.x(m), L.axisY, L.x(m), L.axisY + (m % 12 === 0 ? 0.2 : 0.07), m % 12 === 0 ? 24 : 8, 0.7, 0.3);
  for (const yr of L.years) line(yr.x, L.axisY, yr.x, L.top, 260, 0.22, 0.14);
  line(L.now, L.axisY, L.now, L.top, 520, 0.9, 0.95);
  dust(f, i, rand, { r0: 5, r1: 12, w: 0.13, sx: 1.2, sy: 0.9 });
  return f;
}

// ---------------------------------------------------------------- toolbox: the logos of the tools, drawn in light
// One row per tool group (in page order), one logo per tool. The logos are simple-icons paths (icons.js, generated from
// the page's data-icon slugs); a tool without one gets its name as a wordmark instead.
export const TOOL = { cell: 1.45, size: 1.0 };
export function toolCell(k, j, counts) {
  const n = counts[k] || 1;
  return [(j - (n - 1) / 2) * TOOL.cell, ((counts.length - 1) / 2 - k) * TOOL.cell, 0.1 * Math.sin(k * 1.7 + j * 2.1)];
}
function glyph(tool) {
  const S = 256;
  const cv = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(S, S) : Object.assign(document.createElement('canvas'), { width: S, height: S });
  const g = cv.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, S, S);
  g.fillStyle = '#fff';
  if (tool.path) {
    g.setTransform((S * 0.84) / 24, 0, 0, (S * 0.84) / 24, S * 0.08, S * 0.08);
    g.fill(new Path2D(tool.path));
  } else {
    g.font = `800 ${Math.round(S * (tool.mark.length > 3 ? 0.24 : 0.3))}px Unbounded, system-ui, sans-serif`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(tool.mark, S / 2, S / 2);
  }
  return cv;
}
/** @param {{k:number, j:number, path?:string, mark:string}[]} tools group k, place j in the group, logo path or wordmark */
export function toolsForm(N, tools, seed = 83) {
  const f = makeForm(N), rand = mulberry32(seed);
  const counts = [];
  for (const t of tools) counts[t.k] = (counts[t.k] || 0) + 1;
  const L = tools.length ? Math.floor(N * 0.7) : 0, per = Math.ceil(L / Math.max(1, tools.length));
  const sk = tools.map((t, n) => screenForm(glyph(t), per, { w: TOOL.size, h: TOOL.size, seed: 30 + n, fill: 0.2, len: 6 }));
  let i = 0;
  // interleaved logo by logo, each strongest-edges first, so low tiers still draw every logo's outline
  for (; i < L; i++) {
    const n = i % tools.length, q = Math.floor(i / tools.length) * 4, t = tools[n], s = sk[n];
    const [cx, cy, cz] = toolCell(t.k, t.j, counts);
    put(f, i, cx + s.pos[q], cy + s.pos[q + 1], cz + s.pos[q + 2], s.dir[q], s.dir[q + 1], 0, s.pos[q + 3], s.dir[q + 3], 1 + t.k);
  }
  dust(f, i, rand, { r0: 5, r1: 12, w: 0.14 });
  return f;
}

// ---------------------------------------------------------------- calm: a slow starfield, the resting state between chapters
export function calmForm(N, seed = 97) {
  const f = makeForm(N), rand = mulberry32(seed);
  dust(f, 0, rand, { r0: 2.5, r1: 12, w: 0.24, heat: 0.16 });
  return f;
}
