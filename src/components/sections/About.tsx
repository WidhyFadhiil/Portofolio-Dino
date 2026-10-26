"use client";

import { motion } from "motion/react";
import { aboutChips, stats, toneText } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { CountUp, ScrollText, SpotlightCard, ease } from "@/components/ui/motion";
import { Heading } from "./Heading";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <Heading label="[ 01 // TENTANG SAYA ]" parts={[{ text: "Membangun aplikasi web yang berguna, satu proyek demi satu proyek." }]} />
      <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <ScrollText
            className="text-lg leading-relaxed text-on-surface-variant"
            parts={[
              { text: "Halo! Saya " },
              { text: "Widhy Fadhiil Aldino", className: "font-semibold text-primary" },
              { text: ", mahasiswa Sistem dan Teknologi Informasi (semester 5) di Cyber University yang suka mengubah masalah sehari-hari menjadi aplikasi web yang benar-benar dipakai orang. Saya membangun dengan Laravel, CodeIgniter, MySQL, dan Next.js, mulai dari platform pemesanan laundry sampai marketplace barang bekas." },
            ]}
          />
          <ScrollText
            className="text-lg leading-relaxed text-on-surface-variant"
            parts={[
              { text: "Di luar coding, saya berkolaborasi dan memimpin di komunitas kampus: HIMASTI, divisi program development UKM Coding, hingga menjadi ketua pelaksana webinar Scrum Project Management. Saat ini saya sedang belajar Docker dan mencari kesempatan magang maupun posisi junior web developer." },
            ]}
          />
          <motion.div
            className="flex flex-wrap gap-2 pt-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {aboutChips.map((c, i) => (
              <motion.span
                key={c}
                variants={{ hidden: { opacity: 0, scale: 0.5, y: 14 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 380, damping: 16 } } }}
                whileHover={{ y: -4, scale: 1.06 }}
                className={`cursor-default rounded border border-outline-variant bg-surface-container px-2.5 py-1 font-mono text-[11px] ${["text-primary", "text-secondary", "text-tertiary", "text-on-surface", "text-primary"][i % 5]}`}
              >
                {c}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-5">
          {stats.map((s, i) => (
            <SpotlightCard
              key={s.tag}
              tilt={9}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-xl border border-outline-variant bg-surface-container p-5 shadow-sm"
            >
              <div className={`mb-3 flex items-center justify-between ${toneText[s.tone]}`}>
                <motion.span whileHover={{ rotate: [0, -12, 12, 0], scale: 1.25 }} transition={{ duration: 0.5 }}>
                  <Icon name={s.icon} className="size-6" />
                </motion.span>
                <span className="font-mono text-[11px] text-outline">{s.tag}</span>
              </div>
              <div className="font-display text-3xl font-bold">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-1 font-mono text-[11px] text-on-surface-variant">{s.label}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
