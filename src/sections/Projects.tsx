import { useEffect, useRef } from 'react';
import { SketchButton, SectionHeading, SketchCard, SketchTag } from '@/components/ui/sketch';
import { ContributionGraph } from '@/components/ContributionGraph';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  Github,
  Shield,
  Brain,
  Eye,
  Gamepad2,
  Code2,
  Package,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Sales Navigator CRM',
    subtitle: 'AI-powered sales management',
    date: 'Feb 2024 - Dec 2024',
    description:
      'Technical lead on an AI-powered CRM mobile app for Quest Marketing Kuching. Fine-tuned Hugging Face LLMs for lead qualification, built a hybrid OpenAI + open-source chatbot, and shipped analytics pipelines for forecasting and segmentation.',
    image: '/projects/crm-sales-navigator.png',
    tags: ['Flutter', 'Python', 'PHP', 'MySQL', 'OpenAI API', 'Hugging Face', 'Docker'],
    stats: { users: '50+', support: '-40% load', platform: 'Play Store' },
    icon: Brain,
    featured: true,
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 2,
    title: 'Automated Shelf Monitoring',
    subtitle: 'Retail AI vision',
    date: 'May 2024',
    description:
      'Real-time out-of-stock and misalignment detection for supermarket shelves using SSD MobileNet V2 FPNLite with transfer learning, focal loss, and augmentation on 1,000 annotated shelf images. Deployed as a live Hugging Face Space.',
    image: '/projects/shelves-hf-ui.png',
    tags: ['Python', 'TensorFlow', 'SSD MobileNet V2', 'Computer Vision', 'Hugging Face'],
    stats: { mAP: '35.93%', dataset: '1,000 imgs', demo: 'live' },
    icon: Eye,
    featured: true,
    demoUrl: 'https://huggingface.co/spaces/brxerq/ShelvesDetection',
    repoUrl: 'https://github.com/Brxerq/Super-Market_Shelves_Detection_Object-Detection',
  },
  {
    id: 3,
    title: 'Face Attendance + Anti-Spoofing',
    subtitle: 'Multi-layer liveness verification',
    date: 'Dec 2023',
    description:
      'Biometric attendance that only accepts a genuine live person: Dlib blink analysis, MediaPipe hand-gesture confirmation, YOLOv4 phone detection to block replay attacks, and LBP texture analysis to separate real skin from print or screen.',
    image: '',
    tags: ['Python', 'OpenCV', 'Dlib', 'YOLOv4', 'MediaPipe', 'LBP'],
    stats: { checks: '4 layers', spoofing: 'blocked', demo: 'live' },
    icon: Shield,
    featured: true,
    demoUrl: 'https://huggingface.co/spaces/brxerq/anti-spoofing',
    repoUrl: 'https://github.com/Brxerq/AML-Face-Attendance-System',
  },
  {
    id: 4,
    title: 'Bird Species Classification',
    subtitle: 'Deep learning pipeline',
    date: 'Mar 2023',
    description:
      'Multi-class classification over the CUB-200 dataset (4,829 images, 200 species). Moved from a baseline CNN to fine-tuned MobileNetV3 with transfer learning, augmentation, and learning-rate scheduling to cut overfitting.',
    image: '/projects/bird-accuracy.png',
    tags: ['TensorFlow', 'MobileNetV3', 'Transfer Learning', 'Hugging Face'],
    stats: { train: '96.81%', val: '64.41%', species: '200' },
    icon: Brain,
    featured: true,
    demoUrl: 'https://huggingface.co/spaces/brxerq/Bird_Classification',
    repoUrl: '',
  },
  {
    id: 5,
    title: 'Descent into the Infernal Abyss',
    subtitle: 'Text-based horror adventure',
    date: 'Nov 2024',
    description:
      'Dungeon crawler driven by Health, Sanity, Fear, and Tenacity stats. Built on OOP inheritance and polymorphism, with hash tables, linked lists, stacks, queues, and binary trees behind inventory, skills, and navigation, plus SFML audio.',
    image: '',
    tags: ['C++', 'SFML', 'OOP', 'Data Structures', 'Design Patterns'],
    stats: {},
    icon: Gamepad2,
    featured: false,
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 6,
    title: 'RenEase',
    subtitle: 'Car rental platform',
    date: 'Dec 2021',
    description:
      'Full-stack car rental site with booking, user accounts, and an admin side. PHP + MySQL backend behind a responsive HTML/CSS/JS frontend with slideshows, live countdowns, and a user management system.',
    image: '',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'CRUD'],
    stats: {},
    icon: Code2,
    featured: false,
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 7,
    title: 'STALES',
    subtitle: 'Supermarket stock management',
    date: 'Mar 2021',
    description:
      'Tkinter desktop tool for supermarket inventory built around expiration tracking: add, edit, and remove stock with input validation, separate expired items from fresh, and read sales statistics for restocking decisions.',
    image: '',
    tags: ['Python', 'Tkinter', 'Inventory', 'Validation'],
    stats: {},
    icon: Package,
    featured: false,
    demoUrl: '',
    repoUrl: '',
  },
];

const sites = [
  {
    name: 'Global Health',
    tagline: 'Multi-country telehealth platform',
    description:
      'Patients booking licensed clinicians across Ireland, Portugal, Spain, Czechia, Romania, and Brazil. Booking, payments, prescriptions, and documents, with PHI controls under GDPR and LGPD.',
    url: 'https://www.myglobalhealth.online',
    image: '/projects/globalhealth.png',
    favicon: '/logos/myglobalhealth-online.png',
    tags: ['TypeScript', 'Payments', 'GDPR/LGPD'],
  },
  {
    name: 'Endifaa | اندفاع',
    tagline: 'Bilingual sports academy platform',
    description:
      'User, Academy, and Admin portals on shared REST APIs, with subscriptions, invoices, cart and checkout, and full EN/AR RTL support.',
    url: 'https://endifaa.com',
    image: '/projects/endifaa.jpg',
    favicon: '/logos/endifaa-com.png',
    tags: ['React', 'Django/DRF', 'EN/AR'],
  },
  {
    name: 'RyzunTech',
    tagline: 'Software & AI studio, Dubai',
    description:
      'Founder-led software studio site: custom development, AI automation, web design, and SEO.',
    url: 'https://ryzuntech.com/',
    image: '/projects/ryzuntech.jpg',
    favicon: '/logos/ryzuntech-com.svg',
    tags: ['Next.js', 'SEO', 'Design'],
  },
  {
    name: 'Aerlou',
    tagline: 'AI front desk for voice & SMS',
    description:
      'Product site for an AI receptionist that answers calls, books appointments, and syncs transcripts to CRM.',
    url: 'https://aerlou.com/',
    image: '/projects/aerlou.png',
    favicon: '/logos/aerlou-com.png',
    tags: ['Voice AI', 'CRM', 'Landing'],
  },
  {
    name: 'aerlou for WhatsApp',
    tagline: 'Personal AI assistant',
    description:
      'Landing and app surface for a WhatsApp assistant that stores voice notes, receipts, and reminders, then summarizes them.',
    url: 'https://chat.aerlou.com/',
    image: '/projects/aerlou-chat.jpg',
    favicon: '/logos/chat-aerlou-com.png',
    tags: ['LLMs', 'WhatsApp', 'Product'],
  },
  {
    name: 'Asia Pacific Dental',
    tagline: 'Dental clinic, Singapore',
    description:
      'Clinic site with in-person and virtual appointment booking, service pages, and local SEO structure.',
    url: 'https://apdc.com.sg/',
    image: '/projects/apdc.jpg',
    favicon: '/logos/apdc-com-sg.png',
    tags: ['Booking', 'Local SEO', 'Healthcare'],
  },
  {
    name: 'Zen Sea Yacht',
    tagline: 'Luxury yacht charter, Singapore',
    description:
      'Charter site for sunset cruises, seacations, and celebrations, built around fleet pages and enquiry flow.',
    url: 'https://www.zenseayacht.com.sg/',
    image: '/projects/zensea.webp',
    favicon: '/logos/zenseayacht-com-sg.png',
    tags: ['Luxury', 'Enquiry Flow', 'SEO'],
  },
  {
    name: 'J Hair Salon',
    tagline: 'Celebrity hair salon, Singapore',
    description:
      'Salon site for cuts, colour, treatments, and nails at 9 Penang Road, with booking and service listings.',
    url: 'https://jhair.sg/',
    image: '/projects/jhair.png',
    favicon: '/logos/jhair-sg.png',
    tags: ['Brand Site', 'Booking', 'SEO'],
  },
  {
    name: 'Surplus Alliance',
    tagline: 'Hong Kong investment holding',
    description:
      'Corporate site for a 2013-founded holding company spanning trading, technology, manufacturing, and real estate.',
    url: 'https://surplusalliancehk.com/en',
    image: '/projects/surplus-alliance.jpg',
    favicon: '/logos/surplusalliancehk-com.svg',
    tags: ['Corporate', 'Multilingual', 'Content'],
  },
];

const TILTS = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const sitesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 82%', once: true },
        },
      );

      gsap.fromTo(
        '.site-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: sitesRef.current, start: 'top 85%', once: true },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Live sites — pinned to the board */}
        <div>
          <SectionHeading label="shipped for clients" title="sites that are" accent="live">
            Design, build, booking and enquiry flows, and technical SEO. All in
            production right now.
          </SectionHeading>

          <div ref={sitesRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((site, index) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`site-card tack group flex flex-col overflow-hidden rounded-wobblyMd border-2 border-ink bg-white shadow-sketchSoft transition-all duration-100 hover:rotate-0 hover:shadow-sketch ${TILTS[index % TILTS.length]}`}
              >
                <div className="h-36 overflow-hidden border-b-2 border-dashed border-ink bg-paper-aged">
                  <img
                    src={site.image}
                    alt={`${site.name} website`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-wobblySm border-2 border-ink bg-white">
                      <img
                        src={site.favicon}
                        alt=""
                        loading="lazy"
                        className="h-4 w-4 object-contain"
                      />
                    </span>
                    <div className="min-w-0">
                      <h4 className="truncate font-kalam text-lg leading-tight">{site.name}</h4>
                      <p className="truncate font-hand text-sm text-marker">{site.tagline}</p>
                    </div>
                  </div>

                  <p className="font-hand text-base leading-relaxed text-ink-soft">
                    {site.description}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                    {site.tags.map((tag) => (
                      <SketchTag key={tag} tone="paper" className="text-xs">
                        {tag}
                      </SketchTag>
                    ))}
                    <span className="ml-auto flex items-center gap-1 font-hand text-base text-pen group-hover:line-through">
                      visit
                      <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <SectionHeading label="the good stuff" title="things i" accent="built" className="mt-20">
          Applied AI and computer vision: models trained, shipped, and left
          running where people could actually break them.
        </SectionHeading>

        {/* Featured — pinned like photos on a corkboard */}
        <div ref={cardsRef} className="grid gap-10 md:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.id}
                  className={`project-card group relative border-[3px] border-ink bg-white p-3 shadow-sketchLg transition-transform duration-100 hover:rotate-0 ${TILTS[index % TILTS.length]}`}
                  style={{ borderRadius: '12px 8px 14px 10px' }}
                >
                  {/* Screenshot in a scrappy frame */}
                  <div
                    className="relative h-52 overflow-hidden border-2 border-ink bg-paper-aged"
                    style={{ borderRadius: '8px 12px 8px 12px' }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-ink/40 text-ink-faint">
                        <Icon className="h-10 w-10" strokeWidth={2.5} />
                        <span className="font-hand text-base">no screenshot, sorry</span>
                      </div>
                    )}
                  </div>

                  <div className="px-2 pb-1 pt-4">
                    <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-kalam text-2xl leading-tight">{project.title}</h3>
                      <span className="font-hand text-base text-ink-faint">{project.date}</span>
                    </div>
                    <p className="font-hand text-lg text-marker">{project.subtitle}</p>

                    <p className="mt-3 font-hand text-lg leading-relaxed text-ink-soft">
                      {project.description}
                    </p>

                    {Object.keys(project.stats).length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div
                            key={key}
                            className="rounded-wobblySm border-2 border-dashed border-ink px-3 py-1 text-center"
                          >
                            <div className="font-kalam text-lg leading-tight">{value}</div>
                            <div className="font-hand text-sm text-ink-faint">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <SketchTag key={tag} tone="paper">
                          {tag}
                        </SketchTag>
                      ))}
                    </div>

                    {(project.demoUrl || project.repoUrl) && (
                      <div className="mt-5 flex flex-wrap gap-4 border-t-[3px] border-dashed border-ink/30 pt-4">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-hand text-lg text-pen hover:text-marker"
                          >
                            <ExternalLink className="h-4 w-4" strokeWidth={2.5} />
                            open it
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-hand text-lg text-pen hover:text-marker"
                          >
                            <Github className="h-4 w-4" strokeWidth={2.5} />
                            read the code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
        </div>

        {/* Older work — margin scribbles */}
        <h3 className="mb-6 mt-16 font-kalam text-3xl">
          <span className="squiggle-underline-pen">older experiments</span>
        </h3>

        <div className="grid gap-6 sm:grid-cols-3">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => {
              const Icon = project.icon;
              return (
                <SketchCard
                  key={project.id}
                  tone="paper"
                  className="project-card p-5 transition-transform duration-100 hover:-rotate-1"
                >
                  <div className={TILTS[index % TILTS.length]}>
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-blob border-2 border-ink bg-white">
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <h4 className="font-kalam text-xl leading-tight">{project.title}</h4>
                    <p className="font-hand text-base text-marker">{project.subtitle}</p>
                    <p className="mt-1 font-hand text-sm text-ink-faint">{project.date}</p>
                    <p className="mt-2 font-hand text-base leading-relaxed text-ink-soft">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <SketchTag key={tag} tone="white">
                          {tag}
                        </SketchTag>
                      ))}
                    </div>
                  </div>
                </SketchCard>
              );
            })}
        </div>


        {/* Commit log — graph paper */}
        <div className="mt-20">
          <SectionHeading label="proof of work" title="the commit" accent="log">
            Pulled live from GitHub every time this page loads.
          </SectionHeading>

          <SketchCard tone="white" decoration="tape" className="mx-auto w-fit max-w-full p-6" solid>
            <div className="mb-4 flex items-center gap-2 font-hand text-base text-ink-faint">
              <Github className="h-4 w-4" strokeWidth={2.5} />
              @Brxerq
            </div>
            <div className="overflow-x-auto">
              <div className="w-[740px]">
                <ContributionGraph username="Brxerq" />
              </div>
            </div>
          </SketchCard>
        </div>

        <div className="mt-12 text-center">
          <SketchButton
            href="https://github.com/Brxerq"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="-rotate-1"
          >
            everything else on GitHub
          </SketchButton>
        </div>
      </div>
    </section>
  );
}
