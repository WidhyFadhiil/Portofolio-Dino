"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { profile } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Typed, type Token } from "@/components/ui/Typed";
import { Intro, Magnetic, SplitText } from "@/components/ui/motion";
import { useIntro } from "@/components/IntroContext";

const code: Token[] = [
  { text: "export const ", className: "text-secondary" },
  { text: "developer", className: "text-primary" },
  { text: " = {\n  name: " },
  { text: "'Widhy Fadhiil Aldino'", className: "text-tertiary" },
  { text: ",\n  role: " },
  { text: "'Backend & Cloud Systems'", className: "text-primary-fixed" },
  { text: ",\n  focus: [" },
  { text: "'Distributed Systems'", className: "text-secondary" },
  { text: ", " },
  { text: "'APIs'", className: "text-secondary" },
  { text: "],\n  status: " },
  { text: "'Ready for high-impact work'", className: "text-tertiary" },
  { text: "\n};" },
];

export function Hero() {
  const { ready } = useIntro();
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 280]);
  const hint = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 70, damping: 16 });
  const smy = useSpring(my, { stiffness: 70, damping: 16 });
  const rotY = useTransform(smx, [-0.5, 0.5], [-9, 9]);
  const rotX = useTransform(smy, [-0.5, 0.5], [7, -7]);
  const codeX = useTransform(smx, [-0.5, 0.5], [-24, 24]);
  const codeY = useTransform(smy, [-0.5, 0.5], [-16, 16]);
  const chipX = useTransform(smx, [-0.5, 0.5], [20, -20]);
  const chipY = useTransform(smy, [-0.5, 0.5], [14, -14]);

  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="relative overflow-hidden pt-28 pb-10 sm:pt-32"
    >
      <motion.div aria-hidden style={{ y: blobY }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-32 left-1/2 h-[480px] w-[840px] -translate-x-1/2 animate-aurora rounded-full bg-gradient-to-tr from-primary-container/20 via-secondary/20 to-transparent blur-3xl" />
        <div className="absolute right-[-10%] top-[35%] h-[420px] w-[420px] animate-aurora rounded-full bg-secondary/10 blur-3xl [animation-delay:-6s]" />
      </motion.div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <Intro delay={0.05}>
              <div className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1.5 shadow-sm">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-tertiary opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-tertiary" />
                </span>
                <span className="font-mono text-[11px] font-semibold tracking-wide text-tertiary">Available for freelance &amp; full-time</span>
              </div>
            </Intro>

            <SplitText
              as="h1"
              immediate
              delay={0.2}
              className="font-display text-[2.1rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]"
              parts={[
                { text: "I architect resilient " },
                { text: "backend systems", className: "text-flow" },
                { text: " and fast, scalable web applications." },
              ]}
            />

            <Intro delay={0.9}>
              <p className="max-w-xl text-base leading-relaxed text-on-surface-variant">
                Senior-minded Backend &amp; Web Developer specializing in Go, Node.js, Laravel, distributed microservices, and high-throughput APIs paired with refined web interfaces.
              </p>
            </Intro>

            <Intro delay={1.05} className="flex flex-wrap items-center gap-3 pt-1">
              <Magnetic>
                <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-container to-secondary px-6 py-3 font-mono text-[13px] font-semibold text-on-primary-container shadow-md transition-shadow hover:shadow-[0_0_30px_rgba(125,132,255,0.55)]">
                  View My Projects
                  <Icon name="arrowDown" className="size-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={profile.cvUrl} download className="inline-flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-6 py-3 font-mono text-[13px] transition-colors hover:border-primary hover:bg-surface-high">
                  <Icon name="file" className="size-4" /> Download CV
                </a>
              </Magnetic>
            </Intro>

            <Intro delay={1.2} className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 font-mono text-[11px] text-on-surface-variant">
              <span className="uppercase tracking-wider text-outline">Connect •</span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex min-h-9 items-center gap-1.5 transition-colors hover:text-primary"><Icon name="terminal" className="size-4" />GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex min-h-9 items-center gap-1.5 transition-colors hover:text-primary"><Icon name="briefcase" className="size-4" />LinkedIn</a>
              <a href={profile.x} target="_blank" rel="noopener noreferrer" className="flex min-h-9 items-center gap-1.5 transition-colors hover:text-primary"><Icon name="hash" className="size-4" />X / Twitter</a>
              <button onClick={copy} className="relative flex min-h-9 items-center gap-1.5 transition-colors hover:text-secondary" title="Klik untuk menyalin email">
                <Icon name="copy" className="size-4" />
                {profile.email}
                <AnimatePresence>
                  {copied && (
                    <motion.span initial={{ opacity: 0, y: 6, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6 }} className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-tertiary px-2 py-0.5 text-[11px] font-semibold text-surface-lowest">
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Intro>
          </div>

          <Intro delay={0.5} y={60} scale={0.9} className="relative mt-6 lg:col-span-5 lg:mt-0">
            <motion.div style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1100 }} className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute -inset-[2px] overflow-hidden rounded-2xl">
                <div className="absolute inset-[-60%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_65%,#7d84ff_80%,#60d5f5_92%,transparent)]" />
              </div>
              <div className="relative rounded-2xl border border-outline-variant bg-surface-container p-2 shadow-2xl">
                <div className="group relative aspect-square overflow-hidden rounded-xl bg-surface-container">
                  <Photo src={profile.photo} alt={profile.name} initials="WA" priority className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-transparent to-transparent opacity-60" />
                </div>
              </div>

              <motion.div style={{ x: codeX, y: codeY }} className="relative z-10 mt-4 w-full rounded-xl border border-outline-variant bg-surface-lowest/95 p-4 shadow-2xl backdrop-blur-md md:absolute md:-bottom-10 md:-left-10 md:mt-0 md:w-[370px]">
                <div className="mb-2 flex items-center justify-between border-b border-outline-variant/60 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-error" />
                    <span className="size-2.5 rounded-full bg-yellow-500" />
                    <span className="size-2.5 rounded-full bg-tertiary" />
                    <span className="ml-2 font-mono text-[11px] text-outline">widhy.config.ts</span>
                  </div>
                  <span className="font-mono text-[11px] text-secondary">ts</span>
                </div>
                <pre className="min-h-[132px] overflow-x-auto whitespace-pre font-mono text-[11px] leading-relaxed text-on-surface-variant"><code><Typed tokens={code} start={ready} /></code></pre>
              </motion.div>

              <motion.div style={{ x: chipX, y: chipY }} className="absolute -right-3 -top-4 hidden sm:block">
                <div className="flex animate-float items-center gap-1.5 rounded-lg border border-outline-variant bg-surface-high px-3 py-1.5 shadow-lg">
                  <Icon name="verified" className="size-4 text-tertiary" />
                  <span className="font-mono text-[11px] font-semibold">99.98% uptime SLA</span>
                </div>
              </motion.div>
              <motion.div style={{ x: chipX, y: chipY }} className="absolute -right-8 top-1/2 hidden sm:block">
                <div className="flex animate-float items-center gap-1.5 rounded-lg border border-outline-variant bg-surface-high px-3 py-1.5 shadow-lg [animation-delay:-3s]">
                  <Icon name="gauge" className="size-4 text-secondary" />
                  <span className="font-mono text-[11px] font-semibold">&lt; 45ms API p99</span>
                </div>
              </motion.div>
            </motion.div>
          </Intro>
        </div>

        <motion.a href="#about" style={{ opacity: hint }} className="mx-auto mt-20 flex w-fit flex-col items-center gap-1 text-outline transition-colors hover:text-on-surface">
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll down</span>
          <Icon name="chevronsDown" className="size-5 animate-bounce" />
        </motion.a>
      </motion.div>
    </section>
  );
}
