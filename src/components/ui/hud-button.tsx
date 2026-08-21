import { useId, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { HyperText } from '@/components/ui/hyper-text';

type Variant = 'primary' | 'secondary';

interface HudButtonProps {
  children: string;
  variant?: Variant;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  icon?: ReactNode;
}

const palette: Record<Variant, { main: string; text: string; glow: string }> = {
  primary: { main: '#22d3ee', text: 'text-cyan-200', glow: 'rgba(34, 211, 238, 0.35)' },
  secondary: { main: '#c084fc', text: 'text-fuchsia-200', glow: 'rgba(192, 132, 252, 0.28)' },
};

/**
 * Angled HUD-frame button: stretchable SVG chassis, corner dots, scrambling label.
 * Width comes from `className` (defaults to 182px); the frame stretches, the dots stay round.
 */
export function HudButton({
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
}: HudButtonProps) {
  const [hovered, setHovered] = useState(false);
  const colors = palette[variant];
  const gradientId = `hud-${useId().replace(/:/g, '')}`;

  const dot = 'absolute rounded-full';
  const content = (
    <>
      <span
        aria-hidden
        className="absolute inset-0 -z-10 blur-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
          opacity: hovered && !disabled ? 1 : 0,
        }}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 182.288 43.721"
        preserveAspectRatio="none"
        className="w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="93.198"
            y1="-53.343"
            x2="93.198"
            y2="68.841"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={colors.main} stopOpacity="1" />
            <stop offset="0.35" stopColor={colors.main} stopOpacity="0.3" />
            <stop offset="0.67" stopColor={colors.main} stopOpacity="0.05" />
            <stop offset="1" stopColor={colors.main} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M181.788.5H13.7L4.609,9.593V43.221H170.048l11.74-11.74Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M170.256,43.721H4.108V9.386L13.494,0H182.288V31.688Zm-165.148-1H169.842l11.446-11.447V1H13.908l-8.8,8.8Z"
          fill={colors.main}
        />
      </svg>

      {/* Corner dots, kept circular regardless of button width */}
      <span aria-hidden>
        {[
          'right-[4px] top-[6px]',
          'right-[4px] top-[11px]',
          'right-[9px] top-[6px]',
          'right-[9px] top-[11px]',
        ].map((pos) => (
          <span
            key={pos}
            className={cn(dot, 'w-[2.5px] h-[2.5px]', pos)}
            style={{ background: colors.main }}
          />
        ))}
        {['left-[1px] top-[19px]', 'left-[1px] top-[24px]'].map((pos) => (
          <span
            key={pos}
            className={cn(dot, 'w-[1.5px] h-[1.5px]', pos)}
            style={{ background: colors.main }}
          />
        ))}
      </span>

      <span className="absolute inset-0 flex items-center justify-center gap-2 pt-[2px]">
        {icon}
        <HyperText
          text={children}
          trigger={hovered && !disabled}
          className={cn('text-sm font-bold tracking-wider', colors.text)}
        />
      </span>
    </>
  );

  const shared = {
    className: cn(
      'btn-holo relative inline-block w-[182px] h-[44px] transition-transform duration-300',
      disabled ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.03] active:scale-[0.98]',
      className,
    ),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick,
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...shared}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} {...shared}>
      {content}
    </button>
  );
}
