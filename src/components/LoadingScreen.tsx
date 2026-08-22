import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

type LoadingScreenProps = {
  onComplete: () => void;
  minDurationMs?: number;
  controlledExiting?: boolean;
  fadeDurationMs?: number;
};

const brutalSteps = [
  'LOADING THE GOOD STUFF',
  'WARMING UP THE MODELS',
  'STICKING ON THE BADGES',
  'BOLTING THE GRID DOWN',
  'READY. HOLD TIGHT.',
];

export default function LoadingScreen({
  onComplete,
  minDurationMs = 2200,
  controlledExiting = false,
  fadeDurationMs = 600,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const stepDuration = useMemo(
    () => Math.max(280, Math.floor(minDurationMs / brutalSteps.length)),
    [minDurationMs],
  );

  useEffect(() => {
    const progressInterval = window.setInterval(() => {
      setProgress((prev) => (prev >= 96 ? prev : Math.min(96, prev + Math.random() * 11 + 3)));
    }, 120);

    const stepInterval = window.setInterval(() => {
      setStepIndex((prev) => Math.min(brutalSteps.length - 1, prev + 1));
    }, stepDuration);

    const completeTimeout = window.setTimeout(() => {
      setProgress(100);
      onComplete();
    }, minDurationMs);

    return () => {
      window.clearInterval(progressInterval);
      window.clearInterval(stepInterval);
      window.clearTimeout(completeTimeout);
    };
  }, [minDurationMs, onComplete, stepDuration]);

  // Slam-in entrance + number punch on every change.
  useEffect(() => {
    if (controlledExiting) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.load-counter',
        { yPercent: 30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.8)' },
      );
      gsap.to('.load-bar-fill', {
        scaleX: progress / 100,
        duration: 0.18,
        ease: 'power2.out',
        transformOrigin: 'left center',
      });
      if (progress >= 100) {
        gsap.fromTo(
          '.load-panel',
          { rotate: 0 },
          { rotate: -2, duration: 0.08, yoyo: true, repeat: 3, ease: 'none' },
        );
      }
    });
    return () => ctx.revert();
  }, [progress, controlledExiting]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-void"
      style={{
        opacity: controlledExiting ? 0 : 1,
        transition: `opacity ${fadeDurationMs}ms ease`,
        pointerEvents: controlledExiting ? 'none' : 'auto',
      }}
      aria-live="polite"
      aria-label="Loading"
    >
      {/* halftone corner */}
      <div className="bg-halftone-faint pointer-events-none absolute bottom-0 left-0 h-40 w-40 opacity-40" />

      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="load-panel w-full max-w-xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="inline-block -rotate-2 border-[3px] border-white bg-brick-yell px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-void">
              portfolio.exe
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              v2 — neo brutal
            </span>
          </div>

          <h1 className="text-[clamp(4rem,14vw,9rem)] leading-none text-white">
            <span ref={counterRef} className="load-counter inline-block tabular-nums">
              {String(Math.round(progress)).padStart(3, '0')}
              <span className="text-brick-yell">%</span>
            </span>
          </h1>

          {/* Progress bar — chunky blocks */}
          <div className="mt-6 h-6 border-[3px] border-white bg-transparent p-[3px]">
            <div className="load-bar-fill h-full w-full origin-left scale-x-0 bg-brick-yell" />
          </div>

          <p className="mt-5 font-mono text-sm uppercase tracking-widest text-white/70">
            {brutalSteps[stepIndex]}
            <span className="animate-caret-blink text-brick-pink">_</span>
          </p>
        </div>

        {/* Bottom marquee-ish strip */}
        <div className="mt-16 w-full overflow-hidden border-y-[3px] border-white/20 py-2">
          <p className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            AI ENGINEER — FULL STACK — SHIPS TO PRODUCTION — 6 COUNTRIES — AI ENGINEER — FULL STACK — SHIPS TO PRODUCTION — 6 COUNTRIES
          </p>
        </div>
      </div>
    </div>
  );
}
