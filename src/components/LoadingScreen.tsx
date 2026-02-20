import { useEffect, useMemo, useState } from 'react';

type LoadingScreenProps = {
  onComplete: () => void;
  minDurationMs?: number;
  /** When true (set by parent), the loading screen fades out. */
  controlledExiting?: boolean;
  /** Duration of the fade-out transition in ms — must match parent. */
  fadeDurationMs?: number;
};

const bootSteps = [
  'Booting core systems',
  'Loading render pipeline',
  'Initializing player profile',
  'Syncing mission logs',
  'Establishing uplink',
];

export default function LoadingScreen({
  onComplete,
  minDurationMs = 2600,
  controlledExiting = false,
  fadeDurationMs = 600,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const stepDuration = useMemo(
    () => Math.max(280, Math.floor(minDurationMs / bootSteps.length)),
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
      setStepIndex((prev) => Math.min(bootSteps.length - 1, prev + 1));
    }, stepDuration);

    const completeTimeout = window.setTimeout(() => {
      setProgress(100);
      setStepIndex(bootSteps.length - 1);
      // Notify parent — parent will flip controlledExiting which triggers the CSS fade
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
      className="fixed inset-0 z-[100] bg-[#04020a]"
      style={{
        opacity: controlledExiting ? 0 : 1,
        transition: `opacity ${fadeDurationMs}ms ease`,
        pointerEvents: controlledExiting ? 'none' : 'auto',
      }}
      aria-live="polite"
      aria-label="Loading screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(217,70,239,0.24),transparent_45%),radial-gradient(circle_at_85%_18%,rgba(34,211,238,0.22),transparent_42%),linear-gradient(170deg,#171127_0%,#0b0816_48%,#04020a_100%)]" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-xl rounded-2xl border border-cyan-400/25 bg-slate-950/60 p-6 shadow-[0_0_60px_rgba(34,211,238,0.1)] backdrop-blur-md">
          <div className="mb-2 font-orbitron text-xs tracking-[0.22em] text-cyan-300/80">SYSTEM BOOT</div>
          <h1 className="font-orbitron text-xl text-white sm:text-2xl">Initializing Player Session</h1>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/35 p-4 font-mono text-sm text-slate-300">
            <div className="mb-2 text-slate-500">Terminal://runtime</div>
            <div className="flex items-center gap-2">
              <span className="text-purple-300">&gt;</span>
              <span>{bootSteps[stepIndex]}</span>
              <span className="terminal-cursor" />
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between font-orbitron text-xs text-slate-400">
              <span>Loading assets</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-400 transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
