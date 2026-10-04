// Page loader, full-motion desktop only: "the long exposure develops". A worker draws ~7k light strokes to an
// OffscreenCanvas, so nothing here freezes while boot blocks the main thread in 300-700ms chunks.
// Everyone else (calm, phones, no OffscreenCanvas, any failure) keeps the quiet DOM loader that main.js drives.
import { env } from '../env.js';

export const STAGES = [[0, 'sketching'], [0.35, 'building'], [0.75, 'shipping']]; // [threshold, label]: cobalt -> paper -> yellow
const MIN_MS = 2400; // the loader never lasts less than this, however fast the boot is

// Runs in the worker. Stringified into a Blob, so it must be self-contained: no imports, no module variables
// (esbuild renames those when minifying). Everything arrives by postMessage.
function loaderWorker() {
  const MINS = 2.4, R = 110, TRAIL = 600;
  let cv, ctx, W = 0, H = 0, dpr = 1, N = 0, dbg = false, stopped = false;
  let X, Y, VX, VY, HX, HY, U, V, HA, LN, KS, DL, CL, AL, A0, B0, A1, B1, BK, ORD, stg = 0;
  let iw = 1, ih = 1, homed = false, fontOk = false;
  let P = 0, tgt = 0, rel = false, t0 = 0, last = 0, holdT = 0, shutT = 0, burstT = 0, frames = 0;
  let px = 0, py = 0, hasP = false, fx = 0, fy = 0;
  const waves = [];
  const TX = new Float32Array(TRAIL), TY = new Float32Array(TRAIL), TVX = new Float32Array(TRAIL), TVY = new Float32Array(TRAIL), TL = new Float32Array(TRAIL), TA = new Float32Array(TRAIL);
  let tn = 0;

  // 16-step colour ramps (index = "temperature"): dim cobalt -> cobalt -> paper/accent -> gold. Ink, blue accent, yellow accent.
  const stops = [
    [[53, 67, 128], [107, 134, 255], [236, 232, 223], [255, 210, 63]],
    [[53, 67, 128], [107, 134, 255], [140, 170, 255], [255, 210, 63]],
    [[53, 67, 128], [107, 134, 255], [255, 210, 63], [255, 236, 150]],
  ];
  const at = [0, 3, 9, 15];
  const ramp = stops.map((s) => {
    const out = [];
    for (let k = 0; k < 16; k++) {
      let j = 0;
      while (j < 2 && k > at[j + 1]) j++;
      const f = (k - at[j]) / (at[j + 1] - at[j]);
      out.push('rgb(' + [0, 1, 2].map((c) => Math.round(s[j][c] + (s[j + 1][c] - s[j][c]) * f)).join() + ')');
    }
    return out;
  });
  const cnt = new Int32Array(145);
  const ALPHA = [0.35, 0.65, 1];

  function flow(x, y, t) {
    const a = Math.sin(x * 0.0035 + t * 0.35) * 2 + Math.cos(y * 0.0042 - t * 0.27) * 2;
    fx = Math.cos(a) * 30;
    fy = Math.sin(a) * 30;
  }

  function size(w, h, d) {
    W = w; H = h; dpr = d;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#05060a'; ctx.fillRect(0, 0, W, H);
    layout();
  }

  // the portrait sits centred, ~70vh tall (smaller when the window is narrow)
  function layout() {
    if (!homed) return;
    const ph = Math.min(H * (W < 900 ? 0.5 : 0.7), (W * 0.9 * ih) / iw), pw = (ph * iw) / ih;
    const ox = W / 2 - pw / 2, oy = H * 0.49 - ph / 2;
    for (let i = 0; i < N; i++) { HX[i] = ox + U[i] * pw; HY[i] = oy + V[i] * ph; }
  }

  // ink = light strokes, white paper = nothing; stroke direction follows the pencil (perpendicular to the Sobel gradient)
  async function sample(url) {
    const bmp = await createImageBitmap(await (await fetch(url)).blob());
    iw = bmp.width; ih = bmp.height;
    const sw = 240, sh = Math.round((sw * ih) / iw), oc = new OffscreenCanvas(sw, sh), c = oc.getContext('2d');
    c.fillStyle = '#fff'; c.fillRect(0, 0, sw, sh); c.drawImage(bmp, 0, 0, sw, sh);
    const d = c.getImageData(0, 0, sw, sh).data, n = sw * sh;
    const dk = new Float32Array(n), cl = new Uint8Array(n), wt = new Float32Array(n), cum = new Float32Array(n), gX = new Float32Array(n), gY = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const r = d[i * 4], g = d[i * 4 + 1], b = d[i * 4 + 2], ch = Math.max(r, g, b) - Math.min(r, g, b);
      dk[i] = 1 - (r * 0.3 + g * 0.59 + b * 0.11) / 255;
      // only the arrow, crown and squiggle keep a hue (skin and brown eyes must not match)
      if (ch > 110 && b > r + 60 && b > g) cl[i] = 1;
      else if (ch > 110 && r > 190 && g > 140 && b < 100) cl[i] = 2;
      if (cl[i]) dk[i] = Math.max(dk[i], ch / 255);
    }
    const g = (x, y) => dk[Math.min(sh - 1, Math.max(0, y)) * sw + Math.min(sw - 1, Math.max(0, x))];
    let tot = 0;
    for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) {
      const i = y * sw + x;
      gX[i] = g(x + 1, y - 1) + 2 * g(x + 1, y) + g(x + 1, y + 1) - g(x - 1, y - 1) - 2 * g(x - 1, y) - g(x - 1, y + 1);
      gY[i] = g(x - 1, y + 1) + 2 * g(x, y + 1) + g(x + 1, y + 1) - g(x - 1, y - 1) - 2 * g(x, y - 1) - g(x + 1, y - 1);
      // tone plus edges: the face is pale, so its features (eyes, brows, beard, hairline) come from the edges
      const w = 0.25 * Math.pow(dk[i], 1.3) + Math.min(1.2, Math.hypot(gX[i], gY[i]) * 0.6);
      wt[i] = w;
      tot += w < 0.14 ? 0 : w;
      cum[i] = tot;
    }
    for (let i = 0; i < N; i++) {
      const r = Math.random() * tot;
      let lo = 0, hi = n - 1;
      while (lo < hi) { const m = (lo + hi) >> 1; if (cum[m] < r) lo = m + 1; else hi = m; }
      const x = lo % sw, y = (lo / sw) | 0;
      U[i] = (x + Math.random()) / sw; V[i] = (y + Math.random()) / sh;
      HA[i] = Math.hypot(gX[lo], gY[lo]) < 0.08 ? Math.random() * Math.PI : Math.atan2(gY[lo], gX[lo]) + Math.PI / 2;
      CL[i] = cl[lo];
      AL[i] = wt[lo] > 0.75 ? 2 : wt[lo] > 0.4 ? 1 : 0; // tonal depth: strong edges and deep ink burn brighter
      // darker strokes land first so the structure shows up before the shading; the accents arrive last
      DL[i] = cl[lo] ? 0.8 + Math.random() * 0.1 : 0.88 * (0.7 * Math.random() + 0.3 * (1 - dk[lo]));
    }
    homed = true;
    layout();
  }

  function init(m) {
    cv = m.canvas; ctx = cv.getContext('2d', { alpha: false });
    N = m.n; dbg = m.debug;
    const f32 = () => new Float32Array(N);
    X = f32(); Y = f32(); VX = f32(); VY = f32(); HX = f32(); HY = f32(); U = f32(); V = f32(); HA = f32(); LN = f32(); KS = f32(); DL = f32();
    A0 = f32(); B0 = f32(); A1 = f32(); B1 = f32(); CL = new Uint8Array(N); AL = new Uint8Array(N).fill(2); BK = new Uint8Array(N); ORD = new Int32Array(N);
    for (let i = 0; i < N; i++) { X[i] = Math.random() * m.w; Y[i] = Math.random() * m.h; LN[i] = 3 + Math.random() * 5; KS[i] = 12 + Math.random() * 10; DL[i] = 2; }
    size(m.w, m.h, m.dpr);
    last = performance.now(); t0 = last - m.age; // the clock starts when the page asked for the loader, not when the worker woke up
    // the font and the portrait load while the cloud already drifts; failure just leaves the cloud / system-ui
    fetch(m.font).then((r) => r.arrayBuffer()).then(async (b) => {
      const ff = new FontFace('Unbounded', b, { weight: '200 900' });
      await ff.load(); self.fonts.add(ff); fontOk = true;
    }).catch(() => {});
    sample(m.img).catch(() => {
      // no portrait: settle into a soft ellipse instead
      for (let i = 0; i < N; i++) { const a = Math.random() * 6.283, r = Math.sqrt(Math.random()); U[i] = 0.5 + Math.cos(a) * r * 0.4; V[i] = 0.5 + Math.sin(a) * r * 0.45; HA[i] = a + 1.57; DL[i] = 0.88 * Math.random(); }
      homed = true; layout();
    });
    frame();
  }

  const raf = (f) => (self.requestAnimationFrame ? self.requestAnimationFrame(f) : setTimeout(f, 16));

  function frame() {
    if (stopped) return;
    const now = performance.now(), dt = Math.min(0.05, (now - last) / 1000), el = (now - t0) / 1000;
    last = now;

    // displayed progress eases toward the real one, but never outruns the time ramp (min lifetime)
    const goal = Math.min(rel ? 1 : tgt, el / MINS);
    if (goal > P) P = Math.min(goal, P + Math.max((goal - P) * (1 - Math.exp(-dt * 6)), Math.min(goal - P, 0.5 * dt)));
    if (rel && P >= 1 && !holdT) holdT = now;
    if (holdT && !shutT && now - holdT > 120) shutT = now;
    const stage = P >= 0.75 ? 2 : P >= 0.35 ? 1 : 0;
    if (stage !== stg) { stg = stage; postMessage({ t: 'stage', i: stage }); }
    const warm = Math.min(1, Math.max(0, (P - 0.75) / 0.25)), ea = Math.min(1.5, dt * 60), vs = Math.min(1.6, Math.max(0.7, W / 1200)); // ea: same exposure from 30 to 144Hz
    const sh = shutT ? Math.min(1, (now - shutT) / 250) : 0;
    if (shutT && !burstT && now - shutT > 100) {
      burstT = now;
      postMessage({ t: 'burst' });
      const cx = W / 2, cy = H / 2;
      for (let i = 0; i < N; i++) {
        const a = Math.atan2(Y[i] - cy, X[i] - cx) + (Math.random() - 0.5) * 1.3, s = 250 + Math.random() * 900;
        VX[i] += Math.cos(a) * s; VY[i] += Math.sin(a) * s;
      }
    }
    const bt = burstT ? (now - burstT) / 1000 : 0, fade = Math.max(0, 1 - bt / 1.0), fade2 = Math.max(0, 1 - bt / 0.45);

    // long-exposure persistence: a translucent ink wash instead of a hard clear
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(5,6,10,' + (1 - Math.exp(-dt * 22)).toFixed(3) + ')';
    ctx.fillRect(0, 0, W, H);

    for (let i = waves.length - 1; i >= 0; i--) if (now - waves[i].t > 1100) waves.splice(i, 1);
    cnt.fill(0);
    const R2 = R * R;
    for (let i = 0; i < N; i++) {
      let x = X[i], y = Y[i], vx = VX[i], vy = VY[i], ax = 0, ay = 0, kk = 0, w = 0;
      if (burstT) {
        flow(x, y, el);
        ax = -vx * 1.3 + fx * 6; ay = -vy * 1.3 + fy * 6; kk = 15;
      } else if (homed && P >= DL[i]) {
        const dx = HX[i] - x, dy = HY[i] - y, dist = Math.sqrt(dx * dx + dy * dy) + 0.001, k = KS[i];
        const sw = (i & 1 ? 1 : -1) * 500 * Math.min(1, dist / 160); // a little curve so strokes fly, not slide
        ax = k * dx - 1.8 * Math.sqrt(k) * vx - (dy / dist) * sw; ay = k * dy - 1.8 * Math.sqrt(k) * vy + (dx / dist) * sw;
        w = 1 - Math.min(1, dist / 140);
        kk = 3 + w * (6 + 3 * warm); // settled strokes warm from paper to pale gold as it nears 100
      } else {
        flow(x, y, el);
        ax = (fx - vx) * 2.5; ay = (fy - vy) * 2.5;
      }
      if (hasP) {
        const dx = x - px, dy = y - py, d2 = dx * dx + dy * dy;
        if (d2 < R2 && d2 > 0.01) { const d = Math.sqrt(d2), f = 1 - d / R; ax += (dx / d) * 9000 * f * f; ay += (dy / d) * 9000 * f * f; }
      }
      for (let j = 0; j < waves.length; j++) {
        const wv = waves[j], age = (now - wv.t) / 1000, dx = x - wv.x, dy = y - wv.y, d = Math.sqrt(dx * dx + dy * dy) + 0.001, off = Math.abs(d - age * 900);
        if (off < 90) { const s = (1 - off / 90) * (1 - age / 1.1) * 9000; ax += (dx / d) * s; ay += (dy / d) * s; }
      }
      vx += ax * dt; vy += ay * dt; x += vx * dt; y += vy * dt;
      if (!burstT && !(homed && P >= DL[i])) {
        if (x < -20) x = W + 20; else if (x > W + 20) x = -20;
        if (y < -20) y = H + 20; else if (y > H + 20) y = -20;
      }
      X[i] = x; Y[i] = y; VX[i] = vx; VY[i] = vy;
      if (sh && !burstT) kk += (15 - kk) * sh;
      // direction: along the velocity while travelling, along the pencil once settled
      const sp = Math.sqrt(vx * vx + vy * vy);
      let tx = Math.cos(HA[i]), ty = Math.sin(HA[i]);
      if (tx * vx + ty * vy < 0) { tx = -tx; ty = -ty; }
      if (sp > 1) { tx = tx * w + (vx / sp) * (1 - w); ty = ty * w + (vy / sp) * (1 - w); }
      const hl = (LN[i] * vs + Math.min(sp * 0.025, 16) * (1 - w * 0.7)) * 0.5, m = Math.hypot(tx, ty) || 1;
      tx = (tx / m) * hl; ty = (ty / m) * hl;
      A0[i] = x - tx; B0[i] = y - ty; A1[i] = x + tx; B1[i] = y + ty;
      cnt[(BK[i] = (AL[i] * 3 + CL[i]) * 16 + Math.round(kk)) + 1]++;
    }
    for (let b = 0; b < 144; b++) cnt[b + 1] += cnt[b];
    const pos = cnt.slice(0, 144);
    for (let i = 0; i < N; i++) ORD[pos[BK[i]]++] = i;

    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';
    // faint wide pass for glow, thin bright pass for the stroke itself
    for (let b = 0; b < 144; b++) {
      const s = cnt[b], e = cnt[b + 1];
      if (s === e) continue;
      ctx.beginPath();
      for (let j = s; j < e; j++) { const i = ORD[j]; ctx.moveTo(A0[i], B0[i]); ctx.lineTo(A1[i], B1[i]); }
      const a = ALPHA[(b / 48) | 0] * fade * ea;
      ctx.strokeStyle = ramp[((b / 16) | 0) % 3][b % 16];
      ctx.globalAlpha = 0.06 * a; ctx.lineWidth = 3; ctx.stroke();
      ctx.globalAlpha = 0.8 * a; ctx.lineWidth = 0.9; ctx.stroke();
    }

    // light-pen trail: short-lived yellow strokes that drift and fade
    ctx.beginPath();
    let live = 0;
    for (let i = 0; i < TRAIL; i++) {
      if (TL[i] <= 0) continue;
      TL[i] -= dt / 0.9; TX[i] += TVX[i] * dt; TY[i] += TVY[i] * dt; TVX[i] *= 0.97; TVY[i] *= 0.97;
      if (TL[i] <= 0) continue;
      const l = (3 + 9 * TL[i]), c = Math.cos(TA[i]) * l, s = Math.sin(TA[i]) * l;
      ctx.moveTo(TX[i] - c, TY[i] - s); ctx.lineTo(TX[i] + c, TY[i] + s); live++;
    }
    if (live) {
      ctx.strokeStyle = 'rgb(255,210,63)';
      ctx.globalAlpha = 0.14 * fade * ea; ctx.lineWidth = 4; ctx.stroke();
      ctx.globalAlpha = 0.9 * fade * ea; ctx.lineWidth = 1.4; ctx.stroke();
    }

    // shutter: a soft glow pulse over the portrait
    if (shutT && now - shutT < 700) {
      const f = (now - shutT) / 700, a = Math.sin(Math.PI * f) * 0.55, r = Math.max(W, H) * 0.55, g = ctx.createRadialGradient(W / 2, H * 0.49, 0, W / 2, H * 0.49, r);
      g.addColorStop(0, 'rgba(255,236,170,' + a + ')'); g.addColorStop(1, 'rgba(255,210,63,0)');
      ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    }

    // counter + hairline with a bright comet head
    const gut = Math.min(72, Math.max(20, W * 0.042)), ly = H - 28, fs = Math.min(150, Math.max(56, W * 0.1)), x1 = gut + P * (W - gut * 2);
    ctx.globalAlpha = fade2;
    ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(236,232,223,0.14)';
    ctx.beginPath(); ctx.moveTo(gut, ly); ctx.lineTo(W - gut, ly); ctx.stroke();
    const lg = ctx.createLinearGradient(gut, 0, W - gut, 0);
    lg.addColorStop(0, '#6b86ff'); lg.addColorStop(0.6, '#ece8df'); lg.addColorStop(1, '#ffd23f');
    ctx.strokeStyle = lg; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(gut, ly); ctx.lineTo(x1, ly); ctx.stroke();
    const tail = ctx.createLinearGradient(x1 - 140, 0, x1, 0);
    tail.addColorStop(0, 'rgba(255,255,255,0)'); tail.addColorStop(1, 'rgba(255,255,255,0.9)');
    ctx.strokeStyle = tail; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(Math.max(gut, x1 - 140), ly); ctx.lineTo(x1, ly); ctx.stroke();
    const hg = ctx.createRadialGradient(x1, ly, 0, x1, ly, 40);
    hg.addColorStop(0, 'rgba(255,230,140,0.7)'); hg.addColorStop(1, 'rgba(255,210,63,0)');
    ctx.fillStyle = hg; ctx.fillRect(x1 - 40, ly - 40, 80, 80);
    ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x1, ly, 2.4, 0, 6.283); ctx.fill();

    ctx.globalCompositeOperation = 'source-over';
    ctx.font = '200 ' + fs + 'px Unbounded, system-ui, sans-serif';
    ctx.textBaseline = 'alphabetic';
    const digits = String(Math.min(100, Math.floor(P * 100 + 0.0001))).padStart(3, '0'), cell = ctx.measureText('0').width * 0.92;
    ctx.fillStyle = 'rgb(' + Math.round(236 + 19 * sh) + ',' + Math.round(232 - 22 * sh) + ',' + Math.round(223 - 160 * sh) + ')';
    for (let i = 0; i < 3; i++) {
      const w = ctx.measureText(digits[i]).width;
      ctx.fillText(digits[i], gut + i * cell + (cell - w) / 2, ly - 16);
    }
    ctx.globalAlpha = 1;

    if (dbg && ++frames % 5 === 0) postMessage({ t: 'f', n: frames });
    if (burstT && bt > 1.05) { ctx.fillStyle = '#05060a'; ctx.fillRect(0, 0, W, H); stopped = true; return; }
    raf(frame);
  }

  self.onmessage = (e) => {
    const m = e.data;
    if (m.t === 'init') init(m);
    else if (!cv) return;
    else if (m.t === 'set') tgt = Math.max(tgt, m.v);
    else if (m.t === 'release') { rel = true; tgt = 1; }
    else if (m.t === 'size') size(m.w, m.h, m.dpr);
    else if (m.t === 'm' || m.t === 'd') {
      if (m.t === 'd') waves.push({ x: m.x, y: m.y, t: performance.now() });
      if (hasP && m.t === 'm') {
        // paint along the path: one stroke every ~9px, aimed along the movement
        const dx = m.x - px, dy = m.y - py, d = Math.hypot(dx, dy), a = Math.atan2(dy, dx);
        for (let s = 0; s < d; s += 9) {
          const i = tn++ % TRAIL, f = d ? s / d : 0;
          TX[i] = px + dx * f; TY[i] = py + dy * f; TL[i] = 1; TA[i] = a;
          TVX[i] = (Math.random() - 0.5) * 40; TVY[i] = (Math.random() - 0.5) * 40 - 10;
        }
      }
      px = m.x; py = m.y; hasP = true;
    } else if (m.t === 'l') hasP = false;
  };
}

export function initLoader({ calm }) {
  const quiet = { live: false, set() {}, release: () => Promise.resolve() };
  const el = document.querySelector('[data-loader]');
  if (!el || calm || !env.fine || typeof OffscreenCanvas === 'undefined' || !window.Worker || !HTMLCanvasElement.prototype.transferControlToOffscreen) return quiet;

  let worker, url, canvas, dead = false, finish = null, burst = null;
  const t0 = performance.now();
  const post = (m) => { try { worker.postMessage(m); } catch { /* terminated */ } };
  const dpr = () => Math.min(2, window.devicePixelRatio || 1);
  const onMove = (e) => { el.classList.add('is-moved'); post({ t: 'm', x: e.clientX, y: e.clientY }); };
  const onDown = (e) => post({ t: 'd', x: e.clientX, y: e.clientY });
  const onLeave = () => post({ t: 'l' });
  const onSize = () => post({ t: 'size', w: innerWidth, h: innerHeight, dpr: dpr() });
  const kill = () => {
    if (dead) return;
    dead = true;
    removeEventListener('pointermove', onMove); removeEventListener('pointerdown', onDown); removeEventListener('resize', onSize);
    document.documentElement.removeEventListener('pointerleave', onLeave);
    canvas?.remove(); el.classList.remove('is-live');
    worker?.terminate();
    if (url) URL.revokeObjectURL(url);
    finish?.(); // a loader problem must never hold the page back
  };

  try {
    canvas = document.createElement('canvas');
    canvas.className = 'loader__canvas';
    el.prepend(canvas);
    const off = canvas.transferControlToOffscreen();
    url = URL.createObjectURL(new Blob(['(' + loaderWorker + ')()'], { type: 'text/javascript' }));
    worker = new Worker(url);
    worker.onerror = kill;
    worker.onmessage = (e) => {
      if (e.data.t === 'burst') burst?.();
      else if (e.data.t === 'stage') { // the label follows the DISPLAYED progress, not the real one
        el.dataset.stage = e.data.i;
        const l = el.querySelector('.loader__label');
        if (l) l.textContent = STAGES[e.data.i][1];
      } else if (e.data.t === 'f') window.__lf = e.data.n; // ?debug: proof the worker keeps drawing while main is blocked
    };
    // a Blob worker cannot resolve relative URLs
    const abs = (p) => new URL(p, document.baseURI).href;
    worker.postMessage({
      t: 'init', canvas: off, w: innerWidth, h: innerHeight, dpr: dpr(), debug: location.search.includes('debug'),
      age: performance.now() - t0,
      n: (navigator.hardwareConcurrency || 4) <= 4 ? 4500 : 7000,
      img: abs('./assets/img/hassaan.webp'), font: abs('./assets/fonts/unbounded.woff2'),
    }, [off]);
    el.classList.add('is-live');
    addEventListener('pointermove', onMove, { passive: true });
    addEventListener('pointerdown', onDown, { passive: true });
    addEventListener('resize', onSize);
    document.documentElement.addEventListener('pointerleave', onLeave);
  } catch (err) {
    console.warn('[loader] falling back to the quiet loader', err);
    kill();
    return quiet;
  }

  return {
    get live() { return !dead; },
    set: (v) => post({ t: 'set', v }),
    release() {
      if (dead) return Promise.resolve();
      post({ t: 'release' });
      return new Promise((res) => {
        let timer;
        finish = () => { clearTimeout(timer); finish = null; burst = null; res(); };
        // resolve 350ms into the burst so the CSS fade overlaps it; the cap counts from when the minimum lifetime ends
        burst = () => { timer = setTimeout(finish, 350); };
        timer = setTimeout(finish, Math.max(0, MIN_MS - (performance.now() - t0)) + 1500);
        setTimeout(kill, Math.max(0, MIN_MS - (performance.now() - t0)) + 4000); // after the page has removed the node
      });
    },
  };
}
