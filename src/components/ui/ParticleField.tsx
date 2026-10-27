"use client";

import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; r: number; d: number };

/** Jaring partikel di latar: menjauhi kursor, tertarik garis ke kursor, dan ikut "tersapu" saat scroll. */
export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;
    let ps: P[] = [];
    const mouse = { x: -9999, y: -9999 };
    let lastScroll = window.scrollY;
    let raf = 0;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const maxParticles = coarse ? 40 : 70;

    const resize = () => {
      // Di mobile, address bar yang naik-turun memicu resize kecil: abaikan agar partikel tidak di-reset.
      if (ps.length && Math.abs(window.innerWidth - w) < 2 && Math.abs(window.innerHeight - h) < 150) return;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(maxParticles, Math.floor((w * h) / 17000));
      ps = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
        d: Math.random() * 0.8 + 0.2,
      }));
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const loop = () => {
      const sy = window.scrollY;
      const dy = sy - lastScroll;
      lastScroll = sy;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.x += p.vx;
        p.y += p.vy - dy * 0.12 * p.d;

        const mx = p.x - mouse.x;
        const my = p.y - mouse.y;
        const md2 = mx * mx + my * my;
        const md = md2 < 190 * 190 ? Math.sqrt(md2) : Infinity;
        if (md < 150 && md > 0) {
          const f = (150 - md) / 150;
          p.x += (mx / md) * f * 2.2;
          p.y += (my / md) * f * 2.2;
        }

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(191,194,255,0.55)";
        ctx.fill();

        for (let j = i + 1; j < ps.length; j++) {
          const q = ps[j];
          const ddx = p.x - q.x;
          const ddy = p.y - q.y;
          const d2 = ddx * ddx + ddy * ddy;
          if (d2 < 115 * 115) {
            const dist = Math.sqrt(d2);
            ctx.strokeStyle = `rgba(125,132,255,${(1 - dist / 115) * 0.22})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        if (md < 190) {
          ctx.strokeStyle = `rgba(96,213,245,${(1 - md / 190) * 0.55})`;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(loop);
    };

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(loop);
    };

    resize();
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-80" />;
}
