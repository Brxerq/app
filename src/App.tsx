import { Suspense, lazy, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getLenis } from './lib/lenis';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';

const Hero = lazy(() => import('./sections/Hero'));
const Skills = lazy(() => import('./sections/Skills'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

gsap.registerPlugin(ScrollTrigger);

const FADE_MS = 500; // loading screen fade-out duration

function App() {
  const [isFading, setIsFading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Lenis smooth scroll, driven by GSAP's ticker so ScrollTrigger stays in sync.
  useEffect(() => {
    if (!isLoaded) return;
    const lenis = getLenis();

    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.off('scroll', ScrollTrigger.update);
    };
  }, [isLoaded]);

  const handleLoadComplete = () => {
    setIsFading(true);
    window.setTimeout(() => setIsLoaded(true), FADE_MS);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {!isLoaded && (
        <LoadingScreen
          onComplete={handleLoadComplete}
          controlledExiting={isFading}
          fadeDurationMs={FADE_MS}
        />
      )}

      {isLoaded && (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
