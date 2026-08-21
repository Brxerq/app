import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface HyperTextProps {
  text: string;
  duration?: number;
  className?: string;
  /** Scramble once on mount as well as on hover. */
  animateOnLoad?: boolean;
  trigger?: boolean;
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const randomLetter = () => alphabet[Math.floor(Math.random() * alphabet.length)];

/** Scrambles letters into place. Runs on mount (optional) and whenever `trigger` flips on. */
export function HyperText({
  text,
  duration = 700,
  className,
  animateOnLoad = false,
  trigger = false,
}: HyperTextProps) {
  const [display, setDisplay] = useState(text);
  const first = useRef(true);

  useEffect(() => {
    if (first.current && !animateOnLoad) {
      first.current = false;
      return;
    }
    first.current = false;
    if (!trigger && !animateOnLoad) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDisplay(text);
      return;
    }

    let revealed = 0;
    const step = duration / (text.length * 8);
    const id = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((letter, i) => (letter === ' ' || i <= revealed ? letter : randomLetter()))
          .join(''),
      );
      revealed += 0.125;
      if (revealed >= text.length) {
        setDisplay(text);
        clearInterval(id);
      }
    }, step);

    return () => clearInterval(id);
  }, [text, duration, animateOnLoad, trigger]);

  return <span className={cn('font-mono whitespace-pre', className)}>{display}</span>;
}
