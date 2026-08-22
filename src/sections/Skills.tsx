import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading, BrutalCard, Sticker } from '@/components/ui/brick';
import {
  Code2,
  Database,
  Cloud,
  Layers,
  Container,
  Terminal,
  Brain,
  Eye,
  MessageSquare,
  BarChart3,
  Wrench,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Python', icon: Terminal, category: 'Languages' },
  { name: 'TypeScript', icon: Code2, category: 'Languages' },
  { name: 'C++', icon: Terminal, category: 'Languages' },
  { name: 'Dart', icon: Layers, category: 'Languages' },
  { name: 'TensorFlow', icon: Brain, category: 'AI / Data' },
  { name: 'PyTorch', icon: Brain, category: 'AI / Data' },
  { name: 'OpenCV', icon: Eye, category: 'AI / Data' },
  { name: 'LLMs / NLP', icon: MessageSquare, category: 'AI / Data' },
  { name: 'React', icon: Code2, category: 'Frameworks' },
  { name: 'Django / DRF', icon: Database, category: 'Frameworks' },
  { name: 'Flutter', icon: Layers, category: 'Frameworks' },
  { name: 'PostgreSQL', icon: Database, category: 'Backend' },
  { name: 'MySQL', icon: Database, category: 'Backend' },
  { name: 'Docker', icon: Container, category: 'Tools' },
  { name: 'AWS', icon: Cloud, category: 'Tools' },
  { name: 'Hugging Face', icon: BarChart3, category: 'Tools' },
];

const categories = ['everything', 'Languages', 'AI / Data', 'Frameworks', 'Backend', 'Tools'];

const chipTones = [
  'hover:bg-brick-yell',
  'hover:bg-brick-pink',
  'hover:bg-brick-lime',
  'hover:bg-brick-blue',
];

const pairings = [
  { from: 'React + TypeScript', to: 'RTK Query' },
  { from: 'RTK Query', to: 'Django / DRF' },
  { from: 'LLMs / NLP', to: 'AI assistants' },
  { from: 'OpenCV', to: 'retail vision' },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('everything');

  const filteredSkills =
    activeCategory === 'everything' ? skills : skills.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header slides across like a banner.
      gsap.fromTo(
        '.brut-heading',
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        },
      );

      // Chips pop in with elastic overshoot.
      gsap.fromTo(
        '.skill-chip',
        { scale: 0, rotate: () => gsap.utils.random(-30, 30), opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'back.out(2)',
          stagger: 0.035,
          immediateRender: false,
          clearProps: 'transform',
          scrollTrigger: { trigger: cloudRef.current, start: 'top 82%', once: true },
        },
      );

      // Side panel drops in.
      gsap.fromTo(
        '.skills-panel',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.skills-panel', start: 'top 85%', once: true },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="what i work with" title="the" accent="arsenal" accentTone="pink">
          Sketch the flow first, then build it. Python and TypeScript for most of it,
          TensorFlow and PyTorch when it needs to learn something, Docker when it needs
          to run somewhere that isn't my laptop.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left: manifesto + counters */}
          <div className="lg:col-span-2">
            <BrutalCard tone="dark" className="skills-panel p-6 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border-[3px] border-white bg-brick-yell text-void">
                  <Wrench className="h-5 w-5" strokeWidth={3} />
                </span>
                <h3 className="text-xl text-brick-yell">how i work</h3>
              </div>
              <ul className="mt-5 space-y-3 font-mono text-sm uppercase tracking-wide text-white/80">
                <li className="border-l-[3px] border-brick-yell pl-3">01 — sketch the system</li>
                <li className="border-l-[3px] border-brick-pink pl-3">02 — ship the ugly version</li>
                <li className="border-l-[3px] border-brick-lime pl-3">03 — measure what happened</li>
                <li className="border-l-[3px] border-brick-blue pl-3">04 — make it fast, then pretty</li>
              </ul>

              <div className="mt-6 border-t-[3px] border-dashed border-white/25 pt-4 font-mono text-xs uppercase tracking-widest text-white/50">
                25+ technologies · 3 core domains · zero fear of legacy code
              </div>
            </BrutalCard>

            {/* Marquee rows running opposite directions */}
            <div className="mt-8 space-y-3 overflow-hidden">
              <div className="marquee-mask border-[3px] border-void bg-brick-pink py-2">
                <div className="marquee-track" style={{ animation: 'marquee-scroll 18s linear infinite' }}>
                  {[0, 1].map((n) => (
                    <span key={n} className="flex shrink-0 items-center whitespace-nowrap px-2 font-display text-sm uppercase" aria-hidden={n === 1}>
                      {['Python', 'TypeScript', 'PyTorch', 'Docker', 'React'].map((s) => (
                        <span key={s} className="mx-4">{s} ✦</span>
                      ))}
                    </span>
                  ))}
                </div>
              </div>
              <div className="marquee-mask border-[3px] border-void bg-brick-lime py-2">
                <div className="marquee-track" style={{ animation: 'marquee-scroll 22s linear infinite reverse' }}>
                  {[0, 1].map((n) => (
                    <span key={n} className="flex shrink-0 items-center whitespace-nowrap px-2 font-display text-sm uppercase" aria-hidden={n === 1}>
                      {['TensorFlow', 'PostgreSQL', 'AWS', 'FastAPI', 'OpenCV'].map((s) => (
                        <span key={s} className="mx-4">{s} ✦</span>
                      ))}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: filterable chip wall */}
          <div className="lg:col-span-3" ref={cloudRef}>
            <div className="mb-6 flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`brut-press border-[3px] border-void px-3 py-1.5 font-display text-xs uppercase shadow-brutSm ${
                      isActive ? 'bg-void text-brick-yell' : 'bg-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {filteredSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`skill-chip brut-press flex items-center gap-3 border-[3px] border-void bg-white p-3 shadow-brut transition-colors ${chipTones[index % chipTones.length]}`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border-[3px] border-void bg-bone">
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <span className="font-display text-xs uppercase leading-tight">{skill.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Pairings */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {pairings.map((pair) => (
                <Sticker key={pair.from + pair.to} tone="white" className="normal-case">
                  <span className="font-mono text-xs">{pair.from}</span>
                  <span className="mx-2 font-bold">→</span>
                  <span className="font-mono text-xs">{pair.to}</span>
                </Sticker>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Git', 'REST APIs', 'RabbitMQ', 'FastAPI', 'Technical SEO'].map((extra) => (
                <Sticker key={extra} tone="primary">{extra}</Sticker>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
