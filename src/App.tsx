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

gsap.registerPlugin(ScrollTrigger);

const FADE_MS = 500; // loading screen fade-out duration

function App() {
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
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Loading screen stays in DOM during its own fade-out, then unmounts */}
      {!isLoaded && (
        <LoadingScreen
          onComplete={handleLoadComplete}
          controlledExiting={isFading}
          fadeDurationMs={FADE_MS}
        />
      )}

      {/* Main site — only mounts once the loading screen is completely gone.
          Hero runs its own GSAP entrance on mount. */}
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
