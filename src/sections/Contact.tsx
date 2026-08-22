import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { BrutalButton, Sticker, Marquee } from '@/components/ui/brick';
import { scrollToId } from '@/lib/lenis';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Instagram,
  Check,
  MapPin,
  Clock,
  Phone,
  ArrowUp,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const socialLinks = [
  { icon: Github, label: 'GitHub', handle: '@Brxerq', url: 'https://github.com/Brxerq' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'syed-muhammad-hassaan',
    url: 'https://www.linkedin.com/in/syed-muhammad-hassaan/',
  },
  { icon: Instagram, label: 'Instagram', handle: '@ha_ssaann', url: 'https://www.instagram.com/ha_ssaann/' },
];

const facts = [
  { icon: Clock, text: 'I reply within about a day' },
  { icon: MapPin, text: 'Based in Karachi, Pakistan' },
  { icon: Phone, text: '(+92) 3400804611' },
  { icon: Mail, text: 'kinghassaan99@gmail.com' },
];

const fieldClasses =
  'w-full border-[3px] border-void bg-white px-4 py-3 font-grotesk text-lg font-medium text-void placeholder:text-void/35 focus:bg-brick-yell/20 focus:outline-none';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      // Giant heading — chars drop like bricks.
      const split = new SplitText('.contact-title-line', { type: 'chars' });
      splitRef.current = split;
      gsap.fromTo(
        split.chars,
        { yPercent: 120, opacity: 0, rotate: () => gsap.utils.random(-25, 25) },
        {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: { each: 0.03, from: 'start' },
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        },
      );

      gsap.fromTo(
        '.contact-panel',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', once: true },
        },
      );
    }, sectionRef);

    return () => {
      splitRef.current?.revert();
      ctx.revert();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio Contact: ${formData.name || 'New Message'}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');

    setIsSubmitted(true);
    window.location.href = `mailto:kinghassaan99@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section ref={sectionRef} id="contact" className="relative pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Sticker tone="orange" className="mb-5 -rotate-2">the last page</Sticker>

        <h2 className="contact-title-line text-[clamp(1.9rem,10.5vw,7rem)] leading-[0.95]">
          LET'S <span className="text-outline">TALK.</span>
        </h2>

        <p className="mt-5 max-w-xl text-lg font-medium text-void/70">
          Got something you want built, or half-built and stuck? Write it down
          below — I read everything.
        </p>

        <div className="mt-12 grid gap-10 pb-20 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="contact-panel border-[3px] border-void bg-white p-6 shadow-brutLg sm:p-8">
              <h3 className="inline-block -rotate-1 border-[3px] border-void bg-brick-lime px-3 py-1 text-xl shadow-brutSm">
                write me a note
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-display text-xs uppercase tracking-wide">
                    your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={fieldClasses}
                    placeholder="who's writing?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block font-display text-xs uppercase tracking-wide">
                    where do i reply?
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={fieldClasses}
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block font-display text-xs uppercase tracking-wide">
                    the note
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`${fieldClasses} resize-none`}
                    placeholder="what are we building?"
                  />
                </div>

                <BrutalButton
                  type="submit"
                  variant={isSubmitted ? 'dark' : 'primary'}
                  disabled={isSubmitted}
                  className="w-full"
                  icon={
                    isSubmitted ? (
                      <Check className="h-5 w-5" strokeWidth={3} />
                    ) : (
                      <Send className="h-5 w-5" strokeWidth={2.5} />
                    )
                  }
                >
                  {isSubmitted ? 'sent — check your mail app' : 'send it'}
                </BrutalButton>

                <p className="text-center font-mono text-xs uppercase tracking-widest text-void/40">
                  opens your mail app · nothing stored here
                </p>
              </form>
            </div>
          </div>

          {/* Side panels */}
          <div className="space-y-6 lg:col-span-2">
            <div className="contact-panel border-[3px] border-void bg-void p-6 text-white shadow-brutYell">
              <h3 className="text-xl text-brick-yell">the basics</h3>
              <ul className="mt-4 space-y-3">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <li key={fact.text} className="flex items-start gap-3 font-medium text-white/85">
                      <Icon className="mt-1 h-4 w-4 shrink-0 text-brick-pink" strokeWidth={3} />
                      {fact.text}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 border-t-[3px] border-dashed border-white/20 pt-4 font-display text-sm uppercase tracking-wide text-brick-lime">
                Currently taking on product engineering work.
              </p>
            </div>

            <div className="contact-panel border-[3px] border-void bg-white p-6 shadow-brut">
              <h3 className="text-xl">elsewhere</h3>
              <div className="mt-4 space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brut-press group flex items-center gap-3 border-[3px] border-void px-3 py-2.5 shadow-brutSm hover:bg-brick-pink"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border-[3px] border-void bg-bone">
                        <Icon className="h-4 w-4" strokeWidth={3} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-sm leading-tight">{link.label}</span>
                        <span className="block truncate font-mono text-xs text-void/55">{link.handle}</span>
                      </span>
                      <span className="font-display text-base">→</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => scrollToId('hero')}
              className="brut-press flex w-full items-center justify-center gap-2 border-[3px] border-void bg-brick-blue px-4 py-3 font-display text-sm uppercase shadow-brut"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={3} />
              back to the top
            </button>
          </div>
        </div>
      </div>

      {/* Ticker above footer */}
      <Marquee
        items={['LET’S BUILD SOMETHING', 'OPEN FOR WORK', 'AI ENGINEER', 'FULL-STACK', 'HASSAAN']}
        tone="pink"
        speed={20}
      />

      {/* Footer */}
      <footer className="border-b-[6px] border-void bg-void py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <span className="font-display text-lg text-white">SYED MUHAMMAD HASSAAN</span>
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">
            built with react + gsap + too much coffee — 2026
          </span>
          <span className="rotate-[-2deg] border-[3px] border-void bg-brick-yell px-3 py-1 font-display text-xs uppercase shadow-brutSm">
            thanks for scrolling
          </span>
        </div>
      </footer>
    </section>
  );
}
