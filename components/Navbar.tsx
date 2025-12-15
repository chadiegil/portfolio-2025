import Link from "next/link";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-6">
        <div className="glass-panel flex w-full items-center justify-between rounded-full px-5 py-3">
          <div className="flex items-center gap-3">
            <span className="dot" aria-hidden />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-white">
                Chadie Gil S. Augis
              </span>
              <span className="text-xs text-slate-400">
                Software Engineer · Full-stack
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="pill hidden items-center gap-2 bg-orange-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-orange-400 md:inline-flex"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}

