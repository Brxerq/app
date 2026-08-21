import { cn } from '@/lib/utils';

/**
 * Pencil loader — a pencil that draws its own circle, forever.
 *
 * Recolored onto the site palette: blue-ballpoint barrel, red marker eraser,
 * post-it yellow wood, graphite tip. Motion lives in index.css (`.pencil__*`).
 */
export function PencilLoader({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      role="img"
      aria-label="Drawing"
      className={cn('pencil h-28 w-28 text-ink', className)}
    >
      <defs>
        <clipPath id="pencil-eraser">
          <rect height="30" width="30" ry="5" rx="5" />
        </clipPath>
      </defs>

      {/* The line the pencil leaves behind */}
      <circle
        className="pencil__stroke"
        transform="rotate(-113,100,100)"
        strokeLinecap="round"
        strokeDashoffset="439.82"
        strokeDasharray="439.82 439.82"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        r="70"
      />

      <g className="pencil__rotate" transform="translate(100,100)">
        <g fill="none">
          <circle
            className="pencil__body1"
            transform="rotate(-90)"
            strokeDashoffset="402"
            strokeDasharray="402.12 402.12"
            strokeWidth="30"
            stroke="#2d5da1"
            r="64"
          />
          <circle
            className="pencil__body2"
            transform="rotate(-90)"
            strokeDashoffset="465"
            strokeDasharray="464.96 464.96"
            strokeWidth="10"
            stroke="#4a7ec4"
            r="74"
          />
          <circle
            className="pencil__body3"
            transform="rotate(-90)"
            strokeDashoffset="339"
            strokeDasharray="339.29 339.29"
            strokeWidth="10"
            stroke="#204476"
            r="54"
          />
        </g>

        {/* Eraser end: red marker rubber held by a paper-grey ferrule */}
        <g className="pencil__eraser" transform="rotate(-90) translate(49,0)">
          <g className="pencil__eraser-skew">
            <rect height="30" width="30" ry="5" rx="5" fill="#ff4d4d" />
            <rect clipPath="url(#pencil-eraser)" height="30" width="5" fill="#d63c3c" />
            <rect height="20" width="30" fill="#e5e0d8" />
            <rect height="20" width="15" fill="#c9c2b6" />
            <rect height="20" width="5" fill="#d8d2c7" />
            <rect height="2" width="30" y="6" fill="rgba(45,45,45,0.2)" />
            <rect height="2" width="30" y="13" fill="rgba(45,45,45,0.2)" />
          </g>
        </g>

        {/* Sharpened end: post-it yellow wood, graphite tip */}
        <g className="pencil__point" transform="rotate(-90) translate(49,-30)">
          <polygon points="15 0,30 30,0 30" fill="#fff0a8" />
          <polygon points="15 0,6 30,0 30" fill="#e8d47a" />
          <polygon points="15 0,20 10,10 10" fill="#2d2d2d" />
        </g>
      </g>
    </svg>
  );
}
