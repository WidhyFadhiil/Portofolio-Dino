"use client";

import { motion } from "motion/react";
import { stack, toneText } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SpotlightCard, ease } from "@/components/ui/motion";
import { Heading } from "./Heading";

export function TechStack() {
  return (
    <section id="tech-stack" className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <Heading
        label="[ 02 // TECH STACK ]"
        parts={[{ text: "Core Technologies & Toolchain" }]}
        note="Curated toolkit battle-tested in high-concurrency environments and real-world production."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stack.map((c, i) => (
          <SpotlightCard
            key={c.title}
            tilt={7}
            initial={{ opacity: 0, y: 70, rotateX: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.9, ease, delay: i * 0.12 }}
            className="group flex flex-col rounded-xl border border-outline-variant bg-surface-container p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.15 }}
                className={`grid size-10 place-items-center rounded-lg bg-surface-highest ${toneText[c.tone]}`}
              >
                <Icon name={c.icon} className="size-5" />
              </motion.div>
              <span className={`rounded bg-surface-lowest px-2 py-0.5 font-mono text-[10px] font-semibold uppercase ${toneText[c.tone]}`}>{c.badge}</span>
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold">{c.title}</h3>
            <p className="mb-6 text-xs leading-relaxed text-on-surface-variant">{c.desc}</p>
            <div className="mt-auto flex flex-col gap-2.5">
              {c.items.map(([name, level], j) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: i * 0.12 + 0.35 + j * 0.09 }}
                  whileHover={{ x: 6, backgroundColor: "#272a31" }}
                  className="flex items-center justify-between gap-2 rounded bg-surface-low p-2"
                >
                  <span className="font-mono text-[13px] font-medium">{name}</span>
                  <span className={`text-right font-mono text-[11px] ${level === "Daily Driver" ? "text-tertiary" : "text-outline"}`}>{level}</span>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
