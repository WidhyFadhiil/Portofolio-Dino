"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react";

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

function Row({ items, base, outline }: { items: string[]; base: number; outline?: boolean }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const skew = useTransform(smooth, [-1500, 0, 1500], [-8, 0, 8]);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    let move = dir.current * base * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * f;
    baseX.set(baseX.get() + move);
  });

  const group = (k: number) => (
    <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
      {items.map((t) => (
        <span key={t} className="flex items-center">
          <span
            className={`px-6 font-display text-4xl font-bold tracking-tight sm:text-6xl ${outline ? "text-transparent [-webkit-text-stroke:1px_rgba(198,197,214,0.45)]" : "text-on-surface/90"}`}
          >
            {t}
          </span>
          <span className="size-2 rounded-full bg-gradient-to-br from-primary-container to-secondary" />
        </span>
      ))}
    </div>
  );

  return (
    <motion.div style={{ skewX: skew }} className="overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }} className="flex w-max">{[0, 1].map(group)}</motion.div>
    </motion.div>
  );
}

/** Marquee yang kecepatan & arahnya bereaksi terhadap kecepatan scroll. */
export function VelocityMarquee({ items }: { items: string[] }) {
  const half = Math.ceil(items.length / 2);
  return (
    <div className="relative z-10 flex flex-col gap-2 border-y border-outline-variant/40 bg-surface/40 py-6 backdrop-blur-[2px] [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <Row items={items.slice(0, half)} base={-3} />
      <Row items={items.slice(half)} base={3} outline />
    </div>
  );
}
