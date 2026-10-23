"use client";

import { motion } from "motion/react";
import { testimonials } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SpotlightCard, ease } from "@/components/ui/motion";
import { Heading } from "./Heading";

const tone = {
  primary: { star: "text-tertiary", av: "bg-primary/20 text-primary" },
  secondary: { star: "text-secondary", av: "bg-secondary/20 text-secondary" },
  tertiary: { star: "text-tertiary", av: "bg-tertiary/20 text-tertiary" },
} as const;

export function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <Heading label="[ 06 // TESTIMONIALS ]" parts={[{ text: "What Engineering Leaders Say" }]} />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => {
          const c = tone[t.tone as keyof typeof tone];
          return (
            <SpotlightCard
              key={t.name}
              tilt={8}
              initial={{ opacity: 0, y: 60, rotate: i === 0 ? -3 : i === 2 ? 3 : 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.14 }}
              whileHover={{ y: -8 }}
              className="flex flex-col justify-between rounded-xl border border-outline-variant bg-surface-container p-6"
            >
              <div className="space-y-4">
                <div className={`flex gap-0.5 ${c.star}`}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <motion.span key={s} initial={{ scale: 0, rotate: -90 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.4 + i * 0.14 + s * 0.08 }}>
                      <Icon name="star" className="size-5 fill-current" />
                    </motion.span>
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed text-on-surface-variant">“{t.quote}”</p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-outline-variant/60 pt-5">
                <div className={`grid size-10 place-items-center rounded-full font-mono text-[13px] font-bold ${c.av}`}>{t.initials}</div>
                <div>
                  <h4 className="font-mono text-[13px] font-semibold">{t.name}</h4>
                  <p className="font-mono text-[11px] text-outline">{t.role}</p>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
