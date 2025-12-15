import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects, { type Project } from "@/components/Projects";

const projects: Project[] = [
  {
    title: "Meet Amiya",
    description:
      "Modern portfolio website featuring smooth animations, custom cursor interactions, and a beautiful dark-themed design. Built with Next.js and TypeScript.",
    image: "/placeholder-project.svg",
    link: "https://meetamiya.com/",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
  },
  {
    title: "Task/Project Management API",
    description:
      "Secure, role-based REST API for projects and tasks with Prisma + MongoDB, JWT auth, validation, logging, and full Docker setup.",
    image: "/placeholder-project.svg",
    link: "https://github.com/chadiegil/task-management-api",
    tags: ["Node.js", "Express", "TypeScript", "Prisma", "MongoDB", "Docker"],
  },
  {
    title: "E-commerce API",
    description:
      "Comprehensive commerce backend: auth, products, cart, orders, stock management, validation, logging, and Dockerized deployment.",
    image: "/placeholder-project.svg",
    link: "https://github.com/chadiegil/ecommerce-api",
    tags: ["Node.js", "Express", "TypeScript", "Prisma", "MongoDB", "Docker"],
  },
  {
    title: "Hono + Bun + Drizzle Boilerplate",
    description:
      "Lightweight backend starter on Bun with Hono router and Drizzle ORM, ready for Postgres, auth, and fast edge-style APIs.",
    image: "/placeholder-project.svg",
    link: "https://github.com/chadiegil/hono-bun-drizzle-backend-boiler-code-v2",
    tags: ["Hono", "Bun", "Drizzle", "Postgres", "Boilerplate"],
  },
  {
    title: "Quizmock (Fullstack Mock Exam)",
    description:
      "Fullstack mock exam platform with simulated tests, results, and a split frontend/backend codebase for realistic exam practice.",
    image: "/placeholder-project.svg",
    link: "https://github.com/chadiegil/quizmock-fullstack",
    tags: ["Fullstack", "TypeScript", "React", "Node.js", "Docker"],
  },
];

type Skill = {
  name: string;
  level: number;
};

type TechHighlight = {
  label: string;
  value: string;
};

const skills: Skill[] = [
  { name: "TypeScript · React · Next.js", level: 92 },
  { name: "Node.js · API Design · Postgres", level: 88 },
  { name: "Design Systems · Tokens · Accessibility", level: 90 },
  { name: "UI/UX · Prototyping · Figma", level: 86 },
  { name: "Cloud · CI/CD · Observability", level: 80 },
];

const techHighlights: TechHighlight[] = [
  {
    label: "Frontend",
    value: "React, Next.js, JavaScript, TypeScript, Tailwind CSS, React Native",
  },
  {
    label: "Backend",
    value: "Node.js, Express.js, Laravel, REST APIs, Swagger/OpenAPI, microservices",
  },
  {
    label: "Databases",
    value: "MySQL, PostgreSQL, MongoDB, DynamoDB, Firebase, Supabase",
  },
  {
    label: "Cloud & DevOps",
    value: "AWS (EC2, S3, Lambda, CloudFront), Cherry Servers, Docker, CI/CD",
  },
  {
    label: "Tools & Others",
    value: "Git, Jira, Postman, VS Code, Agile/Scrum, Linear",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/chadiegil",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M12 2C6.48 2 2 6.65 2 12.32c0 4.52 2.87 8.36 6.85 9.72.5.1.68-.23.68-.5 0-.25-.01-1.09-.02-1.97-2.78.62-3.37-1.23-3.37-1.23-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.08 1.56 1.08.9 1.58 2.37 1.12 2.95.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.38-2.05 1.01-2.77-.1-.25-.44-1.3.1-2.7 0 0 .83-.27 2.74 1.05a9.2 9.2 0 0 1 2.5-.35 9.2 9.2 0 0 1 2.5.35c1.9-1.32 2.73-1.05 2.73-1.05.55 1.4.21 2.45.1 2.7.63.72 1.01 1.64 1.01 2.77 0 3.98-2.34 4.86-4.57 5.11.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.5 3.97-1.36 6.84-5.2 6.84-9.72C22 6.65 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chadiegil",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.47 15H6.06V10h3.47Zm-1.73-9.52a2 2 0 1 1 .02-4 2 2 0 0 1-.02 4Zm11.2 9.52h-3.47v-3.87c0-.92-.02-2.1-1.28-2.1-1.29 0-1.49 1-1.49 2.03V18H9.26V10h3.33v1.01h.05c.46-.86 1.58-1.77 3.26-1.77 3.49 0 4.14 2.3 4.14 5.29Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero
          name="Chadie Gil S. Augis"
          title="Shipping resilient products end to end."
          tagline="I design and build full-stack experiences — pairing human-centered interfaces with reliable APIs, data models, and automation that scale with the product."
        />
        <Projects projects={projects} />
        <About
          bio="Hi, I’m Chadie Gil S. Augis — a software engineer who pairs frontend craft with backend rigor. I architect APIs, optimize databases, design reusable systems, and obsess over UX details so products feel cohesive from infrastructure to interaction."
          skills={skills}
          techHighlights={techHighlights}
        />
        <Contact socialLinks={socialLinks} />
      </main>
    </div>
  );
}
