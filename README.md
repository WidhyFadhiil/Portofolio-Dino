# Widhy Fadhiil Aldino — Portfolio (Next.js 16)

Stack: Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · Motion · Lenis · TypeScript

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Yang perlu kamu ganti

Semua konten ada di satu file: `src/lib/data.ts` (nama, email, link sosial, proyek, pengalaman, testimoni).

- **Foto profil**: simpan file ke `public/profile.jpg`, lalu ubah `profile.photo` menjadi `"/profile.jpg"`.
  (URL bawaan dari Stitch bisa kedaluwarsa. Jika gagal dimuat, otomatis tampil inisial "WA".)
- **CV**: taruh `cv-widhy.pdf` di folder `public/` (atau ubah `profile.cvUrl`).
- **Form kontak**: saat ini simulasi. Ganti `submit()` di `src/components/sections/Contact.tsx`
  dengan Server Action / API route (mis. Resend atau Nodemailer).
- **Link GitHub/LinkedIn/X/WhatsApp**: ubah di `data.ts`.

## Peta animasi

| Efek | File |
|---|---|
| Boot terminal + tirai terbuka (sekali per sesi) | `ui/Preloader.tsx` |
| Scroll halus | `ui/SmoothScroll.tsx` (Lenis) |
| Progress bar scroll | `ui/ScrollProgress.tsx` |
| Kursor kustom + cahaya mengikuti | `ui/CursorGlow.tsx` |
| Jaring partikel reaktif (kursor + scroll) | `ui/ParticleField.tsx` |
| Marquee yang bereaksi pada kecepatan scroll | `ui/VelocityMarquee.tsx` |
| Teks per kata, teks menyala saat scroll, magnetic, spotlight+tilt, count-up | `ui/motion.tsx` |
| Hero: 3D tilt, parallax, kode mengetik | `sections/Hero.tsx` |
| Terminal live + grafik hidup | `sections/Projects.tsx` |
| Grid kontribusi bergelombang | `sections/Activity.tsx` |
| Garis timeline tergambar saat scroll | `sections/Experience.tsx` |
| Tombol kirim + confetti | `sections/Contact.tsx` |

Aksesibilitas: `prefers-reduced-motion` dihormati (Lenis, partikel, kursor, dan preloader dimatikan; animasi transform dinonaktifkan oleh `MotionConfig`). Kursor kustom hanya aktif di perangkat dengan mouse.
