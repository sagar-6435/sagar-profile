"use client";

import { useRef, type HTMLAttributes, type ReactNode } from "react";
import { useExperience } from "@/app/providers";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { cn } from "@/lib/cn";

type MagneticProps = HTMLAttributes<HTMLElement> & {
  as?: "button" | "a";
  href?: string;
  children: ReactNode;
  strength?: number;
};

export function Magnetic({
  as = "button",
  href,
  children,
  className,
  strength = 18,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const touch = useIsTouchDevice();
  const { setCursorState } = useExperience();

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    if (touch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  };

  const reset = (event: React.MouseEvent<HTMLElement>) => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
    setCursorState("default");
    onMouseLeave?.(event);
  };

  const enter = (event: React.MouseEvent<HTMLElement>) => {
    setCursorState("hover");
    onMouseEnter?.(event);
  };

  const shared = {
    ref,
    className: cn("magnetic-btn will-change-transform", className),
    onMouseMove: onMove,
    onMouseLeave: reset,
    onMouseEnter: enter,
    ...rest,
  };

  if (as === "a") {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        {...shared}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...shared}>
      {children}
    </button>
  );
}
