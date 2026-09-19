"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/data/portfolio";
import { useExperience } from "@/app/providers";
import { cn } from "@/lib/cn";

type Props = {
  project: Project;
  index: number;
  onOpen: () => void;
};

export function ProjectCard({ project, index, onOpen }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const { setCursorState } = useExperience();
  const invert = index % 2 === 1;

  const tilt = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(1200px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-4px)`;
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      onMouseMove={tilt}
      onMouseEnter={() => setCursorState("project")}
      onMouseLeave={() => {
        setCursorState("default");
        if (ref.current) ref.current.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
      }}
      className={cn(
        "group grid w-full gap-8 text-left transition-transform duration-300 lg:grid-cols-12 lg:items-center",
        invert && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div className="relative overflow-hidden border border-white/10 lg:col-span-7">
        <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[inset_0_0_0_1px_rgba(77,141,255,0.45)]" />
        <Image
          src={project.image}
          alt={`${project.title} visual`}
          width={1400}
          height={900}
          className="h-[46vw] max-h-[460px] min-h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="mono absolute top-4 left-4 z-10 bg-black/50 px-3 py-1 text-[10px] tracking-[0.28em] backdrop-blur">
          {String(index + 1).padStart(2, "0")} / {project.year}
        </span>
      </div>
      <div className="lg:col-span-5">
        <p className="mono text-[10px] tracking-[0.32em] text-[var(--accent)]">
          {project.category}
        </p>
        <h3 className="display mt-3 text-3xl md:text-5xl">{project.title}</h3>
        <p className="mt-4 max-w-md text-[15px] leading-7 text-[var(--muted)]">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={tech}
              className="mono border border-white/10 px-2 py-1 text-[10px] tracking-[0.16em] text-[var(--muted)] transition-transform duration-300 group-hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mono mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.28em]">
          Open dossier <ArrowUpRight size={14} />
        </p>
      </div>
    </button>
  );
}
