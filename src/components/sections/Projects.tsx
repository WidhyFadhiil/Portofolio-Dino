"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { projects, profile, toneText, type Category } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { CountUp, SpotlightCard, ease } from "@/components/ui/motion";
import { Heading } from "./Heading";

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend / APIs" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "opensource", label: "Open Source" },
];

const seed = [45, 40, 48, 30, 32, 18, 22, 10, 15, 8, 14, 5, 12, 4, 9, 3];

function LiveTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const [pts, setPts] = useState<number[]>(seed);
  const [m, setM] = useState({ threads: 16, depth: 0, rate: 28.4, lat: 1.82 });

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setPts((p) => [...p.slice(1), 3 + Math.random() * 14 + (p[p.length - 1] < 10 ? 6 : 0)]);
      setM({
        threads: 14 + Math.floor(Math.random() * 5),
        depth: Math.floor(Math.random() * 3),
        rate: 27.6 + Math.random() * 1.6,
        lat: 1.6 + Math.random() * 0.5,
      });
    }, 900);
    return () => clearInterval(id);
  }, [inView]);

  const line = pts.map((y, i) => `${i === 0 ? "M" : "L"}${(i * 300) / (pts.length - 1)} ${y}`).join(" ");

  return (
    <div ref={ref} className="overflow-hidden rounded-xl border border-outline-variant bg-surface-lowest shadow-2xl">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-high px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-error" /><span className="size-3 rounded-full bg-yellow-500" /><span className="size-3 rounded-full bg-tertiary" />
          <span className="ml-2 font-mono text-[11px] text-outline">nexusflow-cluster-01.local</span>
        </div>
        <Icon name="activity" className="size-4 animate-pulse text-tertiary" />
      </div>
      <div className="space-y-2 p-4 font-mono text-[11px] tabular-nums">
        <div className="flex items-center justify-between text-tertiary"><span>[STATUS] 4 Cluster Nodes Healthy</span><span className="text-outline">uptime: 412d 14h</span></div>
        <div className="text-on-surface-variant">&gt; worker-group: <b className="text-secondary">{m.threads} active threads</b></div>
        <div className="text-on-surface-variant">&gt; queue_depth: <b className="text-tertiary">{m.depth} msg (drain: {m.rate.toFixed(1)}k/s)</b></div>
        <div className="text-on-surface-variant">&gt; ack_latency_p99: <b className="text-primary">{m.lat.toFixed(2)} ms</b></div>
        <div className="pt-3">
          <span className="text-[10px] uppercase text-outline">Throughput Graph (live)</span>
          <svg viewBox="0 0 300 60" className="mt-1 h-20 w-full text-primary" fill="none" preserveAspectRatio="none">
            <path d={`${line} L300 60 L0 60 Z`} fill="currentColor" fillOpacity="0.12" />
            <motion.path d={line} stroke="currentColor" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Flagship() {
  return (
    <motion.div layout exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}>
      <SpotlightCard tilt={2} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, ease }} className="rounded-2xl border border-outline-variant bg-surface-container p-6 shadow-xl md:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded border border-tertiary/40 bg-tertiary-container/30 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-tertiary">Flagship Case Study</span>
              <span className="font-mono text-[11px] text-outline">Go • Redis Streams • Docker</span>
            </div>
            <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">NexusFlow Distributed Event Queue</h3>
            <div className="space-y-3 text-sm leading-relaxed text-on-surface-variant">
              <p><b className="text-on-surface">The Challenge:</b> E-commerce checkout systems faced sudden unhandled traffic spikes causing API timeouts and race-condition stock drops.</p>
              <p><b className="text-on-surface">The Architecture:</b> Built a distributed pub/sub event pipeline in Go utilizing Redis streams and partitioned worker pools. Implemented backpressure signaling, idempotency keys, and automated failover dead-letter queues.</p>
              <div className="flex items-center gap-3 rounded-lg border border-outline-variant/60 bg-surface-low p-3">
                <Icon name="trending" className="size-6 shrink-0 text-tertiary" />
                <span className="font-mono text-[13px] font-medium text-on-surface">
                  Outcome: Reduced message processing latency by <b className="text-tertiary"><CountUp value={68} suffix="%" /></b> and stabilized throughput to 28,000 ops/sec under peak load.
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Golang 1.22", "Redis Streams", "PostgreSQL", "Docker", "Prometheus"].map((t, i) => (
                <motion.span key={t} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.07, type: "spring", stiffness: 400, damping: 18 }} whileHover={{ y: -3 }} className="rounded bg-surface-highest px-2.5 py-1 font-mono text-[11px]">{t}</motion.span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 font-mono text-[13px] font-semibold text-on-primary-container transition-shadow hover:shadow-[0_0_24px_rgba(125,132,255,0.5)]"><Icon name="external" className="size-4" /> Live Demo</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-high px-4 py-2 font-mono text-[13px] transition-colors hover:border-primary"><Icon name="terminal" className="size-4" /> View GitHub Repo</a>
            </div>
          </div>
          <div className="lg:col-span-5"><LiveTerminal /></div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const list = projects.filter((p) => filter === "all" || p.category === filter);
  const showFlagship = filter === "all" || filter === "backend";

  return (
    <section id="projects" className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Heading label="[ 03 // PORTFOLIO ]" parts={[{ text: "Featured Engineering Work" }]} />
        <div role="tablist" aria-label="Filter proyek" className="flex flex-wrap gap-1 self-start rounded-lg border border-outline-variant bg-surface-container p-1">
          {filters.map((f) => (
            <button key={f.id} role="tab" aria-selected={filter === f.id} onClick={() => setFilter(f.id)} className={`relative min-h-10 rounded px-3 font-mono text-[11px] transition-colors ${filter === f.id ? "font-semibold text-on-primary-container" : "text-on-surface-variant hover:text-on-surface"}`}>
              {filter === f.id && <motion.span layoutId="filter-pill" transition={{ type: "spring", stiffness: 400, damping: 30 }} className="absolute inset-0 rounded bg-primary-container" />}
              <span className="relative">{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-10 flex flex-col gap-6">
        <AnimatePresence mode="popLayout">{showFlagship && <Flagship key="flagship" />}</AnimatePresence>
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <SpotlightCard
                key={p.title}
                layout
                tilt={7}
                initial={{ opacity: 0, scale: 0.88, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.25 } }}
                transition={{ duration: 0.7, ease, delay: (i % 2) * 0.1 }}
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
                <div className="flex items-center justify-between border-t border-outline-variant/60 pt-4 font-mono text-[11px]">
                  <a href="#contact" className={`group flex min-h-9 items-center gap-1.5 ${toneText[p.tone]}`}><Icon name={p.category === "opensource" ? "pkg" : "eye"} className="size-4" /><span className="group-hover:underline">{p.linkLabel}</span></a>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex min-h-9 items-center gap-1.5 text-on-surface-variant transition-colors hover:text-on-surface"><Icon name="terminal" className="size-4" />{p.repoLabel}</a>
                </div>
              </SpotlightCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
