import { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, User, Code2, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { gsap } from 'gsap';

const navItems = [
  { id: 'hero', label: 'STATUS', icon: User },
  { id: 'skills', label: 'ARSENAL', icon: Code2 },
  { id: 'experience', label: 'LOG', icon: Briefcase },
  { id: 'projects', label: 'QUESTS', icon: FolderGit2 },
  { id: 'contact', label: 'UPLINK', icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate nav entrance
    gsap.fromTo(
      '.nav-item',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 1 }
    );
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`mx-auto px-6 transition-all duration-500 ${
            isScrolled
              ? 'max-w-4xl glass rounded-full mx-4 sm:mx-auto mt-4'
              : 'max-w-7xl'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Gamepad2 className="w-8 h-8 text-purple-500" />
                <div className="absolute inset-0 animate-glow-pulse text-purple-500" />
              </div>
              <span className="font-orbitron font-bold text-xl text-gradient hidden sm:block">
                {isScrolled ? 'HASSAAN' : 'SYED MUHAMMAD HASSAAN'}
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-item btn-holo relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                    isActive
                      ? 'text-cyan-300'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span className="font-orbitron text-sm tracking-wider">
                        {item.label}
                      </span>
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-fuchsia-400 rounded-full" />
                    )}
                    <span className="absolute inset-0 rounded-lg bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
        <div className="absolute top-20 left-4 right-4 glass rounded-2xl p-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-purple-500/20 text-cyan-400 border border-purple-500/50'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-orbitron text-lg tracking-wider">
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Level Indicator */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <span className="font-orbitron font-bold text-white text-sm">LV</span>
          </div>
          <div>
            <div className="font-orbitron text-xs text-slate-400">LEVEL</div>
            <div className="font-orbitron font-bold text-white">26</div>
          </div>
          <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <button
          onClick={() => scrollToSection('contact')}
          className="btn-holo glass rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-purple-500/20 transition-colors group"
        >
          <Mail className="w-5 h-5 text-cyan-300 group-hover:scale-110 transition-transform" />
          <span className="font-orbitron text-sm text-white hidden sm:block">INITIATE CONTACT</span>
        </button>
      </div>
    </>
  );
}
