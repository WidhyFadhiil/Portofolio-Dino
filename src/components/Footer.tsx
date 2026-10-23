"use client";

import { profile } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Magnetic, Reveal } from "@/components/ui/motion";

export function Footer() {
  const links = [
    { href: profile.github, icon: "terminal", label: "GitHub" },
    { href: profile.linkedin, icon: "briefcase", label: "LinkedIn" },
    { href: profile.x, icon: "hash", label: "X" },
    { href: `mailto:${profile.email}`, icon: "mail", label: "Email" },
  ];
  return (
    <footer className="relative z-10 border-t border-outline-variant bg-surface-lowest/90 py-12 backdrop-blur">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60" />
      <Reveal y={20}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[13px] font-semibold">&lt;{profile.short} /&gt;</span>
              <span className="text-xs text-on-surface-variant">© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
            </div>
            <p className="font-mono text-[11px] text-outline">Built with Next.js 16, Motion, Tailwind &amp; Go</p>
          </div>
          <div className="flex items-center gap-5">
            {links.map((l) => (
              <a key={l.label} href={l.href} aria-label={l.label} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex min-h-11 items-center gap-1.5 font-mono text-[11px] text-on-surface-variant transition-colors hover:text-secondary">
                <Icon name={l.icon} className="size-4" />{l.label}
              </a>
            ))}
          </div>
          <Magnetic>
            <a href="#top" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-3 font-mono text-[11px] text-on-surface-variant transition-colors hover:border-primary hover:text-on-surface">
              <Icon name="arrowUp" className="size-4" /> Back to Top
            </a>
          </Magnetic>
        </div>
      </Reveal>
    </footer>
  );
}
