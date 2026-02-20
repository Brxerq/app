import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Database,
  Cloud,
  Layers,
  Container,
  Terminal,
  Cpu,
  Brain,
  Eye,
  MessageSquare,
  BarChart3,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Python', icon: Terminal, level: 95, color: '#06b6d4', category: 'Languages' },
  { name: 'TypeScript', icon: Code2, level: 86, color: '#38bdf8', category: 'Languages' },
  { name: 'C++', icon: Terminal, level: 82, color: '#f97316', category: 'Languages' },
  { name: 'Dart', icon: Layers, level: 88, color: '#22c55e', category: 'Languages' },
  { name: 'TensorFlow', icon: Brain, level: 90, color: '#f97316', category: 'AI/Data' },
  { name: 'PyTorch', icon: Cpu, level: 85, color: '#a855f7', category: 'AI/Data' },
  { name: 'OpenCV', icon: Eye, level: 88, color: '#22c55e', category: 'AI/Data' },
  { name: 'LLMs / NLP', icon: MessageSquare, level: 88, color: '#f472b6', category: 'AI/Data' },
  { name: 'React', icon: Code2, level: 86, color: '#06b6d4', category: 'Frameworks' },
  { name: 'Django / DRF', icon: Database, level: 84, color: '#a855f7', category: 'Frameworks' },
  { name: 'Flutter', icon: Layers, level: 90, color: '#06b6d4', category: 'Frameworks' },
  { name: 'PostgreSQL', icon: Database, level: 83, color: '#22c55e', category: 'Backend' },
  { name: 'MySQL', icon: Database, level: 87, color: '#a855f7', category: 'Backend' },
  { name: 'Docker', icon: Container, level: 82, color: '#06b6d4', category: 'Tools' },
  { name: 'AWS', icon: Cloud, level: 78, color: '#f97316', category: 'Tools' },
  { name: 'Hugging Face', icon: BarChart3, level: 80, color: '#f59e0b', category: 'Tools' },
];

const categories = ['All', 'Languages', 'AI/Data', 'Frameworks', 'Backend', 'Tools'];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-heading',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        '.skills-bio',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        '.skill-orb',
        { scale: 0.92, y: 20, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.05,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: cloudRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        '.category-btn',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-shell relative min-h-screen py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="skills-heading flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white">
              THE <span className="text-gradient">ARSENAL</span>
            </h2>
          </div>
          <div className="neon-divider w-32" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="skills-bio glass rounded-2xl p-8 mb-8">
              <h3 className="font-orbitron font-bold text-2xl text-cyan-400 mb-4">
                CLASS SPECIALIZATION
              </h3>
              <p className="text-slate-200/95 leading-8 mb-6">
                Core stack from resume: Python, TypeScript, TensorFlow, PyTorch,
                OpenCV, React, Django/DRF, Flutter, PostgreSQL, MySQL, and Docker.
                Strong focus on LLM-powered product features and production ML delivery.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[Brain, Code2, Database, Cloud].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center border-2 border-dark"
                    >
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-400">
                  +15 more technologies
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-6 text-center">
                <div className="font-orbitron font-black text-4xl text-purple-400 mb-2">
                  25+
                </div>
                <div className="text-sm text-slate-400">Core Technologies</div>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <div className="font-orbitron font-black text-4xl text-cyan-400 mb-2">
                  3
                </div>
                <div className="text-sm text-slate-400">Core Domains</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3" ref={cloudRef}>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`category-btn px-4 py-2 rounded-lg font-orbitron text-sm transition-all duration-300 ${activeCategory === cat
                      ? 'bg-purple-500 text-white'
                      : 'glass text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {filteredSkills.map((skill, index) => {
                const Icon = skill.icon;
                const isHovered = hoveredSkill === skill.name;

                return (
                  <div
                    key={skill.name}
                    className="skill-orb relative group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div
                      className={`relative glass rounded-2xl p-6 aspect-square flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${isHovered ? 'scale-110 border-glow-purple' : ''
                        }`}
                      style={{
                        borderColor: isHovered ? skill.color : undefined,
                      }}
                    >
                      <Icon
                        className="w-10 h-10 mb-3 transition-all duration-300"
                        style={{ color: skill.color }}
                      />
                      <span className="font-orbitron text-xs text-center text-slate-300">
                        {skill.name}
                      </span>

                      <svg
                        className="absolute inset-0 w-full h-full -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="2"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={skill.color}
                          strokeWidth="2"
                          strokeDasharray={`${skill.level * 2.83} 283`}
                          strokeLinecap="round"
                          className={`transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                      </svg>
                    </div>

                    <div
                      className={`absolute -top-12 left-1/2 -translate-x-1/2 glass rounded-lg px-3 py-2 whitespace-nowrap z-20 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                        }`}
                    >
                      <div className="font-orbitron text-xs text-cyan-400">
                        {skill.level}% MASTERY
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 glass rounded-2xl p-6">
              <h4 className="font-orbitron text-sm text-slate-400 mb-4">
                TECHNOLOGY SYNERGIES
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { from: 'React + TS', to: 'RTK Query', color: '#06b6d4' },
                  { from: 'RTK Query', to: 'Django/DRF APIs', color: '#a855f7' },
                  { from: 'LLMs / NLP', to: 'AI Assistant', color: '#f472b6' },
                  { from: 'OpenCV', to: 'Retail Vision', color: '#22c55e' },
                ].map((conn, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5"
                  >
                    <span className="text-xs" style={{ color: conn.color }}>
                      {conn.from}
                    </span>
                    <span className="text-slate-500">-&gt;</span>
                    <span className="text-xs text-slate-300">{conn.to}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  );
}
