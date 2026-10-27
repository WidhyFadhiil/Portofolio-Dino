"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
  type MotionValue,
} from "motion/react";
import { useIntro } from "@/components/IntroContext";

export const ease = [0.22, 1, 0.36, 1] as const;
export type Part = { text: string; className?: string };

/** Muncul saat masuk viewport: fade + naik + blur hilang. */
export function Reveal({
  children, className, delay = 0, y = 40, x = 0, blur = 6,
}: { children: ReactNode; className?: string; delay?: number; y?: number; x?: number; blur?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Seperti Reveal, tapi menunggu preloader selesai (untuk hero). */
export function Intro({
  children, className, delay = 0, y = 30, scale = 1,
}: { children: ReactNode; className?: string; delay?: number; y?: number; scale?: number }) {
  const { ready } = useIntro();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale, filter: "blur(8px)" }}
      animate={ready ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : undefined}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const tags = { h1: motion.h1, h2: motion.h2, h3: motion.h3, p: motion.p } as const;

/** Teks naik kata demi kata dari balik "topeng". */
export function SplitText({
  parts, as = "h2", className, delay = 0, stagger = 0.055, immediate = false,
}: { parts: Part[]; as?: keyof typeof tags; className?: string; delay?: number; stagger?: number; immediate?: boolean }) {
  const { ready } = useIntro();
  const Tag = tags[as];
  const trigger = immediate
    ? { animate: ready ? "show" : "hidden" }
    : { whileInView: "show", viewport: { once: true, margin: "-80px" } };
  return (
    <Tag
      className={className}
      initial="hidden"
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...trigger}
    >
      {parts.flatMap((p, pi) =>
        p.text.split(" ").filter(Boolean).map((w, wi) => (
          <span key={`${pi}-${wi}`} className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
            <motion.span
              className={`inline-block will-change-transform ${p.className ?? ""}`}
              variants={{
                hidden: { y: "115%", rotate: 5, opacity: 0 },
                show: { y: 0, rotate: 0, opacity: 1, transition: { duration: 0.85, ease } },
              }}
            >
              {w}
            </motion.span>
            &nbsp;
          </span>
        )),
      )}
    </Tag>
  );
}

function Word({ progress, range, cls, children }: { progress: MotionValue<number>; range: [number, number]; cls?: string; children: ReactNode }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  const y = useTransform(progress, range, [8, 0]);
  return (
    <>
      <motion.span style={{ opacity, y }} className={`inline-block ${cls ?? ""}`}>{children}</motion.span>{" "}
    </>
  );
}

/** Paragraf yang "menyala" kata per kata mengikuti posisi scroll. */
export function ScrollText({ parts, className }: { parts: Part[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.88", "end 0.6"] });
  const words = parts.flatMap((p) => p.text.split(" ").filter(Boolean).map((w) => ({ w, cls: p.className })));
  return (
    <p ref={ref} className={className}>
      {words.map((o, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} cls={o.cls}>{o.w}</Word>
      ))}
    </p>
  );
}

/** Elemen "ditarik" mendekati kursor. */
export function Magnetic({ children, strength = 0.3, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.25 });
  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}

type CardProps = HTMLMotionProps<"div"> & { tilt?: number };

/** Kartu dengan border bercahaya mengikuti kursor + tilt 3D halus. */
export function SpotlightCard({ children, className = "", tilt = 5, style, ...rest }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });
  return (
    <motion.div
      ref={ref}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900, ...style }}
      className={`spotlight relative ${className}`}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
        ry.set((px - 0.5) * tilt * 2);
        rx.set(-(py - 0.5) * tilt * 2);
      }}
      onPointerLeave={() => { rx.set(0); ry.set(0); }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Angka menghitung naik saat terlihat. */
export function CountUp({ value, decimals = 0, suffix = "", duration = 2.2 }: { value: number; decimals?: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce) { ref.current.textContent = value.toFixed(decimals) + suffix; return; }
    const c = animate(0, value, {
      duration, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix; },
    });
    return () => c.stop();
  }, [inView, value, decimals, suffix, duration, reduce]);
  return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>;
}
