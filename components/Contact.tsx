import Link from "next/link";
import type React from "react";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type ContactProps = {
  socialLinks: SocialLink[];
};

const fieldStyles =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 shadow-inner shadow-black/30 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/25";

export default function Contact({ socialLinks }: ContactProps) {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-10">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/60 to-slate-950/60" />
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Contact
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Let&apos;s build something delightful
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                Ready for collaborations, freelance engagements, or product
                conversations. Drop a note and I&apos;ll respond within one
                business day.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    aria-label={item.label}
                    className="pill flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-[2px] hover:border-orange-300/60"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <form className="relative space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className={fieldStyles}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={fieldStyles}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project or idea..."
                  className={`${fieldStyles} resize-none`}
                />
              </div>

              <p className="text-xs text-slate-500">
                This form is client-side only for now. Connect your preferred
                service (Formspree, Resend, etc.) to make it live.
              </p>

              <button
                type="submit"
                className="pill w-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.01]"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

