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

// ---------------------------------------------------------------- calm: a slow starfield, the resting state between chapters
export function calmForm(N, seed = 97) {
  const f = makeForm(N), rand = mulberry32(seed);
  dust(f, 0, rand, { r0: 2.5, r1: 12, w: 0.24, heat: 0.16 });
  return f;
}
