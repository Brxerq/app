// Procedural forms for the middle of the journey. Each returns { pos, dir, aux } for N strokes.
// Anything that comes from the page (sites, commits) is read from the DOM or passed in, never duplicated here.
import { mulberry32, halton, searchCdf } from '../util.js';
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

// ---------------------------------------------------------------- career: one thread of light, painted like a long exposure
// A loop per role, today at the top (s = 0) and the oldest role at the bottom (s = 1), so the pen paints downwards in the
// same direction the newest-first list is read. Each loop dips up and back like handwriting, so it reads as loops, not a coil.
export function threadPoint(s, loops) {
  const ph = Math.PI * 2 * loops * s;
  const r = 1.35 + 0.35 * Math.sin(Math.PI * 2 * 1.7 * s + 0.6);
  return [r * Math.sin(ph) + 0.35 * Math.sin(Math.PI * 2 * 1.3 * s), 3.4 - 6.8 * s + 0.45 * Math.sin(ph), r * 0.55 * Math.cos(ph)];
}
export function threadForm(N, loops = 7, seed = 67) {
  const f = makeForm(N), rand = mulberry32(seed);
  // sample by arc length, so the wide loops are as dense as the tight ones
  const BINS = 2048, cdf = new Float32Array(BINS);
  let acc = 0, prev = threadPoint(0, loops);
  for (let b = 0; b < BINS; b++) {
    const p = threadPoint((b + 1) / BINS, loops);
    acc += Math.hypot(p[0] - prev[0], p[1] - prev[1], p[2] - prev[2]);
    cdf[b] = acc;
    prev = p;
  }
  for (let b = 0; b < BINS; b++) cdf[b] /= acc;
  const T = Math.floor(N * 0.72);
  let i = 0;
  for (; i < T; i++) {
    const s = (searchCdf(cdf, halton(i, 2)) + rand()) / BINS;
    const p = threadPoint(s, loops), q = threadPoint(Math.min(1, s + 0.001), loops);
    const tl = Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]) || 1;
    const len = 0.07 + rand() * 0.05, j = 0.025;
    // today burns warm, the past cools to cobalt: the site's own colour code for shipped vs sketched
    put(f, i, p[0] + (rand() - 0.5) * j, p[1] + (rand() - 0.5) * j, p[2] + (rand() - 0.5) * j, (q[0] - p[0]) / tl * len, (q[1] - p[1]) / tl * len, (q[2] - p[2]) / tl * len, 0.55 + rand() * 0.45, 0.95 - 0.8 * s + (rand() - 0.5) * 0.08, 0, s, 11, rand());
  }
  dust(f, i, rand, { r0: 4.5, r1: 12, w: 0.14, sx: 1.1, sy: 1.2 });
  return f;
}

// ---------------------------------------------------------------- toolbox: the stack as a network, pulses running through it
// One layer per tool group (top to bottom, in page order), one node per tool, every node wired to the next layer.
const NET = { dy: 1.55, dx: 1.25 };
export function netNode(k, j, counts) {
  const n = counts[k] || 1;
  return [(j - (n - 1) / 2) * NET.dx, ((counts.length - 1) / 2 - k) * NET.dy, 0.35 * Math.sin(k * 1.3 + j * 0.9)];
}
export function networkForm(N, counts, seed = 83) {
  const f = makeForm(N), rand = mulberry32(seed);
  let i = 0;
  // nodes first: low tiers draw only a prefix of the form, and every node must survive that
  counts.forEach((n, k) => {
    for (let j = 0; j < n; j++) {
      const [x, y, z] = netNode(k, j, counts);
      for (let m = 0; m < 300 && i < N; m++, i++) {
        if (m < 240) {
          const a = (m / 240) * TAU, r = 0.2;
          put(f, i, x + Math.cos(a) * r, y + Math.sin(a) * r, z, -Math.sin(a) * 0.07, Math.cos(a) * 0.07, 0, 0.9, 0.55, 1 + k);
        } else {
          const a = rand() * TAU, r = 0.07 * rand();
          put(f, i, x + Math.cos(a) * r, y + Math.sin(a) * r, z, Math.cos(a) * 0.04, Math.sin(a) * 0.04, 0, 1.1, 0.8, 1 + k);
        }
      }
    }
  });
  // edges, interleaved one stroke at a time for the same reason; each bows out of the plane and has its own beat
  const edges = [];
  for (let k = 0; k + 1 < counts.length; k++) for (let a = 0; a < counts[k]; a++) for (let b = 0; b < counts[k + 1]; b++) edges.push([k, a, b, rand()]);
  const E = Math.min(N - i, Math.floor(N * 0.52));
  for (let e = 0; e < E && edges.length; e++, i++) {
    const [k, a, b, beat] = edges[e % edges.length];
    const A = netNode(k, a, counts), B = netNode(k + 1, b, counts);
    const t = halton(Math.floor(e / edges.length), 2), bow = Math.sin(Math.PI * t) * 0.3;
    const d = [B[0] - A[0], B[1] - A[1], B[2] - A[2]], dl = Math.hypot(d[0], d[1], d[2]) || 1;
    put(f, i, A[0] + d[0] * t, A[1] + d[1] * t, A[2] + d[2] * t + bow, (d[0] / dl) * 0.09, (d[1] / dl) * 0.09, (d[2] / dl) * 0.09, 0.35 + rand() * 0.15, 0.18, 1 + k, t, 12, beat);
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
