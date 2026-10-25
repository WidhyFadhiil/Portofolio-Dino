"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { CountUp, Reveal, SpotlightCard, ease } from "@/components/ui/motion";
import { Heading } from "./Heading";

export type Repo = { name: string; description: string | null; language: string | null; stars: number; url: string };
export type GhData = { repos: number; followers: number; stars: number; latest: Repo[] } | null;

export function ActivityView({ data }: { data: GhData }) {
  const metrics = data
    ? [
        { icon: "repos", tone: "text-primary", value: data.repos, label: "Public Repositories" },
        { icon: "star", tone: "text-secondary", value: data.stars, label: "Stars Earned" },
        { icon: "chat", tone: "text-tertiary", value: data.followers, label: "Followers" },
      ]
    : [];

  return (
    <section id="activity" className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <Heading label="[ 04 // GITHUB ]" parts={[{ text: "Open Source & Code" }]} note="Live numbers pulled from my public GitHub profile." />
        <Reveal>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-4 font-mono text-[11px] transition-colors hover:border-primary">
            <Icon name="terminal" className="size-4" /> Follow @{profile.githubUser} on GitHub
          </a>
        </Reveal>
      </div>

      {data && (
        <div className="mt-10 flex flex-col gap-6">
          <Reveal className="grid gap-4 rounded-2xl border border-outline-variant bg-surface-container p-6 shadow-lg sm:grid-cols-3">
            {metrics.map((m) => (
              <motion.div key={m.label} whileHover={{ x: 6 }} className="flex items-center gap-3">
                <div className={`grid size-10 place-items-center rounded-lg bg-surface-high ${m.tone}`}><Icon name={m.icon} className="size-5" /></div>
                <div>
                  <div className="font-display text-2xl font-bold"><CountUp value={m.value} duration={2} /></div>
                  <div className="font-mono text-[11px] text-outline">{m.label}</div>
                </div>
              </motion.div>
            ))}
          </Reveal>

          {data.latest.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.latest.map((r, i) => (
                <SpotlightCard
                  key={r.name}
                  tilt={6}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, ease, delay: (i % 3) * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-xl border border-outline-variant bg-surface-container"
                >
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col gap-2 p-5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-mono text-[13px] font-semibold text-primary"><Icon name="repos" className="size-4" />{r.name}</span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-outline"><Icon name="star" className="size-3.5" />{r.stars}</span>
                    </div>
                    <p className="line-clamp-2 text-xs leading-relaxed text-on-surface-variant">{r.description ?? "No description yet."}</p>
                    {r.language && <span className="mt-auto w-fit rounded bg-surface-high px-2 py-0.5 font-mono text-[11px]">{r.language}</span>}
                  </a>
                </SpotlightCard>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
