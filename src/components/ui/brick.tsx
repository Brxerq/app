import { forwardRef, type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ */
/* BrutalButton — flat block, hard shadow, slams down on press.        */
/* ------------------------------------------------------------------ */

type Variant = 'primary' | 'dark' | 'white' | 'pink' | 'blue' | 'lime' | 'orange';

const variantMap: Record<Variant, string> = {
  primary: 'bg-brick-yell text-void',
  dark: 'bg-void text-white',
  white: 'bg-white text-void',
  pink: 'bg-brick-pink text-void',
  blue: 'bg-brick-blue text-void',
  lime: 'bg-brick-lime text-void',
  orange: 'bg-brick-orange text-void',
};

type BrutalButtonProps = {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const BrutalButton = forwardRef<HTMLButtonElement, BrutalButtonProps>(
  ({ variant = 'primary', icon, children, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'brut-press inline-flex items-center justify-center gap-2 border-[3px] border-void px-6 py-3 font-display text-sm uppercase tracking-wide shadow-brut',
        variantMap[variant],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  ),
);
BrutalButton.displayName = 'BrutalButton';

/* Anchor flavour for href buttons */
type BrutalLinkProps = {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function BrutalLink({ variant = 'primary', icon, children, className, ...props }: BrutalLinkProps) {
  return (
    <a
      className={cn(
        'brut-press inline-flex items-center justify-center gap-2 border-[3px] border-void px-6 py-3 font-display text-sm uppercase tracking-wide shadow-brut',
        variantMap[variant],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* BrutalCard — white panel, thick border, hard shadow.                */
/* ------------------------------------------------------------------ */

export function BrutalCard({
  tone = 'white',
  className,
  children,
}: {
  tone?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('border-[3px] border-void shadow-brut', variantMap[tone], className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sticker — small mono label, slight rotation.                        */
/* ------------------------------------------------------------------ */

export function Sticker({
  tone = 'primary',
  className,
  children,
}: {
  tone?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        'inline-block border-[3px] border-void px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-widest shadow-brutSm',
        variantMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* SectionHeading — kicker sticker + massive display title.            */
/* ------------------------------------------------------------------ */

export function SectionHeading({
  kicker,
  title,
  accent,
  accentTone = 'primary',
  align = 'left',
  className,
  children,
}: {
  kicker: string;
  title: string;
  accent?: string;
  accentTone?: Variant;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn('brut-heading mb-12', align === 'center' && 'text-center', className)}>
      <Sticker tone={accentTone} className="mb-4">{kicker}</Sticker>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl">
        {title}
        {accent && (
          <>
            {' '}
            <span className={cn('inline-block -rotate-1 border-[3px] border-void px-3 shadow-brutSm', variantMap[accentTone])}>
              {accent}
            </span>
          </>
        )}
      </h2>
      {children && (
        <p className={cn('mt-5 max-w-2xl text-lg font-medium text-void/70', align === 'center' && 'mx-auto')}>
          {children}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee — infinite CSS scroll strip. Content is duplicated once;    */
/* the track is exactly 2x content width, animating -50%.              */
/* ------------------------------------------------------------------ */

export function Marquee({
  items,
  tone = 'dark',
  speed = 22,
  className,
  separator = '★',
}: {
  items: string[];
  tone?: Variant;
  speed?: number;
  className?: string;
  separator?: string;
}) {
  const row = (
    <>
      {items.map((item, i) => (
        <span key={i} className="mx-5 inline-flex items-center gap-5">
          <span>{item}</span>
          <span aria-hidden className="opacity-60">{separator}</span>
        </span>
      ))}
    </>
  );

  return (
    <div
      className={cn(
        'marquee-mask border-y-[3px] border-void py-3 font-display text-lg uppercase sm:text-xl',
        variantMap[tone],
        className,
      )}
    >
      <div className="marquee-track" style={{ animation: `marquee-scroll ${speed}s linear infinite` }}>
        <span className="flex shrink-0 items-center">{row}</span>
        <span className="flex shrink-0 items-center" aria-hidden>{row}</span>
      </div>
      <style>{`@keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* StarBadge — spinning star with text pinned over it.                 */
/* ------------------------------------------------------------------ */

export function StarBadge({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn('relative h-28 w-28', className)}>
      <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
        <path
          d="M50 0 L61 22 L85 15 L78 39 L100 50 L78 61 L85 85 L61 78 L50 100 L39 78 L15 85 L22 61 L0 50 L22 39 L15 15 L39 22 Z"
          fill="#FFC900"
          stroke="#141414"
          strokeWidth="3"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-center font-display text-[11px] uppercase leading-tight">
        {text}
      </span>
    </div>
  );
}
