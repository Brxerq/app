import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { scrollToId } from '@/lib/lenis';
import { Menu, X, Zap } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'home' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'work' },
  { id: 'contact', label: 'contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const activeSectionRef = useRef(activeSection);
  const menuRef = useRef<HTMLDivElement>(null);

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
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let nextActive = activeSectionRef.current;

      for (const section of sections) {
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

  // Mobile menu slam animation.
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mobile-item',
        { xPercent: -110, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.35, stagger: 0.06, ease: 'power3.out' },
      );
    }, menuRef);
    return () => ctx.revert();
  }, [isOpen]);

  const go = (id: string) => {
    scrollToId(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b-[3px] border-void bg-bone">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          {/* Logo block */}
          <button
            onClick={() => go('hero')}
            className="brut-press flex items-center gap-2 border-[3px] border-void bg-brick-yell px-3 py-1.5 font-display text-base uppercase shadow-brutSm"
          >
            <Zap className="h-4 w-4" strokeWidth={3} />
            HASSAAN
          </button>

          {/* Desktop links — invert on hover */}
          <div className="hidden items-stretch gap-0 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`border-[3px] border-l-0 border-void px-4 py-2 font-display text-xs uppercase tracking-wide transition-colors duration-100 first:border-l-[3px] ${
                    isActive
                      ? 'bg-void text-brick-yell'
                      : 'bg-transparent text-void hover:bg-brick-pink'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="brut-press flex h-11 w-11 items-center justify-center border-[3px] border-void bg-white shadow-brutSm md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" strokeWidth={3} /> : <Menu className="h-5 w-5" strokeWidth={3} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — full-screen slam */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-brick-yell transition-transform duration-200 md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-3 px-6 pt-16">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`mobile-item flex items-center justify-between border-[3px] border-void px-5 py-4 text-left font-display text-2xl uppercase shadow-brut ${
                activeSection === item.id ? 'bg-void text-brick-yell' : 'bg-white text-void'
              }`}
            >
              {item.label}
              <span className="font-mono text-sm">0{i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
