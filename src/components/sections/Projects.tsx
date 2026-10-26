"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, profile, toneText, type Category } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SpotlightCard, ease } from "@/components/ui/motion";
import { Heading } from "./Heading";

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "laravel", label: "Laravel" },
  { id: "codeigniter", label: "CodeIgniter" },
];

/** Bingkai browser dekoratif: tombol membuka demo asli. */
function BrowserFrame({ url }: { url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-outline-variant bg-surface-lowest shadow-2xl">
      <div className="flex items-center gap-2 border-b border-outline-variant bg-surface-high px-4 py-3">
        <span className="size-3 rounded-full bg-error" /><span className="size-3 rounded-full bg-yellow-500" /><span className="size-3 rounded-full bg-tertiary" />
        <span className="ml-2 flex-1 truncate rounded bg-surface-lowest px-3 py-1 font-mono text-[11px] text-on-surface-variant">{url.replace("https://", "")}</span>
      </div>
      <div className="relative space-y-3 p-5">
        <motion.div initial={{ width: 0 }} whileInView={{ width: "55%" }} viewport={{ once: true }} transition={{ duration: 1, ease }} className="h-5 rounded bg-gradient-to-r from-primary-container to-secondary" />
        {[90, 75, 82].map((w, i) => (
          <motion.div key={i} initial={{ width: 0 }} whileInView={{ width: `${w}%` }} viewport={{ once: true }} transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.12 }} className="h-2.5 rounded bg-surface-highest" />
        ))}
        <div className="grid grid-cols-3 gap-3 pt-2">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.12 }} className="h-16 animate-pulse rounded-lg bg-surface-high" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
        </div>
        <div className="absolute inset-0 grid place-items-center bg-surface-lowest/70 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-container to-secondary px-4 py-2 font-mono text-[13px] font-semibold text-on-primary-container">
            <Icon name="external" className="size-4" /> Open Live Demo
          </span>
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [flagship, ...others] = projects;
  const showFlagship = filter === "all" || filter === flagship.category;
  const list = others.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Heading label="[ 03 // PROJECTS ]" parts={[{ text: "Selected Projects" }]} />
        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-1 self-start rounded-lg border border-outline-variant bg-surface-container p-1">
          {filters.map((f) => (
            <button key={f.id} role="tab" aria-selected={filter === f.id} onClick={() => setFilter(f.id)} className={`relative min-h-10 rounded px-3 font-mono text-[11px] transition-colors ${filter === f.id ? "font-semibold text-on-primary-container" : "text-on-surface-variant hover:text-on-surface"}`}>
              {filter === f.id && <motion.span layoutId="filter-pill" transition={{ type: "spring", stiffness: 400, damping: 30 }} className="absolute inset-0 rounded bg-primary-container" />}
              <span className="relative">{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-10 flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
          {showFlagship && (
            <motion.div key="flagship" layout exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}>
              <SpotlightCard tilt={2} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, ease }} className="rounded-2xl border border-outline-variant bg-surface-container p-6 shadow-xl md:p-8">
                <div className="grid items-center gap-8 lg:grid-cols-12">
                  <div className="flex flex-col gap-4 lg:col-span-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded border border-tertiary/40 bg-tertiary-container/30 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-tertiary">Featured Project</span>
                      <span className="font-mono text-[11px] text-outline">{flagship.kind} • {flagship.year}</span>
                    </div>
                    <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{flagship.title}</h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">{flagship.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {flagship.tags.map((t, i) => (
                        <motion.span key={t} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.07, type: "spring", stiffness: 400, damping: 18 }} whileHover={{ y: -3 }} className="rounded bg-surface-highest px-2.5 py-1 font-mono text-[11px]">{t}</motion.span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {flagship.demo && <a href={flagship.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 font-mono text-[13px] font-semibold text-on-primary-container transition-shadow hover:shadow-[0_0_24px_rgba(125,132,255,0.5)]"><Icon name="external" className="size-4" /> Live Demo</a>}
                      <a href={flagship.repo ?? profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-high px-4 py-2 font-mono text-[13px] transition-colors hover:border-primary"><Icon name="terminal" className="size-4" /> GitHub</a>
                    </div>
                  </div>
                  <div className="lg:col-span-6">{flagship.demo && <BrowserFrame url={flagship.demo} />}</div>
                </div>
              </SpotlightCard>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <SpotlightCard
                key={p.title}
                layout
                tilt={7}
                initial={{ opacity: 0, scale: 0.88, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.25 } }}
                transition={{ duration: 0.7, ease }}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between rounded-xl border border-outline-variant bg-surface-container p-6"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between border-b border-outline-variant/60 pb-3">
                    <span className={`font-mono text-[11px] font-semibold ${toneText[p.tone]}`}>{p.kind}</span>
                    <span className="font-mono text-[11px] text-outline">{p.year}</span>
                  </div>
                  <h4 className="mb-2 font-display text-xl font-semibold">{p.title}</h4>
                  <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">{p.desc}</p>
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="rounded bg-surface-high px-2 py-0.5 font-mono text-[11px]">{t}</span>)}
                  </div>
                </div>
                <div className="flex items-center gap-5 border-t border-outline-variant/60 pt-4 font-mono text-[11px]">
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className={`group flex min-h-9 items-center gap-1.5 ${toneText[p.tone]}`}><Icon name="eye" className="size-4" /><span className="group-hover:underline">Live Demo</span></a>}
                  <a href={p.repo ?? profile.github} target="_blank" rel="noopener noreferrer" className="flex min-h-9 items-center gap-1.5 text-on-surface-variant transition-colors hover:text-on-surface"><Icon name="terminal" className="size-4" />Source Code</a>
                </div>
              </SpotlightCard>
            ))}
          </AnimatePresence>

          {filter === "all" && (
            <motion.a
              layout
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              whileHover={{ y: -6 }}
              className="group flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-outline-variant bg-surface-container/40 p-6 text-center transition-colors hover:border-primary"
            >
              <Icon name="rocket" className="size-8 text-outline transition-all group-hover:-translate-y-1 group-hover:text-primary" />
              <span className="font-display text-lg font-semibold">More projects coming soon</span>
              <span className="font-mono text-[11px] text-on-surface-variant">Follow the progress di GitHub →</span>
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
