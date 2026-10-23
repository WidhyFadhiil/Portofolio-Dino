"use client";

import Image from "next/image";
import { useState } from "react";

/** Foto dengan fallback inisial jika URL gagal dimuat. */
export function Photo({ src, alt, initials, className = "", priority = false, sizes = "420px" }: {
  src: string; alt: string; initials: string; className?: string; priority?: boolean; sizes?: string;
}) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-container/40 to-secondary/30 font-display text-5xl font-bold text-on-surface ${className}`}>
        {initials}
      </div>
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} onError={() => setErr(true)} />;
}
