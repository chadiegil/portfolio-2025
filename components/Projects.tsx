"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

function ProjectCard(project: Project) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-shrink-0 block overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-4 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/10 hover:bg-white/8 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -inset-20 bg-gradient-to-br from-orange-500/14 via-transparent to-orange-400/18 blur-3xl" />
      </div>

      <div className="relative h-64 w-full overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(min-width: 1024px) 450px, (min-width: 768px) 400px, 350px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="pill bg-slate-900/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-4 space-y-3">
        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-orange-100">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-200 transition group-hover:text-white">
          View project
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ScrollableRow({ projects, reverse = false }: { projects: Project[]; reverse?: boolean }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftFade(scrollLeft > 10);
      setShowRightFade(scrollLeft < scrollWidth - clientWidth - 10);
    };

    checkScroll();
    container.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade gradient */}
      <div
        className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-24 sm:w-32 bg-gradient-to-r from-[#0c0e14] via-[#0c0e14]/80 to-transparent transition-opacity duration-300 ${
          showLeftFade ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Right fade gradient */}
      <div
        className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-24 sm:w-32 bg-gradient-to-l from-[#0c0e14] via-[#0c0e14]/80 to-transparent transition-opacity duration-300 ${
          showRightFade ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={scrollContainerRef}
        className="flex flex-row gap-4 sm:gap-6 overflow-x-auto overflow-y-visible scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          scrollSnapType: "x mandatory",
          paddingLeft: "clamp(1rem, calc((100vw - 450px) / 2), 50vw)",
          paddingRight: "clamp(1rem, calc((100vw - 450px) / 2), 50vw)",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="flex-shrink-0"
            style={{
              width: "clamp(280px, 85vw, 450px)",
              scrollSnapAlign: "center",
              scrollSnapStop: "always",
            }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  // Split projects into two rows
  const row1 = projects.filter((_, index) => index % 2 === 0);
  const row2 = projects.filter((_, index) => index % 2 === 1);

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Selected work
          </p>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Projects
            </h2>
            <p className="max-w-2xl text-base text-slate-400">
              Product-centric builds that blend interaction design, accessibility,
              and performant engineering. Each project includes a live demo or
              repository link.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* First row */}
        <ScrollableRow projects={row1} />
        {/* Second row */}
        <ScrollableRow projects={row2} reverse />
      </div>

      {/* Scroll hint */}
      <div className="mx-auto mt-10 max-w-6xl px-6">
        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <span className="animate-pulse">←</span>
          <span className="hidden sm:inline">Scroll horizontally to explore more projects</span>
          <span className="sm:hidden">Swipe to explore</span>
          <span className="animate-pulse">→</span>
        </div>
      </div>
    </section>
  );
}

