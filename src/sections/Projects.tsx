import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Star,
  Shield,
  ArrowRight,
  Brain,
  Eye,
  Gamepad2,
  Calendar,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Descent into the Infernal Abyss',
    subtitle: 'Text-Based Horror Adventure',
    date: 'Nov 2024',
    description:
      'Led end-to-end development of an immersive text-based horror game with dynamic mechanics, adaptive difficulty, and real-time state management.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop',
    tags: ['C++', 'SFML', 'OOP', 'Data Structures', 'Event-Driven Audio'],
    stats: { genre: 'Horror', engine: 'SFML', mode: 'Interactive Text' },
    color: '#ef4444',
    icon: Gamepad2,
    featured: true,
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Out-of-Stock Detection System',
    subtitle: 'Retail AI Vision',
    date: 'May 2024',
    description:
      'Built real-time shelf monitoring with TensorFlow + SSD MobileNet V2, trained on 1,000+ images with transfer learning and augmentation.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Python', 'TensorFlow', 'SSD MobileNet V2', 'Computer Vision', 'Hugging Face'],
    stats: { accuracy: '90%+', dataset: '1K+', deployment: 'Live Demo' },
    color: '#06b6d4',
    icon: Eye,
    featured: true,
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Face Recognition Attendance System',
    subtitle: 'Advanced Anti-Spoofing',
    date: 'Dec 2023',
    description:
      'Developed biometric attendance with liveness detection using OpenCV, YOLOv4, and MediaPipe.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    tags: ['Python', 'OpenCV', 'YOLOv4', 'MediaPipe', 'Liveness Detection'],
    stats: { spoofingDrop: '90%', modes: 'Blink/Gesture/Texture', status: 'Prototype' },
    color: '#22c55e',
    icon: Shield,
    featured: false,
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'Bird Species Classification',
    subtitle: 'Deep Learning Pipeline',
    date: 'Mar 2023',
    description:
      'Trained MobileNetV3-based models for 200+ bird species with transfer learning and heavy augmentation.',
    image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=600&fit=crop',
    tags: ['TensorFlow', 'MobileNetV3', 'Transfer Learning', 'Hugging Face'],
    stats: { trainAcc: '96.8%', valAcc: '64.4%', species: '200+' },
    color: '#f97316',
    icon: Brain,
    featured: false,
    demoUrl: '#',
    repoUrl: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
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
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
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
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-24 overflow-hidden"
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
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl">
            Resume-aligned project set with AI/ML systems, computer vision builds,
            and game engineering work delivered across 2023-2024.
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/50">
                      <Star className="w-4 h-4 text-orange-400" />
                      <span className="font-orbitron text-xs text-orange-400">FEATURED</span>
                    </div>

                    <div
                      className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <a
                        href={project.demoUrl}
                        className="px-6 py-3 bg-purple-500 rounded-xl font-orbitron font-bold text-white hover:bg-purple-600 transition-colors flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        DEMO
                      </a>
                      <a
                        href={project.repoUrl}
                        className="px-6 py-3 glass rounded-xl font-orbitron font-bold text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        CODE
                      </a>
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
                      <a
                        href={project.demoUrl}
                        className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-400" />
                      </a>
                      <a
                        href={project.repoUrl}
                        className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 transition-colors"
                      >
                        <Github className="w-4 h-4 text-slate-400" />
                      </a>
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 mb-2 font-orbitron">{project.date}</div>
                  <p className="text-slate-400 text-sm mb-4">
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

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Brxerq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-xl font-orbitron font-bold text-white hover:bg-purple-500/20 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span>VIEW ALL QUESTS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
    </section>
  );
}
