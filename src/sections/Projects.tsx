import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading, BrutalCard, Sticker, Marquee } from '@/components/ui/brick';
import { ContributionGraph } from '@/components/ContributionGraph';
import { asset } from '@/lib/utils';
import {
  ExternalLink,
  Github,
  Shield,
  Brain,
  Eye,
  Gamepad2,
  Code2,
  Package,
  MoveRight,
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
    tone: 'bg-brick-yell',
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
    tone: 'bg-brick-pink',
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
    tone: 'bg-brick-lime',
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
    tone: 'bg-brick-blue',
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
    tone: 'bg-brick-orange',
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
    tone: 'bg-brick-yell',
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
    tone: 'bg-brick-pink',
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

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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

      // Site cards pop.
      gsap.fromTo(
        '.site-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: 'back.out(1.6)',
          clearProps: 'transform',
          scrollTrigger: { trigger: '.sites-grid', start: 'top 85%', once: true },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Horizontal pinned gallery — desktop only. Mobile stacks vertically.
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const track = trackRef.current;
      const gallery = galleryRef.current;
      if (!track || !gallery) return;

      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: gallery,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Progress rail under the gallery.
      gsap.fromTo(
        '.gallery-progress',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          transformOrigin: 'left center',
          scrollTrigger: {
            trigger: gallery,
            start: 'top top',
            end: () => `+=${distance()}`,
            scrub: 0.4,
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const older = projects.filter((p) => !p.featured);

  return (
    <section ref={sectionRef} id="projects" className="relative">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl pt-24">
          <SectionHeading kicker="proof of work" title="things i" accent="built" accentTone="lime">
            Applied AI and computer vision: models trained, shipped, and left running
            where people could actually break them. Keep scrolling — the gallery goes
            sideways.
          </SectionHeading>
        </div>
      </div>

      {/* Ticker */}
      <Marquee
        items={['SELECTED WORK', 'TRAINED MODELS', 'SHIPPED APPS', 'LIVE DEMOS', 'REAL USERS']}
        tone="primary"
        speed={26}
      />

      {/* Horizontal gallery — pinned on desktop */}
      <div ref={galleryRef} className="relative overflow-hidden md:h-screen">
        <div className="flex h-full flex-col justify-center py-10 md:py-0">
          <div
            ref={trackRef}
            className="flex w-full flex-col gap-8 px-4 sm:px-6 md:w-max md:flex-row md:items-center md:gap-10 md:px-16"
          >
            {/* Intro card leads the track */}
            <div className="hidden shrink-0 md:block">
              <div className="flex h-[420px] w-64 flex-col justify-between border-[3px] border-void bg-void p-6 text-white shadow-brutXl">
                <Sticker tone="primary" className="self-start">featured</Sticker>
                <div>
                  <h3 className="text-4xl leading-tight text-brick-yell">
                    THE
                    <br />
                    GALLERY
                  </h3>
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-white/60">
                    4 builds · scroll to pan →
                  </p>
                </div>
                <MoveRight className="h-10 w-10 text-brick-pink" strokeWidth={3} />
              </div>
            </div>

            {featured.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.id}
                  className="group w-full shrink-0 border-[3px] border-void bg-white shadow-brutXl transition-transform duration-100 hover:-translate-y-2 md:w-[560px]"
                >
                  {/* Screenshot strip */}
                  <div className={`relative h-56 overflow-hidden border-b-[3px] border-void ${project.tone}`}>
                    {project.image ? (
                      <img
                        src={asset(project.image)}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="bg-halftone-faint flex h-full w-full flex-col items-center justify-center gap-2">
                        <span className="flex h-16 w-16 items-center justify-center border-[3px] border-void bg-white shadow-brutSm">
                          <Icon className="h-8 w-8" strokeWidth={2.5} />
                        </span>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest">no screenshot — imagine it</span>
                      </div>
                    )}
                    <span className="absolute left-3 top-3">
                      <Sticker tone="dark" className="text-[10px]">{project.date}</Sticker>
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-2xl leading-tight">{project.title}</h3>
                    <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-void/60">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 leading-relaxed text-void/75">{project.description}</p>

                    {Object.keys(project.stats).length > 0 && (
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="border-[3px] border-void bg-bone px-2 py-1.5 text-center">
                            <div className="font-display text-sm leading-tight">{value}</div>
                            <div className="font-mono text-[10px] uppercase tracking-wider text-void/50">{key}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Sticker key={tag} tone="white" className="text-[10px]">{tag}</Sticker>
                      ))}
                    </div>

                    {(project.demoUrl || project.repoUrl) && (
                      <div className="mt-5 flex flex-wrap gap-3 border-t-[3px] border-dashed border-void/25 pt-4">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brut-press flex items-center gap-1.5 border-[3px] border-void bg-brick-lime px-3 py-1.5 font-display text-xs uppercase shadow-brutSm"
                          >
                            <ExternalLink className="h-3.5 w-3.5" strokeWidth={3} />
                            open it
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brut-press flex items-center gap-1.5 border-[3px] border-void bg-brick-blue px-3 py-1.5 font-display text-xs uppercase shadow-brutSm"
                          >
                            <Github className="h-3.5 w-3.5" strokeWidth={3} />
                            read the code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}

            {/* Outro card closes the track */}
            <div className="hidden shrink-0 md:block">
              <div className="flex h-[420px] w-64 flex-col items-center justify-center gap-4 border-[3px] border-void bg-brick-yell p-6 text-center shadow-brutXl">
                <p className="font-display text-2xl leading-tight">MORE WHERE THAT CAME FROM</p>
                <a
                  href="https://github.com/Brxerq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brut-press flex items-center gap-2 border-[3px] border-void bg-void px-4 py-2 font-display text-xs uppercase text-white shadow-brutSm"
                >
                  <Github className="h-4 w-4" strokeWidth={3} />
                  github.com/brxerq
                </a>
              </div>
            </div>
          </div>

          {/* Desktop progress rail */}
          <div className="mx-auto mt-8 hidden w-full max-w-6xl px-16 md:block">
            <div className="h-[10px] border-[3px] border-void bg-transparent">
              <div className="gallery-progress h-full w-full bg-void" />
            </div>
          </div>
        </div>
      </div>

      {/* Live sites */}
      <div className="px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="shipped for clients" title="sites that are" accent="live" accentTone="orange">
            Design, build, booking and enquiry flows, and technical SEO. All in
            production right now.
          </SectionHeading>

          <div className="sites-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="site-card group flex flex-col border-[3px] border-void bg-white shadow-brut transition-transform duration-100 hover:-translate-y-1.5 hover:shadow-brutLg"
              >
                <div className="h-36 overflow-hidden border-b-[3px] border-void bg-bone">
                    <img
                      src={asset(site.image)}
                    alt={`${site.name} website`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden border-[3px] border-void bg-white">
                      <img src={asset(site.favicon)} alt="" loading="lazy" className="h-4 w-4 object-contain" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="truncate text-base leading-tight">{site.name}</h4>
                      <p className="truncate font-mono text-[10px] font-bold uppercase tracking-wider text-void/60">
                        {site.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-void/70">{site.description}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
                    {site.tags.map((tag) => (
                      <Sticker key={tag} tone="white" className="text-[10px]">{tag}</Sticker>
                    ))}
                    <span className="ml-auto flex items-center gap-1 font-display text-xs uppercase text-void/60 group-hover:text-void">
                      visit
                      <ExternalLink className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Older experiments */}
      <div className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-8 inline-block -rotate-1 border-[3px] border-void bg-brick-orange px-4 py-1.5 text-2xl shadow-brutSm">
            older experiments
          </h3>

          <div className="grid gap-6 sm:grid-cols-3">
            {older.map((project) => {
              const Icon = project.icon;
              return (
                <BrutalCard key={project.id} tone="white" className="p-5 transition-transform duration-100 hover:-translate-y-1.5">
                  <span className="mb-3 flex h-11 w-11 items-center justify-center border-[3px] border-void bg-bone">
                    <Icon className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <h4 className="text-lg leading-tight">{project.title}</h4>
                  <p className="mt-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-void/60">
                    {project.subtitle} · {project.date}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-void/70">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Sticker key={tag} tone="white" className="text-[10px]">{tag}</Sticker>
                    ))}
                  </div>
                </BrutalCard>
              );
            })}
          </div>
        </div>
      </div>

      {/* Commit log */}
      <div className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="proof of work" title="the commit" accent="log" accentTone="pink">
            Pulled live from GitHub every time this page loads.
          </SectionHeading>

          <BrutalCard tone="dark" className="mx-auto w-fit max-w-full p-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-white/60">
              <Github className="h-4 w-4" strokeWidth={3} />
              @Brxerq
            </div>
            <div className="overflow-x-auto">
              <div className="w-[740px]">
                <ContributionGraph username="Brxerq" />
              </div>
            </div>
          </BrutalCard>
        </div>
      </div>
    </section>
  );
}
