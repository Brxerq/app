import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, ChevronRight, Code2, Brain, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    company: 'Aerlou',
    role: 'Frontend & AI Engineer',
    period: 'Dec 2025 - Present',
    location: 'Dubai (Remote)',
    level: 35,
    description:
      'Building AI-powered SaaS for automated customer communication across dealerships, healthcare, and real estate.',
    achievements: [
      'Developing frontend dashboards and AI workflows for call handling and smart routing',
      'Contributing to CRM integrations and appointment automation pipelines',
      'Enhancing scalable LLM-based communication architecture',
    ],
    tech: ['React', 'TypeScript', 'LLMs', 'CRM Integrations', 'Automation'],
    color: '#22c55e',
    icon: Brain,
    logo: '/aerlou.png',
  },
  {
    id: 2,
    company: 'Nashaa | نشء',
    role: 'Full-Stack Developer',
    period: 'Oct 2025 - Present',
    location: 'Saudi Arabia (Remote)',
    level: 32,
    description:
      'Shipped production features with React + TypeScript (RTK Query) and Django/DRF in a bilingual EN/AR platform.',
    achievements: [
      'Implemented full RTL/LTR experience with strong UX compliance',
      'Delivered scheduling and publishing workflows connected to backend services',
      'Built subscription, enrollment, and checkout flows aligned with billing/session rules',
      'Shipped reliably through Docker + PostgreSQL CI deployments',
    ],
    tech: ['React', 'TypeScript', 'RTK Query', 'Django/DRF', 'PostgreSQL', 'Docker'],
    color: '#06b6d4',
    icon: Code2,
    logo: '/nashaa.png',
  },
  {
    id: 3,
    company: 'Quest Marketing SDN BHD',
    role: 'Software Developer, Machine Learning Engineer',
    period: 'Feb 2024 - Dec 2024',
    location: 'Kuching, Malaysia',
    level: 26,
    description:
      'Developed cloud CRM for 50+ users and integrated AI assistant + NLP chatbot to improve operational speed and adoption.',
    achievements: [
      'Automated sales pipelines and reduced manual tasks by 30%',
      'Built real-time analytics dashboards with live KPI and forecasting views',
      'Integrated OpenAI/LLM assistant to reduce support response time by 40%',
      'Partnered with product and sales teams, improving user adoption by 25%',
    ],
    tech: ['Flutter', 'Python', 'PHP', 'MySQL', 'OpenAI API', 'LLMs'],
    color: '#a855f7',
    icon: Brain,
  },
];

const education = [
  {
    id: 4,
    company: 'Swinburne University of Technology',
    role: 'Bachelor of Computer Science (Dual Major: Data Science & AI)',
    period: 'Aug 2021 - Jan 2025',
    location: 'Australia',
    level: 20,
    description:
      'Relevant coursework includes Advanced Data Analytics, Applied Machine Learning, NLP, Big Data Architecture, and Statistics.',
    achievements: [
      'Dual major: Data Science and Artificial Intelligence',
      'Applied ML, NLP, and analytics-focused coursework',
      'Strong systems and data structure foundations',
    ],
    tech: ['Python', 'TensorFlow', 'R', 'SQL', 'Data Structures'],
    color: '#f97316',
    icon: Code2,
  },
  {
    id: 5,
    company: 'Swinburne University of Technology Sarawak Campus',
    role: 'Foundation degree, Information Technology/Multimedia',
    period: 'Jan 2020 - Jun 2021',
    location: 'Sarawak, Malaysia',
    level: 12,
    description:
      'Foundation program in Information Technology and Multimedia with core computing and development fundamentals.',
    achievements: [
      'Foundation in IT and Multimedia',
      'Built core programming and systems fundamentals',
      'Prepared pathway into Computer Science degree track',
    ],
    tech: ['Programming Fundamentals', 'Multimedia', 'IT Basics'],
    color: '#06b6d4',
    icon: Code2,
  },
];

const certifications = [
  {
    id: 1,
    title: 'Getting Started with AI on Jetson Nano',
    issuer: 'NVIDIA',
    date: 'Issued Aug 2025',
    credentialId: 'ATW9d0zzSQqrV32nOyQJQA',
    skills: ['PyTorch', 'Fine Tuning', 'Image Classification', 'CNN', 'Transfer Learning'],
  },
  {
    id: 2,
    title: 'Building RAG Agents with LLMs',
    issuer: 'NVIDIA',
    date: 'Issued Aug 2025',
    credentialId: '',
    skills: ['RAG', 'LLMs', 'Prompt Engineering'],
  },
  {
    id: 3,
    title: 'Cisco Certified Network Associate Routing and Switching (CCNA)',
    issuer: 'Cisco',
    date: 'Issued Nov 2021',
    credentialId: '',
    skills: ['Cisco Networking', 'Routing', 'Switching Protocols', 'Access Security'],
  },
  {
    id: 4,
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    date: 'Issued Jul 2022',
    credentialId: 'HSB VSC UY2',
    skills: ['Digital Marketing', 'Social Media'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-heading',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        },
      );

      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        },
      );

      gsap.fromTo(
        '.exp-card',
        { x: (i) => (i % 2 === 0 ? -100 : 100), opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
          },
        },
      );

      gsap.to('.data-pulse', {
        y: '100%',
        duration: 2,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-shell relative min-h-screen py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="exp-heading flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white">
              MISSION <span className="text-gradient">LOG</span>
            </h2>
          </div>
          <div className="neon-divider w-32" />
        </div>

        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block">
            <div className="timeline-line absolute inset-0 bg-gradient-to-b from-purple-500 via-cyan-500 to-orange-500 origin-top" />
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="data-pulse absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                style={{
                  background: experiences[i]?.color || '#a855f7',
                  boxShadow: `0 0 20px ${experiences[i]?.color || '#a855f7'}`,
                  top: `${i * 33}%`,
                }}
              />
            ))}
          </div>

          <div className="space-y-12 lg:space-y-24">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isExpanded = expandedId === exp.id;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`exp-card relative flex flex-col lg:flex-row items-center gap-8 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isLeft ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                    <div
                      className="glass rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-500 hover:border-opacity-50"
                      style={{ borderColor: `${exp.color}40` }}
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden"
                          style={{ background: `linear-gradient(135deg, ${exp.color}40, ${exp.color}20)` }}
                        >
                          {'logo' in exp && exp.logo ? (
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-10 h-10 object-contain"
                            />
                          ) : (
                            <Icon className="w-7 h-7" style={{ color: exp.color }} />
                          )}
                        </div>
                        <div
                          className="px-4 py-2 rounded-full font-orbitron font-bold text-sm"
                          style={{ background: `${exp.color}20`, color: exp.color }}
                        >
                          LV. {exp.level}
                        </div>
                      </div>

                      <h3 className="font-orbitron font-bold text-2xl text-white mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-cyan-400 font-rajdhani text-lg mb-4">
                        {exp.role}
                      </p>

                      <div className={`flex flex-wrap gap-4 mb-4 text-sm text-slate-400 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 mb-4 ${isLeft ? 'lg:justify-end' : ''}`}>
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-orbitron bg-white/5 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        className={`flex items-center gap-2 text-sm transition-all duration-300 ${isLeft ? 'lg:ml-auto' : ''}`}
                        style={{ color: exp.color }}
                      >
                        <span>{isExpanded ? 'COLLAPSE' : 'VIEW DETAILS'}</span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isExpanded ? 'max-h-96 mt-6 pt-6 border-t border-white/10' : 'max-h-0'
                        }`}
                      >
                        <h4 className="font-orbitron text-sm text-slate-400 mb-4">
                          KEY ACHIEVEMENTS
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-slate-300"
                            >
                              <TrendingUp
                                className="w-5 h-5 flex-shrink-0 mt-0.5"
                                style={{ color: exp.color }}
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-dark z-10"
                    style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}` }} />

                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="font-orbitron text-xl text-cyan-400 mb-6">TRAINING ARCHIVE</h3>
          <div className="grid gap-6">
            {education.map((edu) => (
              <div key={edu.id} className="glass rounded-2xl p-6 border border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h4 className="font-orbitron text-lg text-white">{edu.company}</h4>
                  <span className="text-xs font-orbitron px-3 py-1 rounded-full" style={{ background: `${edu.color}20`, color: edu.color }}>
                    {edu.period}
                  </span>
                </div>
                <p className="text-cyan-400 mb-2">{edu.role}</p>
                <p className="text-slate-400 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="font-orbitron text-xl text-cyan-400 mb-6">SKILL LICENSES</h3>
          <div className="grid gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="glass rounded-2xl p-6 border border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h4 className="font-orbitron text-lg text-white">{cert.title}</h4>
                  <span className="text-xs font-orbitron px-3 py-1 rounded-full bg-white/10 text-cyan-300">
                    {cert.date}
                  </span>
                </div>
                <p className="text-purple-300 text-sm mb-2">{cert.issuer}</p>
                {cert.credentialId && (
                  <p className="text-slate-400 text-sm mb-3">Credential ID: {cert.credentialId}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 rounded-full text-xs font-orbitron bg-white/5 text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Years Active', value: '2+', color: '#a855f7' },
            { label: 'Companies', value: '3', color: '#06b6d4' },
            { label: 'Production Roles', value: '3', color: '#f97316' },
            { label: 'Level Reached', value: '35', color: '#22c55e' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div
                className="font-orbitron font-black text-3xl mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/3 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
    </section>
  );
}
