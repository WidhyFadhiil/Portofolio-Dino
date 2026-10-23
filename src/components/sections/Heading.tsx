"use client";

import { motion } from "motion/react";
import { Reveal, SplitText, ease, type Part } from "@/components/ui/motion";

export function Heading({ label, parts, note }: { label: string; parts: Part[]; note?: string }) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div className="flex flex-col gap-2">
        <Reveal y={16} blur={4}>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-secondary">{label}</span>
        </Reveal>
        <SplitText parts={parts} className="max-w-3xl font-display text-[1.6rem] font-semibold leading-tight tracking-tight sm:text-4xl" />
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          className="mt-2 block h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-primary-container to-secondary"
        />
      </div>
      {note && (
        <Reveal delay={0.2}>
          <p className="max-w-sm text-xs leading-relaxed text-outline">{note}</p>
        </Reveal>
      )}
    </div>
  );
}
