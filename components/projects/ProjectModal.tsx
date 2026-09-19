"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import { type Project } from "@/data/portfolio";
import { Magnetic } from "@/components/effects/Magnetic";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute inset-0 bg-black/70"
            aria-label="Close project"
            onClick={onClose}
          />
          <motion.article
            role="dialog"
            aria-modal
            aria-labelledby="project-title"
            className="relative max-h-[92vh] w-[min(920px,100%)] overflow-y-auto border border-white/10 bg-[#070b14] p-6 md:p-10"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 grid h-10 w-10 place-items-center border border-white/10"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <p className="mono text-[10px] tracking-[0.3em] text-[var(--accent)]">
              {project.category} · {project.year}
            </p>
            <h3 id="project-title" className="display mt-3 text-4xl md:text-5xl">
              {project.title}
            </h3>
            <Image
              src={project.image}
              alt=""
              width={1400}
              height={700}
              className="mt-6 h-56 w-full object-cover md:h-72"
            />
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mono text-[10px] tracking-[0.28em] text-[var(--muted)]">OVERVIEW</h4>
                <p className="mt-3 leading-7 text-[#d5dbea]">{project.overview}</p>
              </div>
              <div>
                <h4 className="mono text-[10px] tracking-[0.28em] text-[var(--muted)]">PROBLEM</h4>
                <p className="mt-3 leading-7 text-[#d5dbea]">{project.problem}</p>
              </div>
              <div className="md:col-span-2">
                <h4 className="mono text-[10px] tracking-[0.28em] text-[var(--muted)]">SOLUTION</h4>
                <p className="mt-3 leading-7 text-[#d5dbea]">{project.solution}</p>
              </div>
            </div>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="border-l border-[var(--accent)] pl-4 text-sm text-[var(--muted)]">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="mono border border-white/10 px-2 py-1 text-[10px] tracking-[0.16em]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Magnetic as="a" href={project.github} className="primary">
                <Github size={14} /> GitHub
              </Magnetic>
              <Magnetic as="a" href={project.live}>
                <ExternalLink size={14} /> Live
              </Magnetic>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
