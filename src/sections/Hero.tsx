import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Terminal, Cpu, Zap, Shield, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: GraduationCap, label: 'EDU', value: 'BSc CS', color: 'text-cyan-400' },
  { icon: Cpu, label: 'SPECIALTY', value: 'AI + DS', color: 'text-purple-400' },
  { icon: Zap, label: 'EXP', value: '2+ Years', color: 'text-orange-400' },
  { icon: Shield, label: 'IMPACT', value: '40% Faster Support', color: 'text-green-400' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ delay: 0.3 });

      // Avatar 3D flip entrance
      tl.fromTo(
        avatarRef.current,
        { rotateX: 90, scale: 0.5, opacity: 0 },
        { rotateX: 0, scale: 1, opacity: 1, duration: 1.2, ease: 'expo.out' }
      );

      // Text decode animation
      tl.fromTo(
        '.hero-text-line',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
        '-=0.8'
      );

      // Stats counter animation
      tl.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.4'
      );

      // Rings start orbiting
      tl.fromTo(
        '.orbit-ring',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, stagger: 0.2 },
        '-=0.6'
      );

      // Scroll parallax effects
      gsap.to(avatarRef.current, {
        y: 150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(textRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.orbit-ring', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mouse move handler for 3D tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = ((e.clientY - centerY) / rect.height) * -15;
        const rotateY = ((e.clientX - centerX) / rect.width) * 15;
        setMousePos({ x: rotateY, y: rotateX });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="section-shell relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Orbiting Rings */}
      <div ref={ringsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="orbit-ring absolute w-[500px] h-[500px] border border-purple-500/20 rounded-full" 
             style={{ transform: 'rotateX(60deg)' }} />
        <div className="orbit-ring absolute w-[400px] h-[400px] border border-cyan-500/20 rounded-full" 
             style={{ transform: 'rotateX(60deg) rotateY(30deg)' }} />
        <div className="orbit-ring absolute w-[600px] h-[600px] border border-orange-500/10 rounded-full" 
             style={{ transform: 'rotateX(60deg) rotateY(-30deg)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <div className="hero-text-line mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-glow-cyan">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-sm text-cyan-400">
                  SYSTEM.INIT(&quot;HELLO_WORLD&quot;)
                </span>
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-text-line font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl mb-4">
              <span className="text-white glitch-text" data-text="SYED MUHAMMAD">
                SYED MUHAMMAD
              </span>
              <br />
              <span className="text-gradient">HASSAAN</span>
            </h1>

            {/* Title */}
            <div className="hero-text-line mb-6">
              <span className="font-orbitron text-xl sm:text-2xl text-slate-300 tracking-[0.08em]">
                AI-DRIVEN SOFTWARE DEVELOPER
              </span>
            </div>

            {/* Description */}
            <p className="hero-text-line text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              AI-driven Software Developer and Machine Learning Engineer focused on
              end-to-end CRM, NLP, and Computer Vision systems. Delivered 40%
              faster support response, 30% less manual reporting, and vision
              models reaching 96.8% training accuracy.
            </p>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="stat-item glass rounded-xl p-4 text-center group hover:border-purple-500/50 transition-all duration-300"
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="font-orbitron text-xs text-slate-500 mb-1">
                      {stat.label}
                    </div>
                    <div className={`font-orbitron font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hero-text-line flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
              <a
                href="#projects"
                className="btn-holo px-8 py-4 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 rounded-xl font-orbitron font-bold text-white hover:shadow-glow-purple transition-all duration-300 hover:scale-105"
              >
                VIEW QUESTS
              </a>
              <a
                href="#contact"
                className="btn-holo px-8 py-4 glass rounded-xl font-orbitron font-bold text-white hover:border-cyan-400/60 transition-all duration-300 hover:scale-105"
              >
                INITIATE CONTACT
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="order-1 lg:order-2 flex justify-center perspective-1000">
            <div
              ref={avatarRef}
              className="relative preserve-3d"
              style={{
                transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-3xl blur-3xl animate-glow-pulse" />
              
              {/* Avatar Container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                {/* Border Frame */}
                <div className="absolute inset-0 rounded-3xl border-2 border-purple-500/50" 
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))',
                       boxShadow: '0 0 40px rgba(168, 85, 247, 0.3), inset 0 0 40px rgba(6, 182, 212, 0.1)'
                     }} />
                
                {/* Corner Accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
                
                {/* Avatar Image */}
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  <img
                    src="/avatar.png"
                    alt="Syed Muhammad Hassaan"
                    className="w-full h-full object-cover animate-float"
                  />
                  {/* Scanline Overlay */}
                  <div className="absolute inset-0 scanline opacity-50" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-6 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-mono text-sm text-cyan-400">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}
