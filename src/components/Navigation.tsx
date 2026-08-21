import { useState, useEffect, useRef } from 'react';
import { SketchButton } from '@/components/ui/sketch';
import { DrawnUnderline } from '@/components/ui/drawn-underline';
import { Menu, X, Pencil, ArrowRight, Dot } from 'lucide-react';

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
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    let ticking = false;
    let rafId = 0;

    const updateScrollState = () => {
      const nextScrolled = window.scrollY > 100;
      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let nextActive = activeSectionRef.current;

      // Looked up per tick, not cached at mount: the sections are lazy chunks
      // that don't exist in the DOM yet when this nav first renders, so a
      // snapshot here would be empty forever and the active link would never
      // move off the first item.
      for (let i = 0; i < navItems.length; i += 1) {
        const element = document.getElementById(navItems[i].id);
        if (!element) continue;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          nextActive = navItems[i].id;
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

  // Open menu: hold the page still, take focus into the sheet, and let Escape
  // close it the way every other overlay on the web does.
  useEffect(() => {
    if (!isOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector('button')?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    // `scroll-margin-top` on each section keeps the target clear of the nav.
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Sections"
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-200 ${isScrolled ? 'py-3' : 'py-5'}`}
      >
        <div className="mx-auto max-w-5xl px-4">
          <div
            className={`flex -rotate-[0.4deg] items-center justify-between gap-4 rounded-wobblyMd border-2 border-ink bg-white px-4 py-2.5 transition-shadow duration-200 ${isScrolled ? 'shadow-sketch' : 'shadow-sketchSoft'
              }`}
          >
            {/* Signature */}
            <button
              onClick={() => scrollToSection('hero')}
              className="-mx-2 flex min-h-[44px] items-center gap-2 px-2 font-kalam text-lg leading-none sm:text-xl"
            >
              <Pencil className="h-5 w-5 -rotate-12 text-marker" strokeWidth={2.5} />
              <span className="squiggle-underline">Hassaan</span>
            </button>

            {/* Desktop links. Both states render the same element in the same
                box — only the ink changes — so the bar never reflows as you
                scroll past a section boundary. */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  // The current section already carries a permanent pen
                  // squiggle; a second scribble on hover would just stack.
                  <DrawnUnderline key={item.id} disabled={isActive}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`rounded-wobblySm px-3 py-1.5 font-hand text-lg transition-colors duration-100 ${isActive
                        ? 'squiggle-underline-pen-inset text-pen'
                        : 'text-ink-soft hover:text-ink'
                        }`}
                    >
                      {item.label}
                    </button>
                  </DrawnUnderline>
                );
              })}
            </div>

            {/* Mobile toggle */}
            <button
              ref={toggleRef}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-wobblySm border-2 border-ink bg-paper shadow-sketchSm transition-transform duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-5 w-5" strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — a note taped over the page */}
      <div
        id="mobile-menu"
        // `hidden` and not just opacity-0: a closed menu must be out of the tab
        // order, not merely invisible.
        hidden={!isOpen}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-paper/90" onClick={() => setIsOpen(false)} />
        <div
          ref={menuRef}
          className="tape absolute left-4 right-4 top-24 rotate-1 rounded-wobblyMd border-[3px] border-ink bg-white p-5 shadow-sketchLg"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex min-h-[44px] items-center gap-3 rounded-wobblySm px-3 py-3 text-left font-hand text-xl transition-transform duration-100 ${isActive ? 'bg-postit text-ink' : 'text-ink-soft'
                    }`}
                >
                  {isActive ? (
                    <ArrowRight className="h-5 w-5 shrink-0 text-marker-deep" strokeWidth={2.5} />
                  ) : (
                    <Dot className="h-5 w-5 shrink-0 text-ink-faint" strokeWidth={3} />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating CTA — appears once you start reading, and stands down once
          you've reached the contact form it points at. */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isScrolled && activeSection !== 'contact'
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-8 opacity-0'
          }`}
        aria-hidden={!isScrolled || activeSection === 'contact'}
      >
        <SketchButton
          onClick={() => scrollToSection('contact')}
          variant="primary"
          className="rotate-1"
          tabIndex={isScrolled && activeSection !== 'contact' ? 0 : -1}
        >
          say hi
        </SketchButton>
      </div>
    </>
  );
}
