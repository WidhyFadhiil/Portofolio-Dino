# Widhy Fadhiil Aldino — Portfolio (Next.js 16)

Stack: Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · Motion · Lenis · TypeScript

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Yang perlu kamu cek / ganti

Semua konten ada di satu file: `src/lib/data.ts`.

- **Foto profil**: simpan ke `public/profile.jpg`, lalu ubah `profile.photo` menjadi `"/profile.jpg"`.
- **CV**: taruh PDF di `public/` lalu isi `profile.cvUrl` (mis. `"/cv-widhy.pdf"`). Selama kosong, tombolnya otomatis menjadi "Get in Touch".
- **Level skill**: label di `stack` (Comfortable / Used in projects / Learning) bisa kamu sesuaikan.
- **Proyek baru**: tambah objek di `projects`. Isi `demo` dan/atau `repo` sesuai link yang ada.
- **Link repo MICU**: belum ada, jadi tombolnya mengarah ke profil GitHub. Isi `repo` pada proyek MICU jika sudah ada.
- **Testimoni**: dihapus karena belum ada. Kalau nanti ada, tambahkan section baru.
- **Form kontak**: saat dikirim akan membuka aplikasi email dengan pesan terisi (`mailto:`). Untuk kirim langsung dari server, ganti `submit()` di `Contact.tsx` dengan Server Action atau API route.
- **Section GitHub**: angka repo/stars/followers diambil otomatis dari GitHub (cache 1 jam). Jika gagal, angkanya disembunyikan.

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
| Bingkai browser + kartu proyek berfilter | `sections/Projects.tsx` |
| Statistik GitHub asli + kartu repo | `sections/Activity.tsx` |
| Garis timeline tergambar saat scroll | `sections/Experience.tsx` |
| Tombol kirim + confetti | `sections/Contact.tsx` |

Aksesibilitas: `prefers-reduced-motion` dihormati (Lenis, partikel, kursor, dan preloader dimatikan; animasi transform dinonaktifkan oleh `MotionConfig`). Kursor kustom hanya aktif di perangkat dengan mouse.
