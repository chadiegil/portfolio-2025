import Link from "next/link";

type HeroProps = {
  name: string;
  title: string;
  tagline: string;
};

export default function Hero({ name, title, tagline }: HeroProps) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pb-20 pt-32"
    >
      <div className="glow" aria-hidden />
      <div className="grid-overlay" aria-hidden />

      <div className="absolute inset-0 opacity-70 blur-3xl">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-500/25 mix-blend-screen animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-orange-400/20 mix-blend-screen animate-[float_14s_ease-in-out_infinite]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          <span className="pill bg-white/5 px-4 py-2 text-orange-100">
            Software Engineer
          </span>
          <span className="pill border-white/10 bg-white/5 px-4 py-2 text-orange-50">
            Full-stack
          </span>
          <span className="pill border-white/10 bg-white/5 px-4 py-2 text-slate-200">
            Product-Minded
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Portfolio 2025
            </p>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {name}
              </h1>
              <p className="text-xl font-medium text-slate-300 sm:text-2xl">
                {title}
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
                {tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="pill flex items-center gap-2 bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="pill px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-[2px] hover:border-white/30"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-10 shadow-2xl backdrop-blur">
            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-orange-400/18 blur-3xl" />
            <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-orange-500/18 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3 text-sm text-slate-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
                Currently open for select freelance and product collaborations.
              </div>
              <div className="grid gap-4 rounded-2xl bg-slate-900/60 p-6 backdrop-blur">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-300">
                  <span className="font-medium">Recent stack</span>
                  <span className="pill px-3 py-1 text-xs text-orange-100 text-center sm:text-left">
                    React 19 · Next.js 16 · Node.js · Postgres
                  </span>
                </div>
                <div className="grid gap-2 text-sm text-slate-300">
                  <span className="font-semibold text-white">Focus areas</span>
                  <ul className="grid gap-2 text-slate-400 md:grid-cols-2">
                    <li className="pill px-3 py-2">Design systems</li>
                    <li className="pill px-3 py-2">High-perf UI</li>
                    <li className="pill px-3 py-2">UX research</li>
                    <li className="pill px-3 py-2">Data viz</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

