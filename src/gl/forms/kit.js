// Tiny helpers so every form generator reads the same way.
import { halton } from '../util.js';

export function makeForm(N) {
  return { N, pos: new Float32Array(N * 4), dir: new Float32Array(N * 4), aux: new Float32Array(N * 4) };
}

/** write one stroke: centre, direction*length, brightness, heat, then aux (group, param, fx, extra) */
export function put(f, i, x, y, z, dx, dy, dz, w, heat, group = 0, param = 0, fx = 0, extra = 0) {
  const k = i * 4;
  f.pos[k] = x; f.pos[k + 1] = y; f.pos[k + 2] = z; f.pos[k + 3] = w;
  f.dir[k] = dx; f.dir[k + 1] = dy; f.dir[k + 2] = dz; f.dir[k + 3] = heat;
  f.aux[k] = group; f.aux[k + 1] = param; f.aux[k + 2] = fx; f.aux[k + 3] = extra;
}

export function hide(f, i, rand) {
  put(f, i, (rand() - 0.5) * 2, (rand() - 0.5) * 2, (rand() - 0.5) * 2, 0.02, 0, 0, 0, 0.1);
}

/** ambient strokes: keeps "one substance" alive around whatever the subject is */
export function dust(f, from, rand, { r0 = 3.5, r1 = 11, w = 0.15, heat = 0.18, sx = 1, sy = 1, sz = 1, fx = 0 } = {}) {
  for (let i = from; i < f.N; i++) {
    const u = rand() * 2 - 1, t = rand() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u);
    const r = r0 + (r1 - r0) * Math.pow(rand(), 0.7);
    const a = rand() * Math.PI;
    put(f, i, Math.cos(t) * s * r * sx, u * r * sy, Math.sin(t) * s * r * sz, Math.cos(a) * 0.07, Math.sin(a) * 0.07, 0, w * (0.5 + rand()), heat + (rand() - 0.5) * 0.2, 0, 0, fx, rand());
  }
}

/** a point on the outline of a w×h rectangle centred at (cx, cy) → { x, y, dx, dy } */
export function rectEdge(u, v, cx, cy, w, h) {
  const per = 2 * (w + h);
  let d = u * per, x, y, dx = 0, dy = 0;
  if (d < w) { x = -w / 2 + d; y = h / 2; dx = 1; }
  else if ((d -= w) < h) { x = w / 2; y = h / 2 - d; dy = -1; }
  else if ((d -= h) < w) { x = w / 2 - d; y = -h / 2; dx = -1; }
  else { d -= w; x = -w / 2; y = -h / 2 + d; dy = 1; }
  void v;
  return { x: cx + x, y: cy + y, dx, dy };
}

export const H = halton;
