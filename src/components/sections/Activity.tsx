"use client";

import { useMemo, useRef, type CSSProperties } from "react";
import { motion, useInView } from "motion/react";
import { profile } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { CountUp, Reveal } from "@/components/ui/motion";
import { Heading } from "./Heading";

const levels = ["bg-surface-high", "bg-tertiary-container/40", "bg-tertiary-container/80", "bg-tertiary"];

export function Activity() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cells = useMemo(
    () => Array.from({ length: 52 * 7 }, (_, i) => {
      const r = (Math.sin(i * 3.7) + 1) / 2;
      return r > 0.88 ? 3 : r > 0.7 ? 2 : r > 0.4 ? 1 : 0;
    }),
    [],
  );
  const metrics = [
    { icon: "commit", tone: "text-tertiary", value: 1840, suffix: "+", label: "Commits this year" },
    { icon: "repos", tone: "text-primary", value: 38, suffix: "", label: "Public Repositories" },
    { icon: "star", tone: "text-secondary", value: 420, suffix: "+", label: "GitHub Stars Earned" },
  ];

  return (
    <section id="activity" className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <Heading label="[ 04 // ACTIVITY ]" parts={[{ text: "Open Source & Continuous Code" }]} />
        <Reveal>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-4 font-mono text-[11px] transition-colors hover:border-primary">
            <Icon name="terminal" className="size-4" /> Follow @widhyfadhiil on GitHub
          </a>
        </Reveal>
      </div>

      <Reveal className="mt-10 flex flex-col gap-6 rounded-2xl border border-outline-variant bg-surface-container p-6 shadow-lg md:p-8">
        <div className="grid gap-4 border-b border-outline-variant pb-6 sm:grid-cols-3">
          {metrics.map((m) => (
            <motion.div key={m.label} whileHover={{ x: 6 }} className="flex items-center gap-3">
              <div className={`grid size-10 place-items-center rounded-lg bg-surface-high ${m.tone}`}><Icon name={m.icon} className="size-5" /></div>
              <div>
                <div className="font-display text-xl font-bold"><CountUp value={m.value} suffix={m.suffix} duration={2.6} /></div>
                <div className="font-mono text-[11px] text-outline">{m.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="mb-1 flex min-w-[720px] justify-between font-mono text-[11px] text-outline">
            {["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Dec"].map((x) => <span key={x}>{x}</span>)}
          </div>
          <div ref={ref} data-in={inView} className="gh-grid grid w-max min-w-[720px] grid-flow-col grid-rows-7 gap-1.5 py-1">
            {cells.map((lv, i) => (
              <span key={i} title={`Day ${i + 1} activity`} style={{ "--c": Math.floor(i / 7), "--r": i % 7 } as CSSProperties} className={`gh-cell size-2.5 rounded-sm ${levels[lv]}`} />
            ))}
          </div>
          <div className="flex items-center justify-between pt-3 font-mono text-[11px] text-outline">
            <span className="flex items-center gap-1.5"><span className="size-2 animate-pulse rounded-full bg-tertiary" /> Active commit streak: 46 days</span>
            <div className="flex items-center gap-1">
              <span>Less</span>{levels.map((l) => <span key={l} className={`size-2.5 rounded-sm ${l}`} />)}<span>More</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
