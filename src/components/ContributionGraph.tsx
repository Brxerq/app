import { useEffect, useState } from 'react';

type Day = { date: string; count: number; level: number };

// Ramp from the deep page background up to --purple (#d946ef).
const LEVELS = ['#1a1330', '#4c1d63', '#7e2a9c', '#b23ad0', '#d946ef'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const CELL = 11;
const GAP = 3;
const gridStyle = {
  gridAutoFlow: 'column' as const,
  gridTemplateRows: `repeat(7, ${CELL}px)`,
  gridAutoColumns: `${CELL}px`,
  gap: `${GAP}px`,
};

export function ContributionGraph({ username }: { username: string }) {
  const [days, setDays] = useState<Day[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let active = true;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error('bad status'))))
      .then((data) => {
        if (!active) return;
        setDays(data.contributions);
        setTotal(data.total?.lastYear ?? 0);
      })
      .catch(() => active && setFailed(true));
    return () => {
      active = false;
    };
  }, [username]);

  if (failed) return null;

  if (!days) {
    return <div className="h-[125px] rounded-lg bg-white/5 animate-pulse" />;
  }

  // Pad so the first column starts on the correct weekday row.
  const offset = new Date(days[0].date).getUTCDay();
  const cells: (Day | null)[] = [...Array(offset).fill(null), ...days];

  // One label per column where a new month begins.
  const labels: { column: number; text: string }[] = [];
  for (let column = 0; column * 7 < cells.length; column += 1) {
    const day = cells[column * 7 + 6] ?? cells[column * 7];
    if (!day) continue;
    const month = new Date(day.date).getUTCMonth();
    if (labels.length === 0 || labels[labels.length - 1].text !== MONTHS[month]) {
      labels.push({ column, text: MONTHS[month] });
    }
  }

  return (
    <div>
      <div className="grid mb-2" style={{ ...gridStyle, gridTemplateRows: 'auto', gridAutoFlow: 'row' }}>
        {labels.map((label) => (
          <span
            key={`${label.text}-${label.column}`}
            className="text-[10px] font-orbitron text-slate-500 whitespace-nowrap"
            style={{ gridRow: 1, gridColumn: label.column + 1 }}
          >
            {label.text}
          </span>
        ))}
      </div>

      <div className="grid" style={gridStyle}>
        {cells.map((day, index) =>
          day ? (
            <div
              key={day.date}
              title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
              className="rounded-[2px]"
              style={{ backgroundColor: LEVELS[day.level] }}
            />
          ) : (
            <div key={`pad-${index}`} />
          )
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 text-[11px] font-orbitron text-slate-400">
        <span>{total.toLocaleString()} contributions in the last year</span>
        <span className="flex items-center gap-1.5">
          Less
          {LEVELS.map((shade) => (
            <span
              key={shade}
              className="w-2.5 h-2.5 rounded-[2px]"
              style={{ backgroundColor: shade }}
            />
          ))}
          More
        </span>
      </div>
    </div>
  );
}
