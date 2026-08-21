import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading, SketchCard, SketchTag, Squiggle } from '@/components/ui/sketch';
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

// Small deterministic tilts so the grid never looks machine-aligned.
const TILTS = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-1', 'rotate-2'];

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
      gsap.fromTo(
        '.skills-intro',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        },
      );

      gsap.fromTo(
        '.skill-chip',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: 'back.out(1.8)',
          immediateRender: false,
          clearProps: 'transform',
          scrollTrigger: { trigger: cloudRef.current, start: 'top 85%', once: true },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="what i work with" title="the" accent="toolbox" className="skills-intro" />

        <div className="grid gap-10 md:grid-cols-5">
          {/* Left: the note about how I work */}
          <div className="md:col-span-2">
            <SketchCard tone="white" decoration="tape" className="skills-intro -rotate-1 p-6" solid>
              <h3 className="font-kalam text-2xl">how i work</h3>
              <Squiggle className="my-3 text-marker" />
              <p className="font-hand text-lg leading-relaxed text-ink-soft">
                Sketch the flow first, then build it. Python and TypeScript for most of
                it, TensorFlow and PyTorch when it needs to learn something, Docker when
                it needs to run somewhere that isn&apos;t my laptop.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[Brain, Code2, Database, Cloud].map((Icon, i) => (
                    <span
                      key={i}
                      className={`flex h-10 w-10 items-center justify-center rounded-blob border-2 border-ink bg-paper ${TILTS[i]}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                  ))}
                </div>
                <span className="font-hand text-base text-ink-faint">+ a dozen more</span>
              </div>
            </SketchCard>

            <div className="skills-intro mt-6 grid grid-cols-2 gap-4">
              <div className="jiggle flex aspect-square flex-col items-center justify-center rounded-blob border-[3px] border-ink bg-postit p-4 text-center shadow-sketch">
                <span className="font-kalam text-4xl">25+</span>
                <span className="font-hand text-base leading-tight">technologies</span>
              </div>
              <div className="jiggle flex aspect-square flex-col items-center justify-center rounded-blobAlt border-[3px] border-ink bg-white p-4 text-center shadow-sketch">
                <span className="font-kalam text-4xl text-marker">3</span>
                <span className="font-hand text-base leading-tight">core domains</span>
              </div>
            </div>
          </div>

          {/* Right: the chips */}
          <div className="md:col-span-3" ref={cloudRef}>
            <div className="mb-6 flex flex-wrap gap-2">
              {categories.map((cat, i) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-wobblySm border-2 border-ink px-3 py-1.5 font-hand text-base transition-all duration-100 hover:rotate-0 ${TILTS[i % TILTS.length]} ${isActive
                      ? 'bg-marker text-white shadow-sketchSm'
                      : 'bg-white text-ink shadow-sketchSm hover:bg-postit'
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
                    className={`skill-chip flex flex-col items-center justify-center gap-2 rounded-wobblyMd border-2 border-ink bg-white px-3 py-5 text-center shadow-sketchSoft transition-all duration-100 hover:rotate-0 hover:shadow-sketch ${TILTS[index % TILTS.length]}`}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-blob border-2 border-ink bg-paper">
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <span className="font-hand text-base leading-tight">{skill.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Pairings — scribbled connections */}
            <SketchCard tone="paper" className="mt-8 rotate-[0.6deg] p-5">
              <h4 className="mb-3 font-kalam text-xl">things that pair well</h4>
              <div className="flex flex-wrap gap-2">
                {pairings.map((pair) => (
                  <span
                    key={pair.from + pair.to}
                    className="inline-flex items-center gap-2 rounded-wobblySm border-2 border-dashed border-ink px-3 py-1.5 font-hand text-base"
                  >
                    {pair.from}
                    <span className="text-marker">→</span>
                    {pair.to}
                  </span>
                ))}
              </div>
            </SketchCard>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Git', 'REST APIs', 'RabbitMQ', 'FastAPI', 'Technical SEO'].map((extra, i) => (
                <SketchTag key={extra} className={i % 2 ? 'rotate-1' : '-rotate-1'}>
                  {extra}
                </SketchTag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
