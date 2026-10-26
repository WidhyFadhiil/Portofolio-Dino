"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { navLinks, profile } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Magnetic } from "@/components/ui/motion";
import { useIntro } from "@/components/IntroContext";

export function Navbar() {
  const { ready } = useIntro();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 140], ["rgba(16,19,26,0.35)", "rgba(16,19,26,0.88)"]);
  const height = useTransform(scrollY, [0, 140], [72, 60]);

  useEffect(() => {
    const els = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const top = () => window.scrollY < 200 && setActive("");
    window.addEventListener("scroll", top, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", top); };
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : undefined}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      style={{ backgroundColor: bg, height }}
      className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Back to top">
          <motion.svg whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }} viewBox="0 0 64 64" className="size-8">
            <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7d84ff" /><stop offset="1" stopColor="#60d5f5" /></linearGradient></defs>
            <rect width="64" height="64" rx="16" fill="#191c23" stroke="#464653" />
            <path d="M14 20l10 24 8-16 8 16 10-24" fill="none" stroke="url(#lg)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
          <span className="font-mono text-[13px] font-semibold tracking-tight">&lt;{profile.short} /&gt;</span>
          <span className="hidden rounded border border-outline-variant bg-surface-container px-1.5 py-0.5 font-mono text-[11px] text-on-surface-variant sm:inline-flex">
            {profile.role}
          </span>
        </a>

        <nav className="relative hidden items-center gap-1 lg:flex" onPointerLeave={() => undefined}>
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative rounded-lg px-3 py-1.5 text-[13px] transition-colors ${active === l.id ? "text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
            >
              {active === l.id && (
                <motion.span layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-0 rounded-lg border border-outline-variant/70 bg-surface-high" />
              )}
              <span className="relative">{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-2.5 py-1 md:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-tertiary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-tertiary" />
            </span>
            <span className="font-mono text-[11px] text-on-surface-variant">Available</span>
          </div>
          <Magnetic strength={0.25}>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary-container to-secondary px-4 py-2 font-mono text-[13px] font-semibold text-on-primary-container transition-shadow hover:shadow-[0_0_22px_rgba(124,131,255,0.55)]">
              Get in Touch
            </a>
          </Magnetic>
          <div className="relative hidden size-8 overflow-hidden rounded-full border border-outline-variant sm:block">
            <Photo src={profile.photo} alt={profile.name} initials="WA" sizes="32px" className="object-cover object-top" />
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-lg border border-outline-variant bg-surface-container lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={open ? "x" : "m"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <Icon name={open ? "close" : "menu"} className="size-5" />
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full border-b border-outline-variant bg-surface/95 px-5 py-4 backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i + 0.1 }}
                className="flex min-h-12 items-center justify-between border-b border-outline-variant/40 font-display text-lg last:border-0"
              >
                {l.label}
                <Icon name="arrowDown" className="size-4 -rotate-90 text-outline" />
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
