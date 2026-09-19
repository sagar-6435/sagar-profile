"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Magnetic } from "@/components/effects/Magnetic";
import { useExperience } from "@/app/providers";

export function Contact() {
  const { setCursorState } = useExperience();

  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-40">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, rgba(77,141,255,0.22), transparent 52%), radial-gradient(ellipse at 80% 0%, rgba(125,120,255,0.12), transparent 40%)",
        }}
      />
      <div className="section-shell relative">
        <p className="mono text-[11px] tracking-[0.36em] text-[var(--muted)]">06 — SIGNAL</p>
        <h2 className="display mt-6 max-w-4xl text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
          {portfolio.contact.headline}
        </h2>
        <p className="mt-6 max-w-lg text-[var(--muted)]">{portfolio.contact.note}</p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Magnetic as="a" href={`mailto:${portfolio.contact.email}`} className="primary">
            <Mail size={14} /> {portfolio.contact.email}
          </Magnetic>
          <Magnetic as="a" href={portfolio.resume}>
            Resume <ArrowUpRight size={14} />
          </Magnetic>
        </div>
        <div className="mt-14 flex flex-wrap gap-8">
          <a
            href={portfolio.social.github}
            className="nav-link inline-flex items-center gap-2"
            onMouseEnter={() => setCursorState("hover")}
            onMouseLeave={() => setCursorState("default")}
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={portfolio.social.linkedin}
            className="nav-link inline-flex items-center gap-2"
            onMouseEnter={() => setCursorState("hover")}
            onMouseLeave={() => setCursorState("default")}
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
