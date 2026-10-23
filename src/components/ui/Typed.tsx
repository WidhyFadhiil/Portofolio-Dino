"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export type Token = { text: string; className?: string };

/** Efek mesin tik untuk kode berwarna. */
export function Typed({ tokens, start, speed = 26 }: { tokens: Token[]; start: boolean; speed?: number }) {
  const total = tokens.reduce((a, t) => a + t.text.length, 0);
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start || reduce) return;
    const id = setInterval(() => setN((v) => (v >= total ? (clearInterval(id), v) : v + 1)), speed);
    return () => clearInterval(id);
  }, [start, total, speed, reduce]);
  let left = reduce ? total : n;
  return (
    <>
      {tokens.map((t, i) => {
        const part = t.text.slice(0, Math.max(0, left));
        left -= t.text.length;
        return <span key={i} className={t.className}>{part}</span>;
      })}
      <span className="animate-blink text-secondary">▍</span>
    </>
  );
}
