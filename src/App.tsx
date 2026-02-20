import { Suspense, lazy, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';

const Hero = lazy(() => import('./sections/Hero'));
const Skills = lazy(() => import('./sections/Skills'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));
const BackgroundGrid = lazy(() => import('./components/BackgroundGrid'));

gsap.registerPlugin(ScrollTrigger);

function getDeviceProfile() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const navWithMemory = navigator as Navigator & { deviceMemory?: number };
  const lowPowerCpu =
    typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
  const lowMemory =
    typeof navWithMemory.deviceMemory === 'number' && navWithMemory.deviceMemory <= 4;
  const lowPowerMode = reducedMotion || isMobile || lowPowerCpu || lowMemory;
  return {
    showBackgroundGrid: !lowPowerMode,
    showNoiseOverlay: !(reducedMotion || isMobile),
  };
}

const FADE_MS = 500; // loading screen fade-out duration

function App() {
  const [showBackgroundGrid] = useState(() => getDeviceProfile().showBackgroundGrid);
  const [showNoiseOverlay] = useState(() => getDeviceProfile().showNoiseOverlay);

  // Two states only:
  //   isFading — loading screen is actively fading out
  //   isLoaded — loading screen gone, site fully mounted
  const [isFading, setIsFading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadComplete = () => {
    setIsFading(true);
    window.setTimeout(() => setIsLoaded(true), FADE_MS);
  };

  return (
    <div className="relative min-h-screen bg-dark overflow-x-hidden">
      {/* Loading screen stays in DOM during its own fade-out, then unmounts */}
      {!isLoaded && (
        <LoadingScreen
          onComplete={handleLoadComplete}
          controlledExiting={isFading}
          fadeDurationMs={FADE_MS}
        />
      )}

      {/* Main site — only mounts once the loading screen is completely gone.
          No competing CSS animations. Hero runs its own GSAP entrance on mount. */}
      {isLoaded && (
        <>
          {/* Ambient background blobs */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute -top-24 -left-20 h-[28rem] w-[28rem] rounded-full bg-purple-500/14 blur-3xl hidden md:block" />
            <div className="absolute top-[18%] -right-24 h-[24rem] w-[24rem] rounded-full bg-cyan-400/12 blur-3xl hidden md:block" />
            <div className="absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-orange-400/8 blur-3xl hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/65" />
          </div>

          {showBackgroundGrid && (
            <Suspense fallback={null}>
              <BackgroundGrid />
            </Suspense>
          )}

          <Navigation />

          <main className="relative z-10">
            <Suspense fallback={<div className="min-h-screen" />}>
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </Suspense>
          </main>

          {showNoiseOverlay && (
            <div className="fixed inset-0 pointer-events-none z-50 noise-overlay" />
          )}
        </>
      )}
    </div>
  );
}

export default App;
