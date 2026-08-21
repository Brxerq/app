import { useEffect, useRef, useState } from 'react';
import { PencilLoader } from '@/components/ui/pencil-loader';

type LoadingScreenProps = {
  onComplete: () => void;
  /** Never flash by for less than this — a 90ms loader reads as a glitch. */
  minDurationMs?: number;
  /** Hard ceiling: leave even if the fonts never resolve. */
  maxDurationMs?: number;
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
];

export default function LoadingScreen({
  onComplete,
  minDurationMs = 700,
  maxDurationMs = 2000,
  controlledExiting = false,
  fadeDurationMs = 400,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(8);
  const [stepIndex, setStepIndex] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const started = performance.now();

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setProgress(100);
      setStepIndex(sketchSteps.length - 1);
      onComplete();
    };

    // The wait is real: it's the handwriting faces arriving. Without it the
    // page paints in a fallback serif and then jumps when Kalam lands.
    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    void fontsReady.then(() => {
      const elapsed = performance.now() - started;
      window.setTimeout(finish, Math.max(0, minDurationMs - elapsed));
    });

    const ceiling = window.setTimeout(finish, maxDurationMs);

    const progressInterval = window.setInterval(() => {
      // Ease toward 92% so the bar never stalls at a flat number.
      setProgress((prev) => (prev >= 92 ? prev : prev + (92 - prev) * 0.28));
    }, 120);

    const stepInterval = window.setInterval(() => {
      setStepIndex((prev) => Math.min(sketchSteps.length - 1, prev + 1));
    }, Math.max(240, Math.floor(minDurationMs / sketchSteps.length)));

    return () => {
      window.clearTimeout(ceiling);
      window.clearInterval(progressInterval);
      window.clearInterval(stepInterval);
    };
  }, [minDurationMs, maxDurationMs, onComplete]);

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
      role="status"
      aria-live="polite"
    >
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md -rotate-1 rounded-wobblyMd border-[3px] border-ink bg-white p-7 shadow-sketchLg">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="inline-block rotate-2 rounded-wobblySm border-2 border-ink bg-postit px-3 py-1 font-hand text-sm shadow-sketchSm">
              work in progress
            </span>
            <PencilLoader className="-mr-2 -mt-2 h-24 w-24 shrink-0" />
          </div>

          <p className="font-kalam text-3xl leading-tight">
            drawing the <span className="text-marker">portfolio</span>...
          </p>

          <p className="mt-3 font-hand text-lg text-ink-soft">
            {sketchSteps[stepIndex]}
            <span className="animate-caret-blink">_</span>
          </p>

          {/* Hand-drawn progress bar: dashed outline, ink fill */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between font-hand text-sm text-ink-soft">
              <span>progress</span>
              <span className="tabular">{Math.round(progress)}%</span>
            </div>
            <div className="h-5 rounded-wobblySm border-2 border-dashed border-ink bg-paper p-[3px]">
              <div
                className="h-full rounded-wobblySm bg-ink transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
