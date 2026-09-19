"use client";

import { useState } from "react";
import { portfolio, type Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-shell">
        <p className="mono text-[11px] tracking-[0.36em] text-[var(--muted)]">03 — WORK</p>
        <h2 className="display mt-5 max-w-3xl text-4xl md:text-6xl">
          Selected transmissions.
        </h2>
        <div className="mt-16 flex flex-col gap-20">
          {portfolio.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
