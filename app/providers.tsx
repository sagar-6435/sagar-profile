"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { CustomCursor } from "@/components/effects/CustomCursor";

type ExperienceContextValue = {
  introComplete: boolean;
  setIntroComplete: (value: boolean) => void;
  cursorState: "default" | "hover" | "project";
  setCursorState: (state: "default" | "hover" | "project") => void;
};

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function useExperience() {
  const ctx = useContext(ExperienceContext);
  if (!ctx) {
    throw new Error("useExperience must be used within Providers");
  }
  return ctx;
}

export function Providers({ children }: { children: ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "project">(
    "default",
  );

  const markIntro = useCallback((value: boolean) => setIntroComplete(value), []);

  const value = useMemo(
    () => ({
      introComplete,
      setIntroComplete: markIntro,
      cursorState,
      setCursorState,
    }),
    [introComplete, markIntro, cursorState],
  );

  return (
    <ExperienceContext.Provider value={value}>
      <SmoothScroll>
        <CustomCursor />
        {children}
      </SmoothScroll>
    </ExperienceContext.Provider>
  );
}
