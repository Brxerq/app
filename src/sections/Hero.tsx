import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { BrutalLink, Sticker, Marquee, StarBadge } from '@/components/ui/brick';
import { ArrowDown, ArrowUpRight, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const stats = [
  { value: 4500, suffix: '+', label: 'live automations', tone: 'bg-brick-yell' },
  { value: 86.5, suffix: '%', label: 'bookings need zero admin', decimals: 1, tone: 'bg-brick-lime' },
  { value: 95, suffix: '%', label: 'voice-agent booking accuracy', tone: 'bg-brick-pink' },
  { value: 6, suffix: '', label: 'countries shipped to', tone: 'bg-brick-blue' },
];

const marqueeItems = [
  'AI ENGINEER',
  'FULL-STACK DEV',
  'SHIPS TO PRODUCTION',
  '6 COUNTRIES',
  'REAL USERS, REAL IMPACT',
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarWrapRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  // Entrance chaos — one directed sequence.
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      // Kicker slams in from the left, skewed.
      tl.fromTo(
        '.hero-kicker',
        { x: -120, opacity: 0, skewX: -12 },
        { x: 0, opacity: 1, skewX: 0, duration: 0.45, ease: 'power3.out' },
      );

      // Headline characters explode up from below, random order.
      const split = new SplitText('.hero-title-line', { type: 'chars' });
      splitRef.current = split;
      tl.fromTo(
        split.chars,
        {
          yPercent: 130,
          opacity: 0,
          rotate: () => gsap.utils.random(-40, 40),
        },
        {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.7,
          ease: 'back.out(1.6)',
          stagger: { each: 0.025, from: 'random' },
        },
        '-=0.2',
      );

      // Role block drops like a stamp.
      tl.fromTo(
        '.hero-role',
        { scale: 2.4, opacity: 0, rotate: 8 },
        { scale: 1, opacity: 1, rotate: -1, duration: 0.4, ease: 'power4.in', clearProps: 'transform' },
        '-=0.35',
      )
        .to('.hero-role', { keyframes: [{ rotate: 1.2 }, { rotate: 0 }], duration: 0.3, ease: 'elastic.out(1, 0.4)' });

      // Bio + stat tiles + buttons cascade.
      tl.fromTo(
        '.hero-bio',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
        '-=0.15',
      );

      tl.fromTo(
        '.hero-stat',
        { y: 50, opacity: 0, rotate: () => gsap.utils.random(-10, 10) },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.5,
          ease: 'back.out(2)',
          stagger: 0.08,
          clearProps: 'transform',
        },
        '-=0.2',
      );

      tl.fromTo(
        '.hero-cta',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, stagger: 0.08, ease: 'power2.out' },
        '-=0.3',
      );

      // Portrait slides in from the right edge.
      tl.fromTo(
        '.hero-portrait',
        { xPercent: 60, opacity: 0, rotate: 12 },
        { xPercent: 0, opacity: 1, rotate: 2, duration: 0.65, ease: 'power3.out', clearProps: 'transform' },
        0.35,
      );

      tl.fromTo('.hero-badge', { scale: 0 }, { scale: 1, duration: 0.45, ease: 'back.out(2.2)' }, '-=0.25');

      tl.fromTo(
        '.hero-marquee',
        { yPercent: 100 },
        { yPercent: 0, duration: 0.45, ease: 'power3.out' },
        '-=0.4',
      );

      // Stat counters roll up once the tiles land.
      tl.add(() => {
        document.querySelectorAll<HTMLElement>('.stat-number').forEach((el) => {
          const end = parseFloat(el.dataset.value || '0');
          const decimals = parseInt(el.dataset.decimals || '0', 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: end,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = obj.val.toFixed(decimals);
            },
          });
        });
      }, '-=0.9');
    }, sectionRef);

    return () => {
      splitRef.current?.revert();
      ctx.revert();
    };
  }, []);

  // Mouse tilt on the portrait.
  useEffect(() => {
    const wrap = avatarWrapRef.current;
    if (!wrap) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rx = gsap.quickTo(wrap, 'rotationX', { duration: 0.5, ease: 'power2.out' });
    const ry = gsap.quickTo(wrap, 'rotationY', { duration: 0.5, ease: 'power2.out' });

    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      ry(((e.clientX / innerWidth) * 2 - 1) * 8);
      rx(-((e.clientY / innerHeight) * 2 - 1) * 8);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative overflow-hidden pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 pb-16 pt-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Words */}
          <div>
            <Sticker className="hero-kicker mb-6 -rotate-2">
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" strokeWidth={3} />
                open for work — karachi → worldwide
              </span>
            </Sticker>

            <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95]">
              <span className="hero-title-line text-outline block">Syed Muhammad</span>
              <span className="hero-title-line mt-1 inline-block border-[3px] border-void bg-brick-yell px-4 py-1 shadow-brut">
                Hassaan!
              </span>
            </h1>

            <div className="hero-role mt-6 inline-block -rotate-1 border-[3px] border-void bg-void px-4 py-2 font-display text-sm uppercase tracking-wide text-white shadow-brutPink sm:text-base">
              AI engineer who ships to production — not demos
            </div>

            <p className="hero-bio mt-6 max-w-xl text-lg font-medium leading-relaxed text-void/75">
              Healthcare platform across 6 countries. Voice agents booking at 95%
              accuracy. A CRM that cut support load 40%. I sketch the system,
              ship it, then measure whether it actually worked — currently deep
              in data science and AI.
            </p>

            {/* Stat tiles */}
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`hero-stat border-[3px] border-void p-4 shadow-brut ${stat.tone}`}
                >
                  <div className="font-display text-3xl leading-none">
                    <span
                      className="stat-number tabular-nums"
                      data-value={stat.value}
                      data-decimals={stat.decimals ?? 0}
                    >
                      0
                    </span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="mt-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-void/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <BrutalLink href="#projects" icon={<ArrowUpRight className="h-4 w-4" strokeWidth={3} />}>
                see the work
              </BrutalLink>
              <BrutalLink href="#contact" variant="dark">
                hire me
              </BrutalLink>
            </div>
          </div>

          {/* Portrait — bolted to the wall */}
          <div className="relative mx-auto hidden justify-center lg:flex">
            <div className="bg-halftone absolute -left-10 -top-10 h-36 w-36 opacity-20" />
            <div style={{ perspective: '900px' }}>
              <div ref={avatarWrapRef} className="hero-portrait relative" style={{ transformStyle: 'preserve-3d' }}>
                <div className="animate-float-hard border-4 border-void bg-brick-pink p-3 shadow-brutXl">
                  <img
                    src="/avatar.png"
                    alt="Syed Muhammad Hassaan"
                    className="block h-72 w-72 border-[3px] border-void object-cover sm:h-80 sm:w-80"
                  />
                  <div className="mt-3 flex items-center justify-between px-1 pb-1">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest">fig. 01 — the engineer</span>
                    <span className="h-3 w-3 rounded-full border-2 border-void bg-brick-yell" />
                  </div>
                </div>

                <StarBadge text="open to work" className="hero-badge absolute -right-12 -top-12 drop-shadow-[6px_6px_0_#141414]" />

                <div className="absolute -bottom-5 -left-8 rotate-[-6deg] border-[3px] border-void bg-white px-3 py-1.5 font-display text-xs uppercase shadow-brutSm">
                  Karachi, PK · UTC+5
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center pb-8">
          <a href="#skills" className="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-void/60 hover:text-void">
            keep scrolling
            <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={3} />
          </a>
        </div>
      </div>

      {/* Ticker strip */}
      <div className="hero-marquee">
        <Marquee items={marqueeItems} tone="dark" speed={24} />
      </div>
    </section>
  );
}
