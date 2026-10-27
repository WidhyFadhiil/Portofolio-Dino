"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useIntro } from "@/components/IntroContext";

const LOGS = [
  "$ boot widhy.dev",
  "✓ connecting to postgres ............ ok",
  "✓ warming redis cache ............... ok",
  "✓ compiling experience .............. ok",
  "✓ 0 errors — ready to ship",
];

/** Momen animasi utama: boot terminal → tirai terangkat → hero meledak masuk. Hanya sekali per sesi. */
export function Preloader() {
  const { setReady } = useIntro();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("intro-seen") === "1"; } catch {}
    const skip = seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (skip) {
      setVisible(false);
      setReady(true);
      return;
    }
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const start = performance.now();
    const DURATION = 1700;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      setProgress(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        try { sessionStorage.setItem("intro-seen", "1"); } catch {}
        setVisible(false);
        setTimeout(() => setReady(true), 380);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      root.style.overflow = "";
    };
  }, [setReady]);

  const shown = Math.min(LOGS.length, Math.floor((progress / 100) * LOGS.length) + 1);

  return (
    <AnimatePresence onExitComplete={() => (document.documentElement.style.overflow = "")}>
      {visible && (
        <motion.div
          key="preloader"
          aria-hidden
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-surface-lowest px-6"
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] } }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
        >
          <div className="w-full max-w-md font-mono text-[12px] leading-6 text-on-surface-variant">
            {LOGS.slice(0, shown).map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === 0 ? "text-secondary" : l.startsWith("✓") ? "text-tertiary/90" : ""}
              >
                {l}
              </motion.div>
            ))}
            <span className="animate-blink text-secondary">▍</span>
          </div>
          <div className="mt-10 w-full max-w-md">
            <div className="mb-2 flex items-end justify-between font-mono">
              <span className="text-[11px] text-outline">loading portfolio</span>
              <span className="font-display text-5xl font-bold tabular-nums text-on-surface">
                {progress}
                <span className="text-xl text-primary">%</span>
              </span>
            </div>
            <div className="h-[3px] overflow-hidden rounded-full bg-surface-high">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-container via-secondary to-tertiary shadow-[0_0_14px_rgba(96,213,245,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
