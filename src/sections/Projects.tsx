import { useEffect, useRef, useState } from 'react';
import { HudButton } from '@/components/ui/hud-button';
import { ContributionGraph } from '@/components/ContributionGraph';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Star,
  Shield,
  Brain,
  Eye,
  Gamepad2,
  Globe,
  Code2,
  Package,
  Calendar,
  Activity,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 8,
    title: 'Global Health',
    subtitle: 'Multi-Country Telehealth Platform',
    date: 'Dec 2025 - Present',
    description:
      'Production healthcare platform connecting patients with licensed clinicians across Ireland, Portugal, Spain, Czechia, Romania, and Brazil. Booking, payments, prescriptions, and document generation, with PHI controls under GDPR and LGPD.',
    image: '/projects/globalhealth.png',
    tags: ['TypeScript', 'PostgreSQL', 'Payments', 'Automation', 'PHI Security', 'GDPR/LGPD'],
    stats: { markets: '6', clinicians: '60+', automated: '86.5%' },
    color: '#22c55e',
    icon: Globe,
    featured: true,
    demoUrl: 'https://www.myglobalhealth.online',
    repoUrl: '',
  },
  {
    id: 9,
    title: 'Endifaa | اندفاع',
    subtitle: 'Bilingual Sports Academy Platform',
    date: 'Oct 2025 - Jun 2026',
    description:
      'Multi-portal platform for sports academies in Saudi Arabia: User, Academy, and Admin portals on shared REST APIs, with subscriptions, invoices, cart and checkout, and full EN/AR RTL support.',
    image: '/projects/endifaa.jpg',
    tags: ['React', 'TypeScript', 'RTK Query', 'Django/DRF', 'PostgreSQL', 'Docker'],
    stats: { portals: '3', languages: 'EN/AR', billing: 'Subscriptions' },
    color: '#06b6d4',
    icon: Code2,
    featured: true,
    demoUrl: 'https://endifaa.com',
    repoUrl: '',
  },
  {
    id: 1,
    title: 'Sales Navigator CRM',
    subtitle: 'AI-Powered Sales Management System',
    date: 'Feb 2024 - Dec 2024',
    description:
      'Technical lead on an AI-powered CRM mobile app for Quest Marketing Kuching. Fine-tuned Hugging Face LLMs for lead qualification, built a hybrid OpenAI + open-source chatbot, and shipped analytics pipelines for forecasting and segmentation.',
    image: '/projects/crm-sales-navigator.png',
    tags: ['Flutter', 'Python', 'PHP', 'MySQL', 'OpenAI API', 'Hugging Face', 'Docker'],
    stats: { users: '50+', support: '-40% Load', platform: 'Play Store' },
    color: '#a855f7',
    icon: Brain,
    featured: true,
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 2,
    title: 'Automated Shelf Monitoring',
    subtitle: 'Retail AI Vision',
    date: 'May 2024',
    description:
      'Real-time out-of-stock and misalignment detection for supermarket shelves using SSD MobileNet V2 FPNLite with transfer learning, focal loss, and augmentation on 1,000 annotated shelf images. Deployed as a live Hugging Face Space.',
    image: '/projects/shelves-hf-ui.png',
    tags: ['Python', 'TensorFlow', 'SSD MobileNet V2', 'Computer Vision', 'Hugging Face'],
    stats: { mAP: '35.93%', dataset: '1,000 imgs', deployment: 'Live Demo' },
    color: '#06b6d4',
    icon: Eye,
    featured: true,
    demoUrl: 'https://huggingface.co/spaces/brxerq/ShelvesDetection',
    repoUrl: 'https://github.com/Brxerq/Super-Market_Shelves_Detection_Object-Detection',
  },
  {
    id: 3,
    title: 'Face Attendance + Anti-Spoofing',
    subtitle: 'Multi-Layer Liveness Verification',
    date: 'Dec 2023',
    description:
      'Biometric attendance that only accepts a genuine live person: Dlib blink analysis, MediaPipe hand-gesture confirmation, YOLOv4 phone detection to block replay attacks, and LBP texture analysis to separate real skin from print or screen.',
    image: '',
    tags: ['Python', 'OpenCV', 'Dlib', 'YOLOv4', 'MediaPipe', 'LBP'],
    stats: { checks: '4 Layers', spoofing: 'Blocked', status: 'Live Demo' },
    color: '#22c55e',
    icon: Shield,
    featured: true,
    demoUrl: 'https://huggingface.co/spaces/brxerq/anti-spoofing',
    repoUrl: 'https://github.com/Brxerq/AML-Face-Attendance-System',
  },
  {
    id: 4,
    title: 'Bird Species Classification',
    subtitle: 'Deep Learning Pipeline',
    date: 'Mar 2023',
    description:
      'Multi-class classification over the CUB-200 dataset (4,829 images, 200 species). Moved from a baseline CNN to fine-tuned MobileNetV3 with transfer learning, augmentation, and learning-rate scheduling to cut overfitting.',
    image: '/projects/bird-accuracy.png',
    tags: ['TensorFlow', 'MobileNetV3', 'Transfer Learning', 'Hugging Face'],
    stats: { trainAcc: '96.81%', valAcc: '64.41%', species: '200' },
    color: '#f97316',
    icon: Brain,
    featured: true,
    demoUrl: 'https://huggingface.co/spaces/brxerq/Bird_Classification',
    repoUrl: '',
  },
  {
    id: 5,
    title: 'Descent into the Infernal Abyss',
    subtitle: 'Text-Based Horror Adventure',
    date: 'Nov 2024',
    description:
      'Dungeon crawler driven by Health, Sanity, Fear, and Tenacity stats. Built on OOP inheritance and polymorphism, with hash tables, linked lists, stacks, queues, and binary trees behind inventory, skills, and navigation, plus SFML audio.',
    image: '',
    tags: ['C++', 'SFML', 'OOP', 'Data Structures', 'Design Patterns'],
    stats: { patterns: 'Iterator/Visitor', systems: '4 Stats', audio: 'SFML' },
    color: '#ef4444',
    icon: Gamepad2,
    featured: false,
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 6,
    title: 'RenEase',
    subtitle: 'Car Rental Platform',
    date: 'Dec 2021',
    description:
      'Full-stack car rental site with booking, user accounts, and an admin side. PHP + MySQL backend behind a responsive HTML/CSS/JS frontend with slideshows, live countdowns, and a user management system.',
    image: '',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'CRUD'],
    stats: { role: 'Full-Stack', backend: 'PHP/MySQL', scope: 'Bookings' },
    color: '#3b82f6',
    icon: Code2,
    featured: false,
    demoUrl: '',
    repoUrl: '',
  },
  {
    id: 7,
    title: 'STALES',
    subtitle: 'Supermarket Stock Management',
    date: 'Mar 2021',
    description:
      'Tkinter desktop tool for supermarket inventory built around expiration tracking: add, edit, and remove stock with input validation, separate expired items from fresh, and read sales statistics for restocking decisions.',
    image: '',
    tags: ['Python', 'Tkinter', 'Inventory', 'Validation'],
    stats: { focus: 'Expiry', ui: 'Tkinter', output: 'Sales Stats' },
    color: '#eab308',
    icon: Package,
    featured: false,
    demoUrl: '',
    repoUrl: '',
  },
];

const sites = [
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
  const cardsRef = useRef<HTMLDivElement>(null);
  const sitesRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-heading',
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
        '.project-card',
        { y: 100, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true },
        },
      );

      gsap.fromTo(
        '.site-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: sitesRef.current, start: 'top 85%', once: true },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-shell relative min-h-screen py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="projects-heading flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center">
              <FolderGit2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white">
              DEPLOYED <span className="text-gradient">WORKS</span>
            </h2>
          </div>
          <div className="neon-divider w-32 mb-4" />
          <p className="text-slate-300/95 max-w-2xl leading-8">
            Production platforms, applied AI, and computer vision work: healthcare and
            sports systems live in market, plus research builds shipped 2021-2024.
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter((p) => p.featured).map((project) => {
            const Icon = project.icon;
            const isHovered = hoveredProject === project.id;

            return (
              <div
                key={project.id}
                className="project-card quest-card relative group perspective-1000"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative glass rounded-3xl overflow-hidden preserve-3d">
                  <div className="relative h-64 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover object-center transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                          }`}
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{
                          background: `radial-gradient(circle at 50% 40%, ${project.color}33, transparent 70%)`,
                        }}
                      >
                        <Icon className="w-20 h-20" style={{ color: project.color, opacity: 0.6 }} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/50">
                      <Star className="w-4 h-4 text-orange-400" />
                      <span className="font-orbitron text-xs text-orange-400">FEATURED</span>
                    </div>

                    <div
                      className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-purple-500 rounded-xl font-orbitron font-bold text-white hover:bg-purple-600 transition-colors flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          DEMO
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 glass rounded-xl font-orbitron font-bold text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          CODE
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: `${project.color}20` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: project.color }} />
                        </div>
                        <div>
                          <h3 className="font-orbitron font-bold text-xl text-white">
                            {project.title}
                          </h3>
                          <p className="text-sm" style={{ color: project.color }}>
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-orbitron">
                        <Calendar className="w-3 h-3" />
                        <span>{project.date}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-orbitron font-bold text-lg" style={{ color: project.color }}>
                            {value}
                          </div>
                          <div className="text-xs text-slate-500 uppercase">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-orbitron bg-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.filter((p) => !p.featured).map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                className="project-card quest-card group"
              >
                <div className="glass rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${project.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: project.color }} />
                      </div>
                      <div>
                        <h3 className="font-orbitron font-bold text-lg text-white">
                          {project.title}
                        </h3>
                        <p className="text-xs" style={{ color: project.color }}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-slate-400" />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 transition-colors"
                        >
                          <Github className="w-4 h-4 text-slate-400" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 mb-2 font-orbitron">{project.date}</div>
                  <p className="text-slate-300/90 text-sm leading-7 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-xs font-orbitron bg-white/5 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 rounded-full text-xs font-orbitron bg-white/5 text-slate-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white">
              LIVE <span className="text-gradient">SITES</span>
            </h2>
          </div>
          <div className="neon-divider w-32 mb-4" />
          <p className="text-slate-300/95 max-w-2xl leading-8 mb-12">
            Client and product websites shipped end to end: design, build, booking and
            enquiry flows, and technical SEO. All live in production.
          </p>

          <div ref={sitesRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="site-card group glass rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-40 overflow-hidden bg-dark">
                  <img
                    src={site.image}
                    alt={`${site.name} website`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-9 h-9 rounded-lg bg-white/90 flex items-center justify-center overflow-hidden shrink-0">
                      <img
                        src={site.favicon}
                        alt={`${site.name} favicon`}
                        loading="lazy"
                        className="w-6 h-6 object-contain"
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-orbitron font-bold text-base text-white truncate">
                        {site.name}
                      </h3>
                      <p className="text-xs text-cyan-400 truncate">{site.tagline}</p>
                    </div>
                  </div>

                  <p className="text-slate-300/90 text-sm leading-6 mb-4">{site.description}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-2">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-xs font-orbitron bg-white/5 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto flex items-center gap-1 text-xs font-orbitron text-cyan-400">
                      VISIT
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-500 flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white">
              COMMIT <span className="text-gradient">LOG</span>
            </h2>
          </div>
          <div className="neon-divider w-32 mb-4" />
          <p className="text-slate-300/95 max-w-2xl leading-8 mb-8">
            Live contribution activity, pulled straight from GitHub. Refreshes every time
            this page loads.
          </p>

          <div className="glass rounded-2xl p-6 w-fit max-w-full mx-auto">
            <div className="flex items-center gap-2 mb-5 text-xs font-orbitron text-slate-400">
              <Github className="w-3.5 h-3.5" />
              <span>@Brxerq</span>
            </div>
            <div className="overflow-x-auto">
              <div className="w-[740px]">
                <ContributionGraph username="Brxerq" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <HudButton
            href="https://github.com/Brxerq"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            ALL QUESTS
          </HudButton>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
    </section>
  );
}
