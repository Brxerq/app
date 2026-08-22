import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading, BrutalCard, Sticker } from '@/components/ui/brick';
import { Calendar, MapPin, ChevronRight, ExternalLink, Plus } from 'lucide-react';

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
    tone: 'bg-brick-yell',
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
    tone: 'bg-brick-pink',
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
    tone: 'bg-brick-lime',
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
    tone: 'bg-brick-blue',
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
    tone: 'bg-brick-orange',
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
    tone: 'bg-brick-yell',
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
    tone: 'bg-brick-pink',
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
    description: 'Foundation program covering core computing, programming, and development fundamentals.',
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

const counters = [
  { value: 2, suffix: '+', label: 'years active' },
  { value: 7, suffix: '', label: 'teams' },
  { value: 5, suffix: '', label: 'production roles' },
  { value: 6, suffix: '', label: 'countries shipped to' },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header banner slide.
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

      // Cards alternate in from left / right.
      document.querySelectorAll<HTMLElement>('.exp-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: i % 2 === 0 ? -90 : 90, opacity: 0, rotate: i % 2 === 0 ? -3 : 3 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.55,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%', once: true },
          },
        );
      });

      // Timeline rail fills as you scroll — scrubbed.
      if (progressRef.current && timelineRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top center',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 60%',
              scrub: 0.6,
            },
          },
        );
      }

      // Bottom counters roll up.
      ScrollTrigger.create({
        trigger: '.exp-counters',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          document.querySelectorAll<HTMLElement>('.counter-number').forEach((el) => {
            const end = parseFloat(el.dataset.value || '0');
            const obj = { val: 0 };
            gsap.to(obj, {
              val: end,
              duration: 1.2,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = String(Math.round(obj.val));
              },
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="where i've been" title="the" accent="record" accentTone="blue">
          Seven teams, five production roles, one habit: sketch it, ship it, then
          measure whether it actually helped.
        </SectionHeading>

        {/* Timeline */}
        <div ref={timelineRef} className="relative pl-8 sm:pl-14">
          {/* Rail */}
          <div className="absolute bottom-4 left-[11px] top-4 w-[6px] border-x-[3px] border-void bg-transparent sm:left-[21px]">
            <div ref={progressRef} className="h-full w-full bg-brick-blue" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => {
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className="exp-card relative">
                  {/* Node */}
                  <span
                    className={`absolute -left-8 top-7 flex h-7 w-7 items-center justify-center border-[3px] border-void ${exp.tone} sm:-left-14`}
                    aria-hidden
                  >
                    <Plus className="h-3.5 w-3.5" strokeWidth={4} />
                  </span>

                  <BrutalCard tone="white" className="p-5 sm:p-7">
                    {/* Company strip */}
                    <div className={`mb-4 flex items-center gap-3 border-[3px] border-void p-2 ${exp.tone}`}>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden border-[3px] border-void bg-white">
                        {exp.logo ? (
                          <img src={exp.logo} alt="" className="h-7 w-7 object-contain" loading="lazy" />
                        ) : (
                          <span className="font-display text-lg">{exp.company[0]}</span>
                        )}
                      </span>
                      <div className="min-w-0">
                        <h3 className="truncate text-xl leading-tight">{exp.company}</h3>
                        <p className="truncate font-mono text-xs font-bold uppercase tracking-wider">{exp.role}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                      className="w-full text-left"
                      aria-expanded={isExpanded}
                    >
                      <div className="mb-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs uppercase tracking-wider text-void/60">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" strokeWidth={3} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" strokeWidth={3} />
                          {exp.location}
                        </span>
                      </div>

                      <p className="font-medium leading-relaxed text-void/80">{exp.description}</p>
                    </button>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Sticker key={tech} tone="white" className="text-[10px]">{tech}</Sticker>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                        className="brut-press flex items-center gap-1 border-[3px] border-void bg-brick-yell px-3 py-1.5 font-display text-xs uppercase shadow-brutSm"
                      >
                        {isExpanded ? 'hide the receipts' : 'what i did there'}
                        <ChevronRight
                          className={`h-3.5 w-3.5 transition-transform duration-100 ${isExpanded ? 'rotate-90' : ''}`}
                          strokeWidth={3.5}
                        />
                      </button>

                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-void/60 underline decoration-[3px] underline-offset-4 hover:text-void"
                        >
                          visit site
                          <ExternalLink className="h-3.5 w-3.5" strokeWidth={3} />
                        </a>
                      )}
                    </div>

                    {isExpanded && (
                      <ul className="mt-5 space-y-2.5 border-t-[3px] border-dashed border-void/30 pt-5">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start gap-3">
                            <span className="mt-1.5 h-3 w-3 shrink-0 border-2 border-void bg-brick-lime" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </BrutalCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* School + certificates */}
        <div className="archive-grid mt-20 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-5 inline-block border-[3px] border-void bg-brick-lime px-4 py-1.5 text-2xl shadow-brutSm">
              school
            </h3>
            <div className="space-y-5">
              {education.map((edu) => (
                <BrutalCard key={edu.id} tone="white" className="archive-card p-5">
                  <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                    <h4 className="text-base leading-snug">{edu.school}</h4>
                    <Sticker tone="primary" className="text-[10px]">{edu.period}</Sticker>
                  </div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-void/70">{edu.degree}</p>
                  <p className="mt-2 text-sm leading-relaxed text-void/70">{edu.description}</p>
                </BrutalCard>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 inline-block border-[3px] border-void bg-brick-pink px-4 py-1.5 text-2xl shadow-brutSm">
              certificates
            </h3>
            <div className="space-y-5">
              {certifications.map((cert) => (
                <BrutalCard key={cert.id} tone="white" className="archive-card p-5">
                  <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
                    <h4 className="text-base leading-snug">{cert.title}</h4>
                    <Sticker tone="dark" className="text-[10px]">{cert.date}</Sticker>
                  </div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-void/70">{cert.issuer}</p>
                  {cert.credentialId && (
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-void/40">
                      id: {cert.credentialId}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <Sticker key={skill} tone="white" className="text-[10px]">{skill}</Sticker>
                    ))}
                  </div>
                </BrutalCard>
              ))}
            </div>
          </div>
        </div>

        {/* Counters */}
        <div className="exp-counters mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {counters.map((stat) => (
            <div key={stat.label} className="brut-press border-[3px] border-void bg-void p-5 text-center shadow-brut">
              <div className="font-display text-4xl text-brick-yell">
                <span className="counter-number tabular-nums" data-value={stat.value}>
                  0
                </span>
                {stat.suffix}
              </div>
              <div className="mt-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
