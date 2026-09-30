// Machine vision: a shelf with three detected gaps, a four-layer liveness stack, and 200 species that scatter on validation.
import { mulberry32, halton } from '../util.js';
import { makeForm, put, hide, dust, rectEdge } from './kit.js';

const TAU = Math.PI * 2;

// ---------------------------------------------------------------- shelf
export const SHELF = {
  rows: [-2.0, -0.65, 0.7, 2.05],
  slots: 16,
  x0: -3.44,
  dx: 0.459,
  gaps: [[2, 5], [3, 11], [1, 8]], // [row, slot] — the three "empty" detections
  boxW: 0.5,
  boxH: 0.98,
};
export function shelfForm(N, seed = 91) {
  const f = makeForm(N), rand = mulberry32(seed);
  let i = 0;
  const gapKey = new Set(SHELF.gaps.map(([r, s]) => r * 100 + s));
  // planks
  for (let r = 0; r < SHELF.rows.length; r++) {
    for (let j = 0; j < 500 && i < N; j++, i++) {
      put(f, i, -3.6 + halton(j, 2) * 7.2, SHELF.rows[r] - 0.52, 0, 0.22, 0, 0, 0.6, 0.32, 0, 0, 7);
    }
  }
  // products: vertical hatch blocks in varying heights and hues
  const perProduct = Math.floor((N * 0.32) / (SHELF.rows.length * SHELF.slots));
  for (let r = 0; r < SHELF.rows.length; r++) {
    for (let s = 0; s < SHELF.slots; s++) {
      if (gapKey.has(r * 100 + s)) continue;
      const cx = SHELF.x0 + s * SHELF.dx, h = 0.55 + rand() * 0.34, hue = 0.08 + rand() * 0.6;
      for (let j = 0; j < perProduct && i < N; j++, i++) {
        const x = cx + (rand() - 0.5) * 0.36, y = SHELF.rows[r] - 0.5 + rand() * h;
        put(f, i, x, y, (rand() - 0.5) * 0.05, 0, 0.13, 0, 0.32 + rand() * 0.28, hue, 0, 0, 7, rand());
      }
    }
  }
  // detections: yellow boxes, drawn on one after another (groups 1-3)
  SHELF.gaps.forEach(([r, s], g) => {
    const cx = SHELF.x0 + s * SHELF.dx, cy = SHELF.rows[r] - 0.02;
    for (let j = 0; j < 320 && i < N; j++, i++) {
      const u = halton(j, 2);
      const e = rectEdge(u, 0, cx, cy, SHELF.boxW, SHELF.boxH);
      put(f, i, e.x, e.y, 0.04, e.dx * 0.13, e.dy * 0.13, 0, 1.3, 0.92, 1 + g, u, 0);
    }
  });
  dust(f, i, rand, { r0: 4.5, r1: 12, w: 0.16, sx: 1.4, sy: 0.9 });
  return f;
}

// ---------------------------------------------------------------- liveness: four checks as an exploded stack
export const LIVE = { W: 4.2, H: 3.0, gap: 1.15 };
function ellipse(cx, cy, a, b, t) {
  return [cx + Math.cos(t) * a, cy + Math.sin(t) * b, -Math.sin(t) * a, Math.cos(t) * b];
}
export function livenessForm(N, seed = 92) {
  const f = makeForm(N), rand = mulberry32(seed);
  let i = 0;
  const { W, H, gap } = LIVE;
  const plate = (k, motif) => {
    const z = (k - 1.5) * gap, ox = (k - 1.5) * 0.12, oy = (k - 1.5) * 0.08;
    const g = 1 + k;
    // border
    for (let j = 0; j < 700 && i < N; j++, i++) {
      const u = halton(j, 2);
      const e = rectEdge(u, 0, ox, oy, W, H);
      put(f, i, e.x, e.y, z, e.dx * 0.22, e.dy * 0.22, 0, 0.75, 0.16 + k * 0.05, g, u * 0.4, 0);
    }
    // faint fill so each plate reads as a sheet of glass
    for (let j = 0; j < 900 && i < N; j++, i++) {
      put(f, i, ox + (rand() - 0.5) * W, oy + (rand() - 0.5) * H, z, 0.14, 0, 0, 0.1 + rand() * 0.06, 0.12, g, 0.2, 0);
    }
    motif(z, ox, oy, g);
  };
  const line = (x0, y0, x1, y1, n, z, w, heat, g) => {
    for (let j = 0; j < n && i < N; j++, i++) {
      const u = halton(j, 2);
      put(f, i, x0 + (x1 - x0) * u + (rand() - 0.5) * 0.02, y0 + (y1 - y0) * u + (rand() - 0.5) * 0.02, z, (x1 - x0) * 0.06, (y1 - y0) * 0.06, 0, w, heat, g, 0.5 + u * 0.5, 0);
    }
  };
  const ring = (cx, cy, a, b, n, z, w, heat, g) => {
    for (let j = 0; j < n && i < N; j++, i++) {
      const t = halton(j, 2) * TAU;
      const [x, y, dx, dy] = ellipse(cx, cy, a, b, t);
      put(f, i, x, y, z, dx * 0.16, dy * 0.16, 0, w, heat, g, 0.5 + t / TAU / 2, 0);
    }
  };
  // 01 blink: two eyes, one half-shut
  plate(0, (z, ox, oy, g) => {
    for (const s of [-1, 1]) {
      ring(ox + s * 1.05, oy, 0.72, 0.3, 380, z, 1.0, 0.7, g);
      ring(ox + s * 1.05, oy, 0.2, 0.2, 140, z, 1.1, 0.95, g);
    }
    line(ox - 1.8, oy + 0.34, ox - 0.3, oy + 0.06, 120, z, 0.7, 0.55, g);
  });
  // 02 hand gesture: palm + five fingers
  plate(1, (z, ox, oy, g) => {
    ring(ox, oy - 0.65, 0.8, 0.55, 260, z, 0.9, 0.6, g);
    for (let k = 0; k < 5; k++) {
      const a = -0.9 + k * 0.45;
      line(ox + (k - 2) * 0.32, oy - 0.35, ox + Math.sin(a) * 1.6 + (k - 2) * 0.1, oy - 0.2 + Math.cos(a) * (1.25 + (k === 2 ? 0.25 : 0) - Math.abs(k - 2) * 0.12), 170, z, 0.95, 0.7 + k * 0.05, g);
    }
  });
  // 03 phone: a phone outline with its detection box
  plate(2, (z, ox, oy, g) => {
    for (let j = 0; j < 320 && i < N; j++, i++) {
      const e = rectEdge(halton(j, 2), 0, ox, oy, 1.05, 1.9);
      put(f, i, e.x, e.y, z, e.dx * 0.16, e.dy * 0.16, 0, 0.85, 0.55, g, 0.5, 0);
    }
    for (let j = 0; j < 320 && i < N; j++, i++) {
      const u = halton(j, 2), e = rectEdge(u, 0, ox, oy, 1.4, 2.3);
      put(f, i, e.x, e.y, z, e.dx * 0.12, e.dy * 0.12, 0, 1.3, 0.92, g, 0.6 + u * 0.4, 0);
    }
    line(ox - 0.35, oy + 0.7, ox + 0.35, oy + 0.7, 60, z, 0.8, 0.5, g);
  });
  // 04 texture: a grid of little local-binary-pattern rings
  plate(3, (z, ox, oy, g) => {
    for (let cx = 0; cx < 9; cx++) for (let cy = 0; cy < 6; cy++) {
      const x = ox + (cx - 4) * 0.42, y = oy + (cy - 2.5) * 0.4;
      for (let k = 0; k < 8 && i < N; k++, i++) {
        const t = (k / 8) * TAU;
        const on = rand() > 0.45;
        put(f, i, x + Math.cos(t) * 0.11, y + Math.sin(t) * 0.11, z, -Math.sin(t) * 0.05, Math.cos(t) * 0.05, 0, on ? 1.0 : 0.3, on ? 0.85 : 0.2, g, 0.5, 0);
      }
    }
  });
  dust(f, i, rand, { r0: 4.5, r1: 11, w: 0.14 });
  return f;
}

// ---------------------------------------------------------------- 200 species: tight on train, scattered on validation
export function speciesForm(N, seed = 93) {
  const f = makeForm(N), rand = mulberry32(seed);
  const K = 200, per = Math.min(150, Math.floor((N * 0.72) / K));
  let i = 0;
  const ga = Math.PI * (3 - Math.sqrt(5));
  for (let c = 0; c < K; c++) {
    const y = 1 - (c / (K - 1)) * 2, r = Math.sqrt(Math.max(0, 1 - y * y));
    const th = ga * c;
    const R = 2.5 + 0.35 * Math.sin(c * 0.9);
    const cx = Math.cos(th) * r * R, cy = y * R, cz = Math.sin(th) * r * R;
    const heat = 0.1 + 0.8 * ((c * 0.6180339) % 1);
    for (let j = 0; j < per && i < N; j++, i++) {
      const u = rand() * 2 - 1, t = rand() * TAU, s = Math.sqrt(1 - u * u), rr = 0.11 * Math.pow(rand(), 0.6);
      put(f, i, cx + Math.cos(t) * s * rr, cy + u * rr, cz + Math.sin(t) * s * rr, (rand() - 0.5) * 0.08, (rand() - 0.5) * 0.08, (rand() - 0.5) * 0.08, 0.55 + rand() * 0.4, heat, 0, 0, 4, rand());
    }
  }
  dust(f, i, rand, { r0: 4, r1: 10, w: 0.13 });
  return f;
}

export { hide };
