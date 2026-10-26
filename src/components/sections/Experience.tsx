"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience, toneBg, toneText } from "@/lib/data";
import { ease } from "@/components/ui/motion";
import { Heading } from "./Heading";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  return (
    <section id="experience" className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <Heading label="[ 05 // PENDIDIKAN & ORGANISASI ]" parts={[{ text: "Pendidikan & Organisasi" }]} />
      <div ref={ref} className="relative mt-14 space-y-14 pl-7 md:pl-10">
        <div aria-hidden className="absolute left-0 top-0 h-full w-px bg-outline-variant/60" />
        <motion.div aria-hidden style={{ scaleY }} className="absolute left-0 top-0 -ml-px h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-primary via-secondary to-tertiary shadow-[0_0_14px_rgba(96,213,245,0.7)]" />

        {experience.map((e, i) => (
          <motion.article
            key={e.company}
            initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease }}
            className="group relative"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.15 }}
              className={`absolute -left-[36px] top-1.5 size-4 rounded-full border-4 border-surface md:-left-[48px] ${toneBg[e.tone as keyof typeof toneBg]}`}
            >
              {i === 0 && <span className="absolute inset-[-4px] animate-ping rounded-full bg-primary/50" />}
            </motion.span>
            <div className="mb-2 flex flex-col justify-between gap-1 md:flex-row md:items-center">
              <h3 className="font-display text-xl font-semibold">
                {e.role} <span className={`font-normal ${toneText[e.tone as keyof typeof toneText]}`}>• {e.company}</span>
              </h3>
              <span className={`w-fit rounded bg-surface-container px-2.5 py-1 font-mono text-[11px] font-medium ${i === 0 ? "text-tertiary" : "text-outline"}`}>{e.period}</span>
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-on-surface-variant transition-colors group-hover:text-on-surface">{e.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {e.tags.map((t, j) => (
                <motion.span key={t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + j * 0.08 }} className="rounded bg-surface-container px-2 py-0.5 font-mono text-[11px] text-outline">{t}</motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
