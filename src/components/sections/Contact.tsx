"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal, ease } from "@/components/ui/motion";
import { Heading } from "./Heading";

type Status = "idle" | "sending" | "sent";
type Spark = { id: number; x: number; y: number; r: number; c: string };
const colors = ["#7d84ff", "#60d5f5", "#4de082", "#bfc2ff", "#ffb4ab"];

const inputCls =
  "w-full rounded-lg border border-outline-variant bg-surface-lowest px-3.5 py-3 text-sm text-on-surface placeholder:text-outline transition-colors focus:border-primary focus:outline-none";

function Field({ label, id, children }: { label: string; id: string; children: ReactNode }) {
  return (
    <div className="group relative flex flex-col gap-1.5">
      <label htmlFor={id} className="font-mono text-[11px] text-on-surface transition-colors group-focus-within:text-secondary">{label}</label>
      <div className="relative overflow-hidden rounded-lg">
        {children}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-primary-container to-secondary transition-transform duration-500 group-focus-within:scale-x-100" />
      </div>
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);

  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const subject = `[Portfolio] ${fd.get("type")} — ${fd.get("name")}`;
    const body = `${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`;
    setStatus("sending");
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      form.reset();
      setStatus("sent");
      setSparks(Array.from({ length: 22 }, (_, i) => {
        const a = (i / 22) * Math.PI * 2;
        const d = 70 + Math.random() * 90;
        return { id: Date.now() + i, x: Math.cos(a) * d, y: Math.sin(a) * d - 30, r: Math.random() * 540 - 270, c: colors[i % colors.length] };
      }));
      setTimeout(() => { setStatus("idle"); setSparks([]); }, 4200);
    }, 1200);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <Heading label="[ 06 // HUBUNGI SAYA ]" parts={[{ text: "Mari membuat sesuatu yang keren bersama." }]} />
      <Reveal delay={0.2}>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-surface-variant">
          Sedang mencari intern atau junior web developer, punya ide proyek, atau ingin berkolaborasi? Kirim saja pesan.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-12">
        <Reveal x={-40} y={0} className="flex flex-col justify-between gap-6 rounded-2xl border border-outline-variant bg-surface-container p-6 lg:col-span-5">
          <div className="space-y-5">
            <h3 className="font-display text-lg font-semibold">Kontak Langsung</h3>
            <div className="flex items-center justify-between gap-3 rounded-xl border border-outline-variant bg-surface-high p-4">
              <div className="flex min-w-0 items-center gap-3">
                <Icon name="atSign" className="size-6 shrink-0 text-secondary" />
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase text-outline">Email Utama</div>
                  <div className="select-all truncate font-mono text-[13px]">{profile.email}</div>
                </div>
              </div>
              <button onClick={copy} className="relative min-h-11 min-w-[84px] shrink-0 overflow-hidden rounded-lg border border-outline-variant bg-surface-container px-3 font-mono text-[11px] transition-colors hover:border-primary">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span key={copied ? "c" : "n"} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -16, opacity: 0 }} transition={{ duration: 0.18 }} className={`flex items-center justify-center gap-1.5 ${copied ? "text-tertiary" : ""}`}>
                    <Icon name={copied ? "check" : "copy"} className="size-3.5" />{copied ? "Tersalin!" : "Salin"}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
            {[
              { href: profile.whatsapp, icon: "chat", label: "WhatsApp", hint: "Chat", tone: "text-tertiary", hover: "hover:border-tertiary" },
              { href: profile.linkedin, icon: "briefcase", label: "Profil LinkedIn", hint: "Terhubung", tone: "text-primary", hover: "hover:border-primary" },
            ].map((l) => (
              <motion.a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" whileHover={{ x: 8 }} className={`group flex min-h-14 items-center justify-between rounded-xl border border-outline-variant bg-surface-high p-3.5 transition-colors ${l.hover}`}>
                <span className="flex items-center gap-3 text-sm"><Icon name={l.icon} className={`size-[22px] ${l.tone}`} />{l.label}</span>
                <span className="font-mono text-[11px] text-outline transition-transform group-hover:translate-x-1">{l.hint} →</span>
              </motion.a>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-outline-variant/60 pt-5 font-mono text-[11px] text-on-surface-variant">
            <span className="flex items-center gap-2"><Icon name="pin" className="size-4" />{profile.location}</span>
            <span className="flex items-center gap-1.5 font-semibold text-tertiary"><span className="size-2 rounded-full bg-tertiary" />Siap Remote</span>
          </div>
        </Reveal>

        <Reveal x={40} y={0} className="rounded-2xl border border-outline-variant bg-surface-container p-6 md:p-8 lg:col-span-7">
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nama Anda" id="name"><input id="name" name="name" required placeholder="Budi Santoso" autoComplete="name" className={inputCls} /></Field>
              <Field label="Email Anda" id="email"><input id="email" name="email" type="email" required placeholder="budi@perusahaan.com" autoComplete="email" className={inputCls} /></Field>
            </div>
            <Field label="Ada yang bisa saya bantu?" id="type">
              <select id="type" name="type" className={inputCls}>
                <option value="Magang / Posisi Junior">Magang / Posisi Junior</option>
                <option value="Proyek Web Freelance">Proyek Web Freelance</option>
                <option value="Kolaborasi">Kolaborasi / Open Source</option>
                <option value="Sekadar menyapa">Sekadar menyapa</option>
              </select>
            </Field>
            <Field label="Detail Pesan" id="message">
              <textarea id="message" name="message" required rows={4} placeholder="Ceritakan sedikit tentang proyek atau peluangnya..." className={`${inputCls} resize-none`} />
            </Field>

            <div className="relative mt-2">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-primary-container via-primary to-secondary bg-[length:200%_100%] font-mono text-[13px] font-semibold tracking-wide text-on-primary-container transition-[background-position,box-shadow] duration-500 hover:bg-[position:100%_0] hover:shadow-[0_0_28px_rgba(125,132,255,0.5)] disabled:opacity-80"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span key={status} initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -22, opacity: 0 }} transition={{ duration: 0.22, ease }} className="flex items-center gap-2">
                    {status === "idle" && (<>Kirim Pesan <Icon name="rocket" className="size-[18px]" /></>)}
                    {status === "sending" && (<><Icon name="loader" className="size-[18px] animate-spin" /> Mengirim...</>)}
                    {status === "sent" && (<>Email Siap! <Icon name="check" className="size-[18px]" /></>)}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
              {sparks.map((s) => (
                <motion.span
                  key={s.id}
                  initial={{ x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 }}
                  animate={{ x: s.x, y: s.y + 60, scale: 0.4, opacity: 0, rotate: s.r }}
                  transition={{ duration: 1.3, ease: "easeOut" }}
                  style={{ background: s.c }}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-1 rounded-[1px]"
                />
              ))}
            </div>

            <div role="status" aria-live="polite">
              <AnimatePresence>
                {status === "sent" && (
                  <motion.div initial={{ opacity: 0, height: 0, y: 10 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="flex items-center gap-2 rounded-lg border border-tertiary/40 bg-tertiary-container/20 p-3 font-mono text-[11px] text-tertiary">
                      <Icon name="check" className="size-[18px]" /> Aplikasi email akan terbuka dengan pesan yang sudah terisi. Tinggal tekan kirim!
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
