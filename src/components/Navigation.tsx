import { useState, useEffect, useRef } from 'react';
import { SketchButton } from '@/components/ui/sketch';
import { DrawnUnderline } from '@/components/ui/drawn-underline';
import { Menu, X, Pencil } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'hello' },
  { id: 'skills', label: 'toolbox' },
  { id: 'experience', label: 'history' },
  { id: 'projects', label: 'things i built' },
  { id: 'contact', label: 'say hi' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSectionRef = useRef(activeSection);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    let ticking = false;
    let rafId = 0;
    const sections = navItems
      .map((item) => ({ id: item.id, element: document.getElementById(item.id) }))
      .filter((item): item is { id: string; element: HTMLElement } => Boolean(item.element));

    const updateScrollState = () => {
      const nextScrolled = window.scrollY > 100;
      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let nextActive = activeSectionRef.current;

      for (let i = 0; i < sections.length; i += 1) {
        const section = sections[i];
        const top = section.element.offsetTop;
        const bottom = top + section.element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          nextActive = section.id;
          break;
        }
      }

      setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(updateScrollState);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollState();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${isScrolled ? 'py-3' : 'py-5'}`}>
        <div className="mx-auto max-w-5xl px-4">
          <div
            className={`flex -rotate-[0.4deg] items-center justify-between gap-4 rounded-wobblyMd border-2 border-ink bg-white px-4 py-2.5 transition-shadow duration-200 ${isScrolled ? 'shadow-sketch' : 'shadow-sketchSoft'
              }`}
          >
            {/* Signature */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 font-kalam text-lg leading-none sm:text-xl"
            >
              <Pencil className="h-5 w-5 -rotate-12 text-marker" strokeWidth={2.5} />
              <span className="squiggle-underline">Hassaan</span>
            </button>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  // The current section keeps a permanent pen squiggle; the rest
                  // get one scribbled in on hover.
                  isActive ? (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      aria-current="true"
                      className="squiggle-underline-pen px-3 py-1.5 font-hand text-lg text-pen"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <DrawnUnderline key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="rounded-wobblySm px-3 py-1.5 font-hand text-lg text-ink-soft transition-colors duration-100 hover:text-ink"
                      >
                        {item.label}
                      </button>
                    </DrawnUnderline>
                  )
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-wobblySm border-2 border-ink bg-paper shadow-sketchSm transition-transform duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-5 w-5" strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — a note taped over the page */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-200 md:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
      >
        <div className="absolute inset-0 bg-paper/90" onClick={() => setIsOpen(false)} />
        <div className="tape absolute left-4 right-4 top-24 rotate-1 rounded-wobblyMd border-[3px] border-ink bg-white p-5 shadow-sketchLg">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 rounded-wobblySm px-3 py-3 text-left font-hand text-xl transition-transform duration-100 ${isActive ? 'bg-postit text-ink' : 'text-ink-soft'
                    }`}
                >
                  <span className="text-marker">{isActive ? '→' : '·'}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating CTA — appears once you start reading */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isScrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
          }`}
      >
        <SketchButton onClick={() => scrollToSection('contact')} variant="primary" className="rotate-1">
          say hi
        </SketchButton>
      </div>
    </>
  );
}
