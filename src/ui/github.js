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

/** flat SVG heat-map for the calm / no-WebGL page */
export function heatmap(grid) {
  const ns = 'http://www.w3.org/2000/svg';
  const cell = 11, gap = 3;
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', `0 0 ${53 * (cell + gap)} ${7 * (cell + gap)}`);
  svg.setAttribute('width', String(53 * (cell + gap)));
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'GitHub contributions over the last year, one square per day');
  const ramp = ['#161a26', '#26407a', '#3f66d6', '#8aa2ff', '#ffd23f'];
  grid.forEach((d, i) => {
    const r = document.createElementNS(ns, 'rect');
    r.setAttribute('x', String(Math.floor(i / 7) * (cell + gap)));
    r.setAttribute('y', String((i % 7) * (cell + gap)));
    r.setAttribute('width', String(cell));
    r.setAttribute('height', String(cell));
    r.setAttribute('rx', '2');
    r.setAttribute('fill', ramp[Math.min(4, d.level ?? 0)]);
    if (d.date) {
      const t = document.createElementNS(ns, 'title');
      t.textContent = `${d.count} on ${d.date}`;
      r.appendChild(t);
    }
    svg.appendChild(r);
  });
  return svg;
}
