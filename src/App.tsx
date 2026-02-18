import { Suspense, lazy, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';

const Hero = lazy(() => import('./sections/Hero'));
const Skills = lazy(() => import('./sections/Skills'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));
const BackgroundGrid = lazy(() => import('./components/BackgroundGrid'));

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (!href) {
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));
    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick));
    };
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-dark overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 h-[28rem] w-[28rem] rounded-full bg-purple-600/14 blur-3xl" />
        <div className="absolute top-[18%] -right-24 h-[24rem] w-[24rem] rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-orange-500/8 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/65" />
      </div>

      <Suspense fallback={null}>
        <BackgroundGrid />
      </Suspense>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 noise-overlay" />
    </div>
  );
}

export default App;
