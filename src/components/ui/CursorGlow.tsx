"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Kursor kustom: titik + cincin magnetis + cahaya ambient yang mengikuti dengan delay. Hanya di desktop. */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const dotX = useSpring(x, { stiffness: 900, damping: 45, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 900, damping: 45, mass: 0.2 });
  const ringX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.4 });
  const glowX = useSpring(x, { stiffness: 50, damping: 20 });
  const glowY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const fine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const t = e.target as Element | null;
      setHover(!!t?.closest?.("a,button,[data-cursor],input,textarea,select,label"));
    };
    const dn = () => setDown(true);
    const up = () => setDown(false);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", dn);
    window.addEventListener("pointerup", up);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", dn);
      window.removeEventListener("pointerup", up);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute left-0 top-0 -ml-[260px] -mt-[260px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(125,132,255,0.16),rgba(96,213,245,0.05)_45%,transparent_70%)]"
      />
      <motion.div style={{ x: ringX, y: ringY }} className="absolute left-0 top-0">
        <motion.div
          animate={{ scale: down ? 0.7 : hover ? 1.9 : 1, opacity: hover ? 1 : 0.7 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`-ml-5 -mt-5 h-10 w-10 rounded-full border ${hover ? "border-secondary bg-secondary/10" : "border-primary/60"}`}
        />
      </motion.div>
      <motion.div style={{ x: dotX, y: dotY }} className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-secondary" />
    </div>
  );
}
