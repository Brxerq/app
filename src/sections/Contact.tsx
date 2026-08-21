import { useEffect, useRef, useState } from 'react';
import { SketchButton, SectionHeading, SketchCard, Squiggle } from '@/components/ui/sketch';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
  'w-full rounded-wobblySm border-2 border-ink bg-white px-4 py-3 font-hand text-lg text-ink placeholder:text-ink/40 focus:border-pen focus:outline-none focus:ring-2 focus:ring-pen/20';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-panel',
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
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
    <section ref={sectionRef} id="contact" className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading label="the last page" title="let's" accent="talk" align="center">
          Got something you want built, or half-built and stuck? Write it down
          below — I read everything.
        </SectionHeading>

        <div className="grid gap-10 md:grid-cols-5">
          {/* The note you write on */}
          <div className="md:col-span-3">
            <SketchCard tone="white" decoration="tape" className="contact-panel -rotate-1 p-6 sm:p-8" solid>
              <h3 className="font-kalam text-2xl">write me a note</h3>
              <Squiggle className="my-3 text-marker" />

              <form onSubmit={handleSubmit} className="mt-5 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-hand text-lg">
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
                  <label htmlFor="email" className="mb-1.5 block font-hand text-lg">
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
                  <label htmlFor="message" className="mb-1.5 block font-hand text-lg">
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

                <SketchButton
                  type="submit"
                  variant={isSubmitted ? 'secondary' : 'primary'}
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
                </SketchButton>

                <p className="text-center font-hand text-base text-ink-faint">
                  this opens your mail app, nothing gets stored here
                </p>
              </form>
            </SketchCard>
          </div>

          {/* The margin notes */}
          <div className="space-y-6 md:col-span-2">
            <SketchCard tone="note" className="contact-panel rotate-1 p-6" solid>
              <h3 className="font-kalam text-2xl">the basics</h3>
              <ul className="mt-4 space-y-3">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <li key={fact.text} className="flex items-start gap-3 font-hand text-lg">
                      <Icon className="mt-1 h-4 w-4 shrink-0 text-marker" strokeWidth={2.5} />
                      {fact.text}
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 font-hand text-lg text-ink-soft">
                Currently taking on product engineering work.
              </p>
            </SketchCard>

            <SketchCard tone="white" className="contact-panel -rotate-1 p-6">
              <h3 className="font-kalam text-2xl">elsewhere</h3>
              <div className="mt-4 space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-wobblySm border-2 border-dashed border-ink px-3 py-2.5 transition-transform duration-100 hover:-rotate-1 hover:border-solid hover:bg-postit"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-blob border-2 border-ink bg-paper">
                        <Icon className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-kalam text-lg leading-tight">{link.label}</span>
                        <span className="block truncate font-hand text-base text-ink-faint">
                          {link.handle}
                        </span>
                      </span>
                      <span className="ml-auto font-hand text-lg text-marker">→</span>
                    </a>
                  );
                })}
              </div>
            </SketchCard>
          </div>
        </div>
      </div>

      {/* Footer — the bottom of the page, torn off */}
      <footer className="mx-auto mt-20 max-w-5xl border-t-[3px] border-dashed border-ink/40 pt-8">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="font-kalam text-xl">Syed Muhammad Hassaan</span>
          <span className="font-hand text-base text-ink-faint">
            drawn and built with React + Tailwind, 2026
          </span>
          <span className="rotate-2 rounded-wobblySm border-2 border-ink bg-postit px-3 py-1 font-hand text-base shadow-sketchSm">
            thanks for scrolling
          </span>
        </div>
      </footer>
    </section>
  );
}
