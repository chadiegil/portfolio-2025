"use client";

import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  level: number;
};

type TechHighlight = {
  label: string;
  value: string;
};

type AboutProps = {
  bio: string;
  skills: Skill[];
  techHighlights: TechHighlight[];
};

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedLevel, setDisplayedLevel] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = skill.level / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= skill.level) {
        setDisplayedLevel(skill.level);
        clearInterval(timer);
      } else {
        setDisplayedLevel(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, skill.level]);

  return (
    <div ref={barRef} className="space-y-2">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span className="font-medium text-white">{skill.name}</span>
        <span className="text-slate-400 tabular-nums">
          {displayedLevel}%
        </span>
      </div>
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={`relative h-full rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 transition-all duration-1000 ease-out ${
            isVisible ? "skill-bar-fill" : ""
          }`}
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            animationDelay: isVisible ? `${index * 0.1}s` : "0s",
          }}
          aria-label={`${skill.name} proficiency ${skill.level}%`}
        >
          {/* Shimmer effect */}
          {isVisible && (
            <div
              className="skill-bar-shimmer absolute inset-0 rounded-full overflow-hidden"
              style={{
                background: "linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
                width: "50%",
                animationDelay: `${1.5 + index * 0.1}s`,
              }}
            />
          )}
          {/* Glow overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-300/20 via-transparent to-amber-300/20" />
        </div>
      </div>
    </div>
  );
}

export default function About({ bio, skills, techHighlights }: AboutProps) {
  return (
    <section id="about" className="relative scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              About
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Product-focused engineer spanning frontend and backend
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">{bio}</p>
            <div className="pill inline-flex items-center gap-3 px-4 py-3 text-sm text-slate-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
              Available for select collaborations and full-time roles.
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden rounded-3xl p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-400/15 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-orange-500/14 blur-3xl" />
            <div className="relative">
              <h3 className="mb-6 text-lg font-semibold text-white">
                Skills snapshot
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
              <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                  Tech stack snapshot
                </p>
                <div className="space-y-4 text-sm text-slate-300">
                  {techHighlights.map((item) => (
                    <div key={item.label}>
                      <span className="font-semibold text-white">{item.label}: </span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

