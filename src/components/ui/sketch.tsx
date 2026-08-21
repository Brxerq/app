import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Hand-drawn primitives.
 *
 * Everything here rejects geometric perfection: wobbly radii, thick pencil
 * borders, hard offset shadows (never blur), and small deliberate rotations.
 * Prefer these over raw Tailwind `rounded-*` / `shadow-*` classes.
 */

/* ------------------------------------------------------------------ */
/* Button                                                              */
/* ------------------------------------------------------------------ */

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

// `marker-deep` rather than `marker`: white on the bright red only reaches
// 3.3:1, which fails at button text sizes.
const buttonTone: Record<ButtonVariant, string> = {
  primary: 'bg-white hover:bg-marker-deep hover:text-white',
  secondary: 'bg-paper-aged hover:bg-pen hover:text-white',
  ghost: 'bg-transparent hover:bg-postit',
};

interface SketchButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  icon?: ReactNode;
  tabIndex?: number;
}

export function SketchButton({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  onClick,
  className,
  type = 'button',
  disabled = false,
  icon,
  tabIndex,
}: SketchButtonProps) {
  const classes = cn(
    'inline-flex h-12 items-center justify-center gap-2 rounded-wobbly border-[3px] border-ink px-6',
    'font-hand text-lg text-ink shadow-sketch transition-all duration-100 ease-out md:text-xl',
    disabled
      ? 'cursor-not-allowed opacity-60'
      : cn(
        buttonTone[variant],
        'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sketchSm',
        'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      ),
    className,
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} tabIndex={tabIndex} className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      tabIndex={tabIndex}
      className={classes}
    >
      {icon}
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

type CardTone = 'white' | 'note' | 'aged' | 'paper';
type CardDecoration = 'none' | 'tape' | 'tack';

const cardTone: Record<CardTone, string> = {
  white: 'bg-white',
  note: 'bg-postit',
  aged: 'bg-paper-aged',
  paper: 'bg-paper',
};

interface SketchCardProps {
  children: ReactNode;
  tone?: CardTone;
  decoration?: CardDecoration;
  className?: string;
  /** Hard black offset shadow instead of the soft default. */
  solid?: boolean;
}

export function SketchCard({
  children,
  tone = 'white',
  decoration = 'none',
  className,
  solid = false,
}: SketchCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-wobblyMd border-2 border-ink',
        cardTone[tone],
        solid ? 'shadow-sketch' : 'shadow-sketchSoft',
        decoration === 'tape' && 'tape',
        decoration === 'tack' && 'tack',
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tag — small sticky label                                            */
/* ------------------------------------------------------------------ */

export function SketchTag({
  children,
  className,
  tone = 'white',
}: {
  children: ReactNode;
  className?: string;
  tone?: CardTone;
}) {
  return (
    <span
      className={cn(
        'inline-block rounded-wobblySm border-2 border-ink px-2.5 py-0.5 font-hand text-sm text-ink',
        cardTone[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading — sticky-note label + marker title + squiggle       */
/* ------------------------------------------------------------------ */

export function SectionHeading({
  label,
  title,
  accent,
  children,
  className,
  align = 'left',
}: {
  /** Small sticky-note tag above the title. */
  label: string;
  title: string;
  /** Trailing word rendered in red marker with a squiggly underline. */
  accent?: string;
  /** Optional intro copy under the heading. */
  children?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      <span
        className="mb-4 inline-block -rotate-2 rounded-wobblySm border-2 border-ink bg-postit px-3 py-1 font-hand text-sm shadow-sketchSm"
      >
        {label}
      </span>

      <h2 className="font-kalam text-4xl leading-tight md:text-5xl">
        {title}{' '}
        {accent && (
          <span className="squiggle-underline text-marker">{accent}</span>
        )}
      </h2>

      {children && (
        <div
          className={cn(
            'mt-4 max-w-2xl text-lg text-ink-soft md:text-xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Doodles                                                             */
/* ------------------------------------------------------------------ */

/** Wobbly hand-drawn horizontal rule. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 12"
      preserveAspectRatio="none"
      aria-hidden
      className={cn('h-3 w-full text-ink', className)}
    >
      <path
        d="M2 8 Q 25 1 50 7 T 100 7 T 150 6 T 200 8 T 250 5 T 298 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Curved dashed arrow, used to point at things. */
export function SketchArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" aria-hidden className={cn('text-ink', className)}>
      <path
        d="M6 8 C 40 4, 88 18, 96 58"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="7 7"
      />
      <path
        d="M84 46 L 97 62 L 108 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Rough circle drawn around an icon or number. */
export function RoughCircle({
  children,
  className,
  color = 'currentColor',
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <span className={cn('relative inline-flex items-center justify-center', className)}>
      <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 h-full w-full">
        <path
          d="M50 6 C 76 4, 96 26, 94 52 C 92 78, 72 96, 47 94 C 22 92, 5 72, 7 46 C 9 22, 26 8, 50 6 Z"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </span>
  );
}
