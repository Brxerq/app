// The contribution graph comes from a public third-party endpoint, so every failure is silent:
// the caller hides the section instead of showing a broken chart.
export async function fetchContributions(user) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 7000);
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(user)}?y=last`, { signal: ctl.signal }).finally(() => clearTimeout(timer));
  if (!res.ok) throw new Error('github ' + res.status);
  const json = await res.json();
  const days = json.contributions;
  if (!Array.isArray(days) || !days.length) throw new Error('empty');
  const total = json.total?.lastYear ?? days.reduce((a, d) => a + d.count, 0);
  return { days, total };
}

/** 53 columns x 7 rows, Sunday first; leading cells padded so weeks line up */
export function toGrid(days) {
  const pad = new Date(days[0].date).getUTCDay();
  const cells = [...Array(pad).fill(null), ...days];
  const out = [];
  for (let i = 0; i < 53 * 7; i++) out.push(cells[i] ?? { count: 0, level: 0 });
  return out;
}

/** SVG heat-map in GitHub's layout: month labels on top, Mon/Wed/Fri on the left, legend underneath */
export function heatmap(grid) {
  const ns = 'http://www.w3.org/2000/svg';
  const cell = 11, gap = 3, step = cell + gap, left = 30, top = 18;
  const w = left + 53 * step, h = top + 7 * step + 26;
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'GitHub contributions over the last year, one square per day');
  const ramp = ['#1b2033', '#26407a', '#3f66d6', '#8aa2ff', '#ffd23f'];
  const el = (tag, attrs, text) => {
    const n = document.createElementNS(ns, tag);
    for (const k in attrs) n.setAttribute(k, String(attrs[k]));
    if (text) n.textContent = text;
    svg.appendChild(n);
    return n;
  };
  const label = { fill: '#8b91a7', 'font-size': 10, 'font-family': 'inherit' };
  [['Mon', 1], ['Wed', 3], ['Fri', 5]].forEach(([t, r]) => el('text', { ...label, x: 0, y: top + r * step + 9 }, t));
  let lastMonth = -1, lastLabel = null, lastCol = -9;
  grid.forEach((d, i) => {
    const col = Math.floor(i / 7), row = i % 7;
    if (row === 0 && d.date) {
      const m = new Date(d.date).getUTCMonth();
      if (m !== lastMonth && col < 51) {
        if (col - lastCol < 3) lastLabel?.remove(); // a stub month at the start would overlap the next label
        lastLabel = el('text', { ...label, x: left + col * step, y: 11 }, new Date(d.date).toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }));
        lastCol = col;
      }
      lastMonth = m;
    }
    const r = el('rect', { x: left + col * step, y: top + row * step, width: cell, height: cell, rx: 2, fill: ramp[Math.min(4, d.level ?? 0)] });
    if (d.date) {
      const t = document.createElementNS(ns, 'title');
      t.textContent = `${d.count} contribution${d.count === 1 ? '' : 's'} on ${d.date}`;
      r.appendChild(t);
    }
  });
  const ly = top + 7 * step + 10, lx = w - 5 * step - 34;
  el('text', { ...label, x: lx - 28, y: ly + 9 }, 'Less');
  ramp.forEach((c, k) => el('rect', { x: lx + k * step, y: ly, width: cell, height: cell, rx: 2, fill: c }));
  el('text', { ...label, x: lx + 5 * step + 4, y: ly + 9 }, 'More');
  return svg;
}
