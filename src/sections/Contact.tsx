import { useEffect, useRef, useState } from 'react';
import { SketchButton, SectionHeading, SketchCard, Squiggle } from '@/components/ui/sketch';
import { revealHeadings, placeIn, slideIn, drawIn } from '@/lib/motion';
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
  ArrowRight,
  Copy,
} from 'lucide-react';

const EMAIL = 'kinghassaan99@gmail.com';

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

// Email should be one tap, not a string to copy by hand off a phone screen.
const facts = [
  { icon: Clock, text: 'I reply within about a day' },
  { icon: MapPin, text: 'Based in Karachi, Pakistan' },
  { icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
];

const fieldClasses =
  'w-full rounded-wobblySm border-2 border-ink bg-white px-4 py-3 font-hand text-lg text-ink placeholder:text-ink-faint focus:border-pen focus:outline-none focus:ring-2 focus:ring-pen/20';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealHeadings(sectionRef.current!);
      placeIn('.contact-panel', sectionRef.current!, { stagger: 0.12 });
      drawIn('.contact-draw', sectionRef.current!, 0.3);
      slideIn('.contact-link', '.contact-links', 0.07);
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
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // Handing off to a mail client isn't a confirmed send: it can be blocked,
    // or land somewhere the writer never sees. Return the button so a second
    // attempt — or the copy-the-address fallback — is always available.
    window.setTimeout(() => setIsSubmitted(false), 6000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard denied — the mailto link next to this still works.
    }
  };

  return (
    <>
    <section ref={sectionRef} id="contact" className="relative px-6 pb-10 pt-20">
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
              <Squiggle className="my-3 text-marker" drawClassName="contact-draw" />

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
                  {isSubmitted ? 'opening your mail app…' : 'send it'}
                </SketchButton>

                <p className="text-center font-hand text-base text-ink-faint">
                  this hands off to your mail app — nothing gets stored here.{' '}
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 text-pen underline-offset-4 hover:underline"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    ) : (
                      <Copy className="h-3.5 w-3.5" strokeWidth={2.5} />
                    )}
                    {copied ? 'copied' : 'or copy the address'}
                  </button>
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
                      <Icon className="mt-1 h-4 w-4 shrink-0 text-marker-deep" strokeWidth={2.5} />
                      {fact.href ? (
                        <a
                          href={fact.href}
                          className="inline-flex min-h-[44px] items-center break-all underline-offset-4 hover:underline"
                        >
                          {fact.text}
                        </a>
                      ) : (
                        fact.text
                      )}
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
              <div className="contact-links mt-4 space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link group flex items-center gap-3 rounded-wobblySm border-2 border-dashed border-ink px-3 py-2.5 transition-all duration-200 hover:-rotate-1 hover:border-solid hover:bg-postit hover:shadow-sketchSm"
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
                      <ArrowRight
                        className="ml-auto h-5 w-5 shrink-0 text-marker-deep transition-transform duration-100 group-hover:translate-x-1"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                    </a>
                  );
                })}
              </div>
            </SketchCard>
          </div>
        </div>
      </div>

    </section>

    {/* Footer — the bottom of the page, torn off. Page-level, so it sits
        outside the contact section rather than scoped to it. */}
    <footer className="mx-auto max-w-5xl border-t-[3px] border-dashed border-ink/40 px-6 pb-10 pt-8">
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
    </>
  );
}
