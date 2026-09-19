"use client";

import { useEffect, useState } from "react";

export function useIsTouchDevice() {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setTouch(coarse);
  }, []);

  return touch;
}
