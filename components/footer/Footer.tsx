"use client";

import { portfolio } from "@/data/portfolio";
import { useExperience } from "@/app/providers";

export function Footer() {
  const { setCursorState } = useExperience();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-8">
      <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="mono text-[10px] tracking-[0.24em] text-[var(--muted)]">
          © {year} {portfolio.name} · LABORATORY
        </p>
        <a
          href="#top"
          className="nav-link"
          onMouseEnter={() => setCursorState("hover")}
          onMouseLeave={() => setCursorState("default")}
        >
          Back to signal
        </a>
      </div>
    </footer>
  );
}
