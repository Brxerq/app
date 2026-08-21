import { useEffect, useMemo, useState } from 'react';

type LoadingScreenProps = {
  onComplete: () => void;
  minDurationMs?: number;
  /** When true (set by parent), the loading screen fades out. */
  controlledExiting?: boolean;
  /** Duration of the fade-out transition in ms — must match parent. */
  fadeDurationMs?: number;
};

const sketchSteps = [
  'sharpening the pencil',
  'sketching the layout',
  'inking the headlines',
  'sticking the notes on',
  'almost done, one sec',
];

export default function LoadingScreen({
  onComplete,
  minDurationMs = 2400,
  controlledExiting = false,
  fadeDurationMs = 600,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const stepDuration = useMemo(
    () => Math.max(280, Math.floor(minDurationMs / sketchSteps.length)),
    [minDurationMs]
  );

  useEffect(() => {
    const progressInterval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 96) {
          return prev;
        }
        const bump = Math.random() * 9 + 2;
        return Math.min(96, prev + bump);
      });
    }, 140);

    const stepInterval = window.setInterval(() => {
      setStepIndex((prev) => Math.min(sketchSteps.length - 1, prev + 1));
    }, stepDuration);

    const completeTimeout = window.setTimeout(() => {
      setProgress(100);
      setStepIndex(sketchSteps.length - 1);
      onComplete();
    }, minDurationMs);

    return () => {
      window.clearInterval(progressInterval);
      window.clearInterval(stepInterval);
      window.clearTimeout(completeTimeout);
    };
  }, [minDurationMs, onComplete, stepDuration]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-paper"
      style={{
        opacity: controlledExiting ? 0 : 1,
        transition: `opacity ${fadeDurationMs}ms ease`,
        pointerEvents: controlledExiting ? 'none' : 'auto',
        backgroundImage: 'radial-gradient(#e5e0d8 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md -rotate-1 rounded-wobblyMd border-[3px] border-ink bg-white p-7 shadow-sketchLg">
          <span className="mb-4 inline-block rotate-2 rounded-wobblySm border-2 border-ink bg-postit px-3 py-1 font-hand text-sm shadow-sketchSm">
            work in progress
          </span>

          <h1 className="font-kalam text-3xl leading-tight">
            drawing the <span className="text-marker">portfolio</span>...
          </h1>

          <p className="mt-3 font-hand text-lg text-ink-soft">
            {sketchSteps[stepIndex]}
            <span className="animate-caret-blink">_</span>
          </p>

          {/* Hand-drawn progress bar: dashed outline, ink fill */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between font-hand text-sm text-ink-soft">
              <span>progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-5 rounded-wobblySm border-2 border-dashed border-ink bg-paper p-[3px]">
              <div
                className="h-full rounded-wobblySm bg-ink transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Little doodle in the corner of the page */}
          <svg viewBox="0 0 120 40" aria-hidden className="mt-6 h-8 w-32 text-ink-faint">
            <path
              d="M2 30 Q 14 6 26 30 T 50 30 T 74 30 T 98 30 T 118 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
