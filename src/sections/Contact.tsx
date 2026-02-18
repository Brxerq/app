import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Instagram,
  Terminal,
  CheckCircle,
  MapPin,
  Clock,
  Phone,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/Brxerq', color: '#f8fafc' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/syed-muhammad-hassaan/', color: '#0a66c2' },
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/ha_ssaann/', color: '#e1306c' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '> SYSTEM.READY',
    '> AWAITING_INPUT...',
  ]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-heading',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        },
      );

      gsap.fromTo(
        '.contact-form',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        },
      );

      gsap.fromTo(
        '.info-card',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (value.length > 0 && value.length % 5 === 0) {
      setTerminalLines((prev) => [
        ...prev.slice(-4),
        `> ${name.toUpperCase()}: ${value.slice(0, 20)}${value.length > 20 ? '...' : ''}`,
      ]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Portfolio Contact: ${formData.name || 'New Message'}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');

    const mailtoUrl = `mailto:kinghassaan99@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTerminalLines((prev) => [...prev, '> TRANSMITTING DATA...', '> OPENING MAIL CLIENT...']);
    setIsSubmitting(false);
    setIsSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-shell relative min-h-screen py-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, .3) 25%, rgba(6, 182, 212, .3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .3) 75%, rgba(6, 182, 212, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, .3) 25%, rgba(6, 182, 212, .3) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .3) 75%, rgba(6, 182, 212, .3) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="contact-heading inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-orbitron font-black text-4xl sm:text-5xl text-white">
              OPEN A <span className="text-gradient">CHANNEL</span>
            </h2>
          </div>
          <div className="neon-divider w-32 mx-auto mb-4" />
          <p className="text-slate-300/95 max-w-xl mx-auto leading-8">
            Ready to collaborate on AI-driven product engineering? Send a message and
            I will respond with implementation details and next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <div className="contact-form glass rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span className="font-mono text-sm text-cyan-400">contact_terminal.exe</span>
                <div className="ml-auto flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              <div className="mb-6 p-4 rounded-xl bg-dark/50 font-mono text-xs text-slate-400 h-24 overflow-hidden">
                {terminalLines.map((line, i) => (
                  <div key={i} className="mb-1">
                    <span className="text-cyan-400">{line}</span>
                  </div>
                ))}
                <span className="text-cyan-400 animate-pulse">_</span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="block font-orbitron text-sm text-slate-400 mb-2">
                    <span className="text-cyan-400">&gt;</span> IDENTIFIER (NAME)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full bg-dark/50 border-2 rounded-xl px-4 py-4 font-mono text-white placeholder-slate-600 transition-all duration-300 ${
                      focusedField === 'name'
                        ? 'border-cyan-400 shadow-glow-cyan'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                    placeholder="Enter your designation..."
                  />
                  {focusedField === 'name' && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 animate-pulse">|</span>
                  )}
                </div>

                <div className="relative">
                  <label className="block font-orbitron text-sm text-slate-400 mb-2">
                    <span className="text-purple-400">&gt;</span> UPLINK (EMAIL)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full bg-dark/50 border-2 rounded-xl px-4 py-4 font-mono text-white placeholder-slate-600 transition-all duration-300 ${
                      focusedField === 'email'
                        ? 'border-purple-400 shadow-glow-purple'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                    placeholder="your@email.com"
                  />
                  {focusedField === 'email' && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400 animate-pulse">|</span>
                  )}
                </div>

                <div className="relative">
                  <label className="block font-orbitron text-sm text-slate-400 mb-2">
                    <span className="text-orange-400">&gt;</span> DATA PACKET (MESSAGE)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full bg-dark/50 border-2 rounded-xl px-4 py-4 font-mono text-white placeholder-slate-600 transition-all duration-300 resize-none ${
                      focusedField === 'message'
                        ? 'border-orange-400 shadow-glow-orange'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                    placeholder="Transmit your message..."
                  />
                  {focusedField === 'message' && (
                    <span className="absolute right-4 bottom-4 text-orange-400 animate-pulse">|</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`btn-holo w-full py-4 rounded-xl font-orbitron font-bold text-lg transition-all duration-500 flex items-center justify-center gap-3 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-white hover:shadow-glow-purple hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>TRANSMISSION COMPLETE</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>INITIATE TRANSMISSION</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="info-card glass rounded-2xl p-6">
              <h3 className="font-orbitron font-bold text-lg text-white mb-4">
                CONNECTION STATUS
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-slate-300">Currently active on product engineering roles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Response time: ~24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Based in: Karachi, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-slate-300">(+92) 3400804611</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300 text-sm">kinghassaan99@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="info-card glass rounded-2xl p-6">
              <h3 className="font-orbitron font-bold text-lg text-white mb-4">
                ALTERNATIVE CHANNELS
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ background: `${link.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: link.color }} />
                      </div>
                      <span className="font-orbitron text-white flex-1">{link.label}</span>
                      <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">-&gt;</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="info-card glass rounded-2xl p-6">
              <h3 className="font-orbitron font-bold text-lg text-white mb-4">
                TRANSMISSION STATS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="font-orbitron font-bold text-2xl text-cyan-400">100%</div>
                  <div className="text-xs text-slate-500">Response Rate</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="font-orbitron font-bold text-2xl text-purple-400">&lt;24h</div>
                  <div className="text-xs text-slate-500">Avg. Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-purple-400" />
              <span className="font-orbitron text-white">SYED MUHAMMAD HASSAAN</span>
            </div>
            <div className="text-slate-500 text-sm">
              (c) 2026 All systems operational. Built with React and Tailwind.
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400 font-mono">SYSTEM.ONLINE</span>
            </div>
          </div>
        </div>
      </footer>

      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
    </section>
  );
}
