"use client";

import Image from "next/image";
import Link from "next/link";

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
      className="group relative block overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-4 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/10 hover:bg-white/8 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer h-full"
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

      <div className="relative mt-4 space-y-3 flex flex-col">
        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-orange-100 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-300 line-clamp-3 flex-grow">
          {project.description}
        </p>
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-200 transition group-hover:text-white pt-2">
          View project
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}


type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 mb-12">
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

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

