import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading, SketchCard, SketchTag, Squiggle } from '@/components/ui/sketch';
import { asset } from '@/lib/utils';
import { Calendar, MapPin, ChevronRight, ExternalLink, Check } from 'lucide-react';

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
  },
  {
    id: 2,
    company: 'Upwork',
    website: 'https://www.upwork.com',
    logo: '/logos/upwork-com.png',
    role: 'Freelance AI/ML Engineer & Web Developer',
    period: 'Jul 2024 - Present',
    location: 'Remote',
    description:
      'Delivering AI products, full-stack apps, automation systems, and SEO-focused websites for clients from discovery to deployment.',
    achievements: [
      'Built a ChatGPT-style internal assistant with OCR extraction, RAG, async processing, and Docker deploys',
      'Developed AI voice/calling agents covering prompt design, model integration, APIs, and latency tuning',
      'Shipped backend services, APIs, database integrations, and background-processing workflows',
      'Improved client sites through technical SEO: structure, crawlability, indexing, metadata, and performance',
    ],
    tech: ['Python', 'LLMs', 'RAG', 'Docker', 'RabbitMQ', 'Technical SEO'],
  },
  {
    id: 3,
    company: 'Endifaa | اندفاع',
    website: 'https://endifaa.com',
    logo: '/logos/endifaa-com.png',
    role: 'Full-Stack Developer',
    period: 'Oct 2025 - Jun 2026',
    location: 'Saudi Arabia (Remote)',
    description:
      'Built and maintained the Endifaa sports academy platform with React, TypeScript, RTK Query, Django REST Framework, and PostgreSQL.',
    achievements: [
      'Developed multi-portal architecture for User, Academy, and Admin with role-based access control',
      'Integrated billing: subscriptions, invoices, cart, checkout, and payment logic',
      'Delivered bilingual EN/AR with RTL/LTR support, responsive layouts, and accessible UI',
      'Supported production readiness with Docker, secure API config, and PostgreSQL',
    ],
    tech: ['React', 'TypeScript', 'RTK Query', 'Django/DRF', 'PostgreSQL', 'Docker'],
  },
  {
    id: 4,
    company: 'Jordy',
    website: 'https://hirejordy.com',
    logo: '/logos/hirejordy-com.png',
    role: 'Co-Founder',
    period: 'Mar 2026 - Present',
    location: 'Dubai, UAE (Hybrid)',
    description:
      'Co-building Jordy, an AI outbound sales platform that finds prospects, researches them, and runs personalized campaigns that convert.',
    achievements: [
      'Built prospect discovery on LinkedIn search signals, ICP filters, and company-level research',
      'Shipped AI campaign generation for research, message personalization, and outreach sequencing',
      'Developed full-stack modules across frontend, APIs, campaign management, and analytics dashboards',
      'Drove product architecture, workflow automation, API integrations, and deployment-ready features',
    ],
    tech: ['React', 'TypeScript', 'LLMs', 'APIs', 'Automation', 'Analytics'],
  },
  {
    id: 5,
    company: 'Aertonic',
    website: 'https://aertonic.com',
    logo: '/logos/aertonic-com.svg',
    role: 'Founding Engineer',
    period: 'Nov 2025 - Present',
    location: 'Dubai, UAE (Remote)',
    description:
      'Founding engineer on Aertonic, the intelligence layer for construction operations.',
    achievements: [
      'Building core product engineering from the ground up',
      'Shaping architecture and technical direction as an early team member',
    ],
    tech: ['TypeScript', 'AI', 'Product Engineering'],
  },
  {
    id: 6,
    company: 'Stackloom Technologies',
    website: '',
    logo: '',
    role: 'AI & Prompt Engineer',
    period: 'Jan 2025 - Sep 2025',
    location: 'Riyadh, Saudi Arabia (Remote)',
    description:
      'Built conversational AI agents and prompt systems for voice and text booking assistants across 10+ clients weekly.',
    achievements: [
      'Delivered 30+ prompt sets, cutting average turnaround time by 40%',
      'Built backend and conversational workflows for booking agents at 95% booking accuracy',
      'Integrated MySQL, FastAPI, and messaging flows covering reschedules, cancellations, and failures',
    ],
    tech: ['FastAPI', 'MySQL', 'LLMs', 'Prompt Engineering', 'Voice AI'],
  },
  {
    id: 7,
    company: 'Quest Marketing Kuching',
    website: '',
    logo: '',
    role: 'Lead AI & Software Engineer',
    period: 'Mar 2024 - Dec 2024',
    location: 'Kuching, Malaysia (On-site)',
    description:
      'Built and shipped a CRM mobile app with an AI sales assistant, published on Google Play and used by 50+ users.',
    achievements: [
      'Developed the CRM app with Flutter, Python, PHP, and MySQL, live on Google Play Store',
      'Built AI sales assistant and NLP chatbot features on OpenAI APIs, cutting manual work by 40%',
      'Created sales analytics dashboards and automated reporting for KPI monitoring and forecasting',
    ],
    tech: ['Flutter', 'Python', 'PHP', 'MySQL', 'OpenAI API', 'LLMs'],
  },
];

const education = [
  {
    id: 1,
    school: 'Swinburne University of Technology',
    degree: 'Bachelor of Computer Science (Dual Major: Data Science & AI)',
    period: 'Sep 2021 - Dec 2024',
    description:
      'Coursework in Advanced Data Analytics, Applied Machine Learning, NLP, Big Data Architecture, and Statistics.',
  },
  {
    id: 2,
    school: 'Swinburne University of Technology, Sarawak',
    degree: 'Foundation, Information Technology / Multimedia',
    period: 'Jan 2020 - Jun 2021',
    description:
      'Foundation program covering core computing, programming, and development fundamentals.',
  },
];

const certifications = [
  {
    id: 1,
    title: 'Getting Started with AI on Jetson Nano',
    issuer: 'NVIDIA',
    date: 'Aug 2025',
    credentialId: 'ATW9d0zzSQqrV32nOyQJQA',
    skills: ['PyTorch', 'Fine Tuning', 'Image Classification', 'CNN', 'Transfer Learning'],
  },
  {
    id: 2,
    title: 'Building RAG Agents with LLMs',
    issuer: 'NVIDIA',
    date: 'Aug 2025',
    credentialId: '',
    skills: ['RAG', 'LLMs', 'Prompt Engineering'],
  },
  {
    id: 3,
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    date: 'Nov 2021',
    credentialId: '',
    skills: ['Cisco Networking', 'Routing', 'Switching Protocols', 'Access Security'],
  },
  {
    id: 4,
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    date: 'Jul 2022',
    credentialId: 'HSB VSC UY2',
    skills: ['Digital Marketing', 'Social Media'],
  },
];

const TILTS = ['-1.2deg', '0.8deg', '-0.6deg', '1.1deg'];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-card',
        { x: -24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', once: true },
        },
      );

      gsap.fromTo(
        '.archive-card',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.archive-grid', start: 'top 85%', once: true },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="where i've been" title="the" accent="history">
          Seven teams, five production roles, one habit: sketch it, ship it, then
          measure whether it actually helped.
        </SectionHeading>

        {/* Timeline — a pencil line drawn down the margin */}
        <div ref={timelineRef} className="relative pl-8 sm:pl-12">
          <div className="absolute bottom-4 left-[9px] top-4 w-0 border-l-[3px] border-dashed border-ink/40 sm:left-[17px]" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className="exp-card relative">
                  {/* Hand-drawn dot on the line */}
                  <span
                    className="absolute -left-8 top-7 h-5 w-5 rounded-blob border-[3px] border-ink bg-marker sm:-left-12"
                    aria-hidden
                  />

                  <SketchCard
                    tone="white"
                    className="p-5 transition-transform duration-100 sm:p-7"
                  >
                    <div style={{ transform: `rotate(${TILTS[index % TILTS.length]})` }}>
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                        className="w-full text-left"
                        aria-expanded={isExpanded}
                      >
                        <div className="mb-3 flex items-start gap-4">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-wobblySm border-2 border-ink bg-paper">
                            {exp.logo ? (
                              <img
                                src={asset(exp.logo)}
                                alt=""
                                className="h-7 w-7 object-contain"
                                loading="lazy"
                              />
                            ) : (
                              <span className="font-kalam text-xl">{exp.company[0]}</span>
                            )}
                          </span>

                          <div className="min-w-0">
                            <h3 className="font-kalam text-2xl leading-tight">
                              {exp.company}
                            </h3>
                            <p className="font-hand text-lg text-marker">{exp.role}</p>
                          </div>
                        </div>

                        <div className="mb-3 flex flex-wrap gap-x-5 gap-y-1 font-hand text-base text-ink-faint">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" strokeWidth={2.5} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" strokeWidth={2.5} />
                            {exp.location}
                          </span>
                        </div>

                        <p className="font-hand text-lg leading-relaxed text-ink-soft">
                          {exp.description}
                        </p>
                      </button>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <SketchTag key={tech} tone="paper">
                            {tech}
                          </SketchTag>
                        ))}
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                          className="flex items-center gap-1 font-hand text-lg text-pen"
                        >
                          {isExpanded ? 'hide the details' : 'what i actually did'}
                          <ChevronRight
                            className={`h-4 w-4 transition-transform duration-100 ${isExpanded ? 'rotate-90' : ''}`}
                            strokeWidth={3}
                          />
                        </button>

                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 font-hand text-lg text-ink-faint hover:text-marker hover:line-through"
                          >
                            visit site
                            <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
                          </a>
                        )}
                      </div>

                      {isExpanded && (
                        <ul className="mt-5 space-y-2.5 border-t-[3px] border-dashed border-ink/30 pt-5">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-3">
                              <Check
                                className="mt-1 h-4 w-4 shrink-0 text-marker"
                                strokeWidth={3}
                              />
                              <span className="font-hand text-lg leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </SketchCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* School + certificates */}
        <div className="archive-grid mt-20 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-kalam text-3xl">
              <span className="squiggle-underline-pen">school</span>
            </h3>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <SketchCard
                  key={edu.id}
                  tone="paper"
                  className="archive-card p-5"
                >
                  <div style={{ transform: `rotate(${TILTS[i % TILTS.length]})` }}>
                    <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                      <h4 className="font-kalam text-xl leading-tight">{edu.school}</h4>
                      <SketchTag tone="note">{edu.period}</SketchTag>
                    </div>
                    <p className="font-hand text-lg text-marker">{edu.degree}</p>
                    <p className="mt-2 font-hand text-base text-ink-soft">{edu.description}</p>
                  </div>
                </SketchCard>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-kalam text-3xl">
              <span className="squiggle-underline-pen">certificates</span>
            </h3>
            <div className="space-y-5">
              {certifications.map((cert, i) => (
                <SketchCard key={cert.id} tone="white" className="archive-card p-5">
                  <div style={{ transform: `rotate(${TILTS[(i + 1) % TILTS.length]})` }}>
                    <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                      <h4 className="font-kalam text-xl leading-tight">{cert.title}</h4>
                      <SketchTag tone="aged">{cert.date}</SketchTag>
                    </div>
                    <p className="font-hand text-lg text-pen">{cert.issuer}</p>
                    {cert.credentialId && (
                      <p className="font-hand text-sm text-ink-faint">
                        id: {cert.credentialId}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <SketchTag key={skill} tone="paper">
                          {skill}
                        </SketchTag>
                      ))}
                    </div>
                  </div>
                </SketchCard>
              ))}
            </div>
          </div>
        </div>

        <Squiggle className="mx-auto mt-16 max-w-sm text-ink/40" />

        {/* Counted on fingers */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { label: 'years active', value: '2+' },
            { label: 'teams', value: '7' },
            { label: 'production roles', value: '5' },
            { label: 'countries shipped to', value: '6' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="jiggle flex flex-col items-center justify-center rounded-blob border-[3px] border-ink bg-white p-5 text-center shadow-sketch"
              style={{ transform: `rotate(${TILTS[i % TILTS.length]})` }}
            >
              <span className="font-kalam text-3xl">{stat.value}</span>
              <span className="font-hand text-base leading-tight text-ink-soft">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
