"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Scroll halus ala "mentega" + anchor link (#id) otomatis ikut ter-smooth. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.085,
      wheelMultiplier: 0.95,
      anchors: { offset: -72 },
    });
    return () => lenis.destroy();
  }, []);
  return null;
}
