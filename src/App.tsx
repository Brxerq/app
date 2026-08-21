import { Suspense, lazy, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';

const loadHero = () => import('./sections/Hero');
const loadSkills = () => import('./sections/Skills');
const loadExperience = () => import('./sections/Experience');
const loadProjects = () => import('./sections/Projects');
const loadContact = () => import('./sections/Contact');

const Hero = lazy(loadHero);
const Skills = lazy(loadSkills);
const Experience = lazy(loadExperience);
const Projects = lazy(loadProjects);
const Contact = lazy(loadContact);

gsap.registerPlugin(ScrollTrigger);

const FADE_MS = 400; // loading screen fade-out duration

function App() {
  // Two states only:
  //   isFading — loading screen is actively fading out
  //   isLoaded — loading screen gone, site fully mounted
  const [isFading, setIsFading] = useState(false);
  // The loading screen is motion, and nothing else. Anyone who asked for less
  // of that goes straight to the page.
  const [isLoaded, setIsLoaded] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  // Pull the section chunks down *while* the loading screen is up, so the
  // wait buys something instead of just delaying the same work.
  useEffect(() => {
    void Promise.all([loadHero(), loadSkills(), loadExperience(), loadProjects(), loadContact()]);
  }, []);

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
          <a
            href="#main"
            className="skip-link rounded-wobblySm border-2 border-ink bg-postit px-4 py-2 font-hand text-lg shadow-sketch"
          >
            skip to the good stuff
          </a>

          <Navigation />

          <main id="main" className="relative z-10">
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
