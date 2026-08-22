import { useEffect, useRef } from 'react';
import { SketchButton, SketchArrow } from '@/components/ui/sketch';
import { asset, prefersReducedMotion } from '@/lib/utils';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, GraduationCap, Cpu, Clock, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const notes = [
  { icon: GraduationCap, label: 'studied', value: 'BSc Computer Science', tilt: '-rotate-2', tone: 'bg-white' },
  { icon: Cpu, label: 'i build', value: 'AI + data products', tilt: 'rotate-1', tone: 'bg-postit' },
  { icon: Clock, label: 'been at it', value: '2+ years', tilt: '-rotate-1', tone: 'bg-white' },
  { icon: Sparkles, label: 'best win', value: '40% faster support', tilt: 'rotate-2', tone: 'bg-postit' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  // The page's opening statement: the photo gets taped down, the name is
  // written across, the marks around it are drawn, and the notes land last.
  // Runs once on mount, after the loading screen is gone.
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });

      // Heavily overlapped on purpose: the whole thing lands in ~1.2s. An
      // entrance the reader has to sit through stops being an entrance.
      tl.from(avatarRef.current, {
        y: 26,
        rotation: -6,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.5)',
      });

      tl.from('.hero-tag', { y: 12, scale: 0.9, opacity: 0, duration: 0.28 }, '-=0.34');

      // Written, not faded: ink laid across the name from left to right.
      tl.from(
        '.hero-write',
        {
          clipPath: 'inset(0 100% -0.35em 0)',
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.inOut',
          clearProps: 'clipPath',
        },
        '-=0.16',
      );

      tl.from('.hero-line', { y: 18, opacity: 0, duration: 0.36, stagger: 0.055 }, '-=0.4');

      tl.fromTo(
        '.hero-draw',
        { drawSVG: '0%' },
        { drawSVG: '100%', duration: 0.45, stagger: 0.07, ease: 'power1.inOut' },
        '-=0.3',
      );

      tl.from(
        '.hero-note',
        {
          y: -14,
          scale: 0.95,
          opacity: 0,
          duration: 0.34,
          stagger: 0.05,
          ease: 'back.out(1.8)',
          // Hand back to the CSS tilt/hover classes once the entrance is done.
          clearProps: 'transform,opacity',
        },
        '-=0.42',
      );

      tl.from('.hero-badge', { scale: 0, duration: 0.38, ease: 'back.out(2.2)' }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Words */}
          <div className="order-2 md:order-1">
            <span className="hero-tag mb-5 inline-block -rotate-2 rounded-wobblySm border-2 border-ink bg-postit px-3 py-1 font-hand text-base shadow-sketchSm">
              hi there, i&apos;m —
            </span>

            {/* Bigger and tighter than it was. This is the one line on the page
                that should be unmissable. */}
            <h1 className="font-kalam text-[3.25rem] leading-[0.98] tracking-[-0.01em] sm:text-6xl md:text-7xl">
              <span className="hero-write inline-block">Syed Muhammad</span>
              <br />
              <span className="relative inline-block">
                <span className="hero-write inline-block text-marker">Hassaan</span>
                <svg
                  viewBox="0 0 220 16"
                  preserveAspectRatio="none"
                  aria-hidden
                  className="absolute -bottom-2 left-0 h-4 w-full overflow-visible text-marker"
                >
                  <path
                    className="hero-draw"
                    d="M4 10 Q 30 3 58 9 T 114 8 T 166 10 T 216 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="hero-line ml-2 inline-block rotate-12 text-pen">!</span>
            </h1>

            <p className="hero-line mt-7 font-hand text-xl md:text-2xl">
              <span className="marker-highlight">AI engineer</span> &amp; full-stack developer
            </p>

            <p className="hero-line mt-4 max-w-lg font-hand text-lg leading-relaxed text-ink-soft md:text-xl">
              I ship whole systems, not slices: CRM automation, NLP copilots, and
              computer-vision workflows that survive real users. Currently deep in
              data science and AI, still drawing boxes and arrows before I write a
              line of code.
            </p>

            {/* Sticky notes */}
            <div className="mt-8 grid max-w-lg grid-cols-2 gap-4">
              {notes.map((note) => {
                const Icon = note.icon;
                return (
                  <div
                    key={note.label}
                    className={`hero-note lift rounded-wobblySm border-2 border-ink p-3 shadow-sketch ${note.tilt} ${note.tone}`}
                  >
                    <Icon className="mb-1 h-5 w-5 text-marker-deep" strokeWidth={2.5} />
                    <div className="font-hand text-sm text-ink-faint">{note.label}</div>
                    <div className="font-kalam text-base leading-tight">{note.value}</div>
                  </div>
                );
              })}
            </div>

            {/* Buttons + a scribbled arrow pointing at the main one */}
            <div className="hero-line relative mt-10 flex flex-wrap items-center gap-4">
              <SketchArrow className="absolute -left-24 -top-6 hidden h-16 w-24 -scale-x-100 md:block" drawClassName="hero-draw" />
              <SketchButton href="#projects" variant="primary">
                see my work
              </SketchButton>
              <SketchButton href="#contact" variant="secondary">
                say hello
              </SketchButton>
            </div>
          </div>

          {/* Taped-up photo */}
          <div className="order-1 flex justify-center md:order-2">
            <div ref={avatarRef} className="relative">
              <div className="tape relative -rotate-3 transition-transform duration-100 hover:rotate-1">
                <img
                  src={asset('/avatar.webp')}
                  alt="Syed Muhammad Hassaan"
                  width={576}
                  height={598}
                  fetchPriority="high"
                  className="h-72 w-72 object-contain sm:h-80 sm:w-80"
                />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 font-kalam text-lg text-ink-soft">
                  that&apos;s me
                </span>
              </div>

              {/* Doodled blob that keeps bouncing. Availability and location
                  are the two facts a recruiter scans for, so they stay on
                  screen at every width — just tucked in closer on phones. */}
              <div className="hero-badge absolute -right-2 -top-4 flex h-16 w-16 animate-doodle-bounce items-center justify-center rounded-blob border-[3px] border-ink bg-postit text-center font-kalam text-sm shadow-sketch sm:-right-6 sm:-top-6">
                open to
                <br />
                work
              </div>

              <div className="hero-badge absolute -bottom-3 -left-2 rotate-6 rounded-wobblySm border-2 border-ink bg-white px-3 py-1 font-hand text-base shadow-sketchSm sm:-bottom-4 sm:-left-6">
                Karachi, PK
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex items-center justify-center gap-2 font-hand text-lg text-ink-faint">
          <ArrowDown className="h-5 w-5 animate-doodle-bounce" strokeWidth={2.5} />
          keep scrolling
        </div>
      </div>
    </section>
  );
}
