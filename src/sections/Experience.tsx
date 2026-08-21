import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, ChevronRight, Code2, Brain, TrendingUp, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    company: 'Global Health',
    website: 'https://www.myglobalhealth.online',
    logo: '/logos/myglobalhealth-online.png',
    role: 'Lead Software Engineer',
    period: 'Dec 2025 - Present',
    location: 'County Dublin, Ireland (Remote)',
    level: 40,
    description:
      'Leading a production healthcare platform connecting patients with licensed clinicians across 6 markets, owning architecture, security, automation, and deployment.',
    achievements: [
      'Rebuilt the platform for 60+ clinicians, 210 services, 1,200+ patients, and 1,400+ appointments',
      'Shipped multilingual, multi-country journeys across Ireland, Portugal, Spain, Czechia, Romania, and Brazil',
      'Cut the same-day GP booking journey from 5 steps to 3, end to end',
      'Automated bookings, clinician assignment, and documents so 86.5% of bookings need no admin touch',
      'Ran 4,500+ automation executions in 90 days at a 0.4% failure rate across WhatsApp, email, and portal',
      'Implemented PHI controls, encryption, consent, and role-based access under GDPR and LGPD',
      'Reached 96-98 desktop Lighthouse performance across the platform',
    ],
    tech: ['TypeScript', 'PostgreSQL', 'Payments', 'Automation', 'PHI Security', 'GDPR/LGPD'],
    color: '#22c55e',
    icon: Code2,
  },
  {
    id: 2,
    company: 'Upwork',
    website: 'https://www.upwork.com',
    logo: '/logos/upwork-com.png',
    role: 'Freelance AI/ML Engineer & Web Developer',
    period: 'Jul 2024 - Present',
    location: 'Remote',
    level: 36,
    description:
      'Delivering AI products, full-stack apps, automation systems, and SEO-focused websites for clients from discovery to deployment.',
    achievements: [
      'Built a ChatGPT-style internal assistant with OCR extraction, RAG, async processing, and Docker deploys',
      'Developed AI voice/calling agents covering prompt design, model integration, APIs, and latency tuning',
      'Shipped backend services, APIs, database integrations, and background-processing workflows',
      'Improved client sites through technical SEO: structure, crawlability, indexing, metadata, and performance',
    ],
    tech: ['Python', 'LLMs', 'RAG', 'Docker', 'RabbitMQ', 'Technical SEO'],
    color: '#06b6d4',
    icon: Brain,
  },
  {
    id: 3,
    company: 'Endifaa | اندفاع',
    website: 'https://endifaa.com',
    logo: '/logos/endifaa-com.png',
    role: 'Full-Stack Developer',
    period: 'Oct 2025 - Jun 2026',
    location: 'Saudi Arabia (Remote)',
    level: 34,
    description:
      'Built and maintained the Endifaa sports academy platform with React, TypeScript, RTK Query, Django REST Framework, and PostgreSQL.',
    achievements: [
      'Developed multi-portal architecture for User, Academy, and Admin with role-based access control',
      'Integrated billing: subscriptions, invoices, cart, checkout, and payment logic',
      'Delivered bilingual EN/AR with RTL/LTR support, responsive layouts, and accessible UI',
      'Supported production readiness with Docker, secure API config, and PostgreSQL',
    ],
    tech: ['React', 'TypeScript', 'RTK Query', 'Django/DRF', 'PostgreSQL', 'Docker'],
    color: '#06b6d4',
    icon: Code2,
  },

  {
    id: 4,
    company: 'Jordy',
    website: 'https://hirejordy.com',
    logo: '/logos/hirejordy-com.png',
    role: 'Co-Founder',
    period: 'Mar 2026 - Present',
    location: 'Dubai, UAE (Hybrid)',
    level: 32,
    description:
      'Co-building Jordy, an AI outbound sales platform that finds prospects, researches them, and runs personalized campaigns that convert.',
    achievements: [
      'Built prospect discovery on LinkedIn search signals, ICP filters, and company-level research',
      'Shipped AI campaign generation for research, message personalization, and outreach sequencing',
      'Developed full-stack modules across frontend, APIs, campaign management, and analytics dashboards',
      'Drove product architecture, workflow automation, API integrations, and deployment-ready features',
    ],
    tech: ['React', 'TypeScript', 'LLMs', 'APIs', 'Automation', 'Analytics'],
    color: '#a855f7',
    icon: Brain,
  },
  {
    id: 5,
    company: 'Aertonic',
    website: 'https://aertonic.com',
    logo: '/logos/aertonic-com.svg',
    role: 'Founding Engineer',
    period: 'Nov 2025 - Present',
    location: 'Dubai, UAE (Remote)',
    level: 30,
    description:
      'Founding engineer on Aertonic, the intelligence layer for construction operations.',
    achievements: [
      'Building core product engineering from the ground up',
      'Shaping architecture and technical direction as an early team member',
    ],
    tech: ['TypeScript', 'AI', 'Product Engineering'],
    color: '#f97316',
    icon: TrendingUp,
  },
  {
    id: 6,
    company: 'Stackloom Technologies',
    website: '',
    logo: '',
    role: 'AI & Prompt Engineer',
    period: 'Jan 2025 - Sep 2025',
    location: 'Riyadh, Saudi Arabia (Remote)',
    level: 28,
    description:
      'Built conversational AI agents and prompt systems for voice and text booking assistants across 10+ clients weekly.',
    achievements: [
      'Delivered 30+ prompt sets, cutting average turnaround time by 40%',
      'Built backend and conversational workflows for booking agents at 95% booking accuracy',
      'Integrated MySQL, FastAPI, and messaging flows covering reschedules, cancellations, and failures',
    ],
    tech: ['FastAPI', 'MySQL', 'LLMs', 'Prompt Engineering', 'Voice AI'],
    color: '#a855f7',
    icon: Brain,
  },
  {
    id: 7,
    company: 'Quest Marketing Kuching',
    website: '',
    logo: '',
    role: 'Lead AI & Software Engineer',
    period: 'Mar 2024 - Dec 2024',
    location: 'Kuching, Malaysia (On-site)',
    level: 26,
    description:
      'Built and shipped a CRM mobile app with an AI sales assistant, published on Google Play and used by 50+ users.',
    achievements: [
      'Developed the CRM app with Flutter, Python, PHP, and MySQL, live on Google Play Store',
      'Built AI sales assistant and NLP chatbot features on OpenAI APIs, cutting manual work by 40%',
      'Created sales analytics dashboards and automated reporting for KPI monitoring and forecasting',
    ],
    tech: ['Flutter', 'Python', 'PHP', 'MySQL', 'OpenAI API', 'LLMs'],
    color: '#f97316',
    icon: Brain,
  },
];

const education = [
  {
    id: 4,
    company: 'Swinburne University of Technology',
    role: 'Bachelor of Computer Science (Dual Major: Data Science & AI)',
    period: 'Sep 2021 - Dec 2024',
    location: 'Sarawak, Malaysia',
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
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-heading',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        },
      );

      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', once: true },
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
          scrollTrigger: { trigger: timelineRef.current, start: 'top 70%', once: true },
        },
      );

      if (!reducedMotion && isDesktop) {
        gsap.to('.data-pulse', {
          y: '100%',
          duration: 2,
          repeat: -1,
          ease: 'none',
        });
      }
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
                  className={`exp-card relative flex flex-col lg:flex-row items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
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
                          style={
                            exp.logo
                              ? { background: 'rgba(255,255,255,0.92)' }
                              : { background: `linear-gradient(135deg, ${exp.color}40, ${exp.color}20)` }
                          }
                        >
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-9 h-9 object-contain"
                              loading="lazy"
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
                        {exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`inline-flex items-center gap-2 hover:text-cyan-400 transition-colors ${isLeft ? 'lg:flex-row-reverse' : ''
                              }`}
                          >
                            {exp.company}
                            <ExternalLink className="w-4 h-4 opacity-60" />
                          </a>
                        ) : (
                          exp.company
                        )}
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
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''
                            }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 mt-6 pt-6 border-t border-white/10' : 'max-h-0'
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
            { label: 'Companies', value: '7', color: '#06b6d4' },
            { label: 'Production Roles', value: '5', color: '#f97316' },
            { label: 'Level Reached', value: '40', color: '#22c55e' },
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
