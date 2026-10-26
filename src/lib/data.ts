export const profile = {
  name: "Widhy Fadhiil Aldino",
  short: "Widhy",
  role: "Web Developer",
  campus: "Cyber University",
  email: "widhyfadhiilaldino1907@gmail.com",
  location: "Indonesia",
  githubUser: "WidhyFadhiil",
  github: "https://github.com/WidhyFadhiil",
  linkedin: "https://linkedin.com/in/widhy-fadhiil-aldino-b1b306409",
  whatsapp: "https://wa.me/62895386891729",
  // Taruh file CV di /public lalu isi, mis. "/cv-widhy.pdf". Kosong = tombol CV diganti "Get in Touch".
  cvUrl: "",
  // Ganti dengan foto lokal di /public (mis. "/profile.jpg") agar tidak bergantung pada URL Stitch
  photo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB0raeYSDLcWFHjYc0v45BRjQm1HkENQ6MqqzD2d62NrOHQBmK_ujHwlrrTTcONMVril0dclm2ne90kJ7ERyhQQNdFgfc4TMy-6gT-gHKm7wvzsY_op479ybYSbfpZBUPl4bbs4dlPMN8sA6g3BbkMCaJlPsHqIVCqbwHoG2uyqPDjJQx3q5pdwD0ILf756Zj5kJkZ7iaYzyC81zhFtB6shch7la-_sEKtGIRgPjwp02EUVBwZG3RD8",
};

export const navLinks = [
  { id: "about", label: "Tentang" },
  { id: "tech-stack", label: "Teknologi" },
  { id: "projects", label: "Proyek" },
  { id: "experience", label: "Pengalaman" },
  { id: "contact", label: "Kontak" },
];

export const stats = [
  { label: "Semester Saat Ini", tag: "SEM", value: 5, suffix: "", icon: "history", tone: "secondary" },
  { label: "Proyek Dibuat", tag: "PROJ", value: 2, suffix: "+", icon: "rocket", tone: "primary" },
  { label: "Teknologi Dipelajari", tag: "TECH", value: 11, suffix: "", icon: "dataset", tone: "tertiary" },
  { label: "Organisasi & Kepanitiaan", tag: "ORG", value: 5, suffix: "", icon: "verified", tone: "primary" },
] as const;

export const aboutChips = ["Laravel", "CodeIgniter", "Next.js & React", "MySQL", "Game Dev (Godot)", "Scrum & Kerja Tim"];

export const stack = [
  {
    title: "Frontend",
    badge: "Sisi Klien",
    icon: "devices",
    tone: "primary",
    desc: "Antarmuka yang responsif dan nyaman dipakai dengan tooling JavaScript modern.",
    items: [
      ["HTML5 & CSS3", "Nyaman dipakai"],
      ["JavaScript", "Nyaman dipakai"],
      ["React", "Nyaman dipakai"],
      ["Next.js", "Nyaman dipakai"],
    ],
  },
  {
    title: "Backend & Database",
    badge: "Sisi Server",
    icon: "dns",
    tone: "secondary",
    desc: "Aplikasi web full-stack dengan framework MVC dan database relasional.",
    items: [
      ["Laravel (PHP)", "Dipakai di proyek"],
      ["CodeIgniter", "Dipakai di proyek"],
      ["MySQL", "Dipakai di proyek"],
    ],
  },
  {
    title: "Tools & Deployment",
    badge: "Alur Kerja",
    icon: "cloud",
    tone: "tertiary",
    desc: "Version control, hosting, dan container untuk merilis serta membagikan karya.",
    items: [
      ["Git & GitHub", "Nyaman dipakai"],
      ["Vercel", "Dipakai di proyek"],
      ["Docker", "Sedang belajar"],
    ],
  },
  {
    title: "Bahasa Lainnya",
    badge: "Di Luar Web",
    icon: "pkg",
    tone: "primary",
    desc: "Dasar pemrograman dan eksperimen pengembangan game.",
    items: [
      ["Java", "Nyaman dipakai"],
      ["Godot Engine", "Nyaman dipakai"],
    ],
  },
] as const;

export const marqueeTech = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Laravel", "CodeIgniter", "MySQL", "Java", "Godot", "Docker", "GitHub", "Vercel",
];

export type Category = "laravel" | "codeigniter";

export const projects: {
  title: string; kind: string; year: string; category: Category; tone: "primary" | "secondary" | "tertiary";
  desc: string; tags: string[]; demo?: string; repo?: string;
}[] = [
  {
    title: "MICU (Mitra Cuci)", kind: "Marketplace Jasa Laundry", year: "2025", category: "laravel", tone: "secondary",
    desc: "Aplikasi satu pintu untuk menemukan dan memesan jasa laundry terbaik di sekitarmu tanpa perlu repot keluar rumah.",
    tags: ["Laravel", "MySQL", "Web App"], demo: "https://mitracuci.vercel.app/",
  },
  {
    title: "LoakIN", kind: "Marketplace Barang Bekas", year: "2025", category: "codeigniter", tone: "primary",
    desc: "Platform one-stop shop untuk jual-beli barang bekas berkualitas sekaligus memesan jasa reparasi agar barang awet kembali.",
    tags: ["CodeIgniter", "MySQL", "Web App"], repo: "https://github.com/WidhyFadhiil/LoakIN",
  },
];

export const experience = [
  {
    role: "Ketua Divisi Public Relations & Administrasi", company: "Decompe 5.0 × Skillclass", period: "2026 — Sekarang", tone: "primary",
    desc: "Memimpin divisi Public Relations & Administrasi: mengoordinasikan komunikasi, kemitraan, dan alur administrasi tim acara.",
    tags: ["Kepemimpinan", "Public Relations", "Administrasi"],
  },
  {
    role: "Ketua Pelaksana", company: "Webinar & Workshop Scrum Project Management", period: "2026", tone: "secondary",
    desc: "Memimpin kepanitiaan webinar dan workshop Scrum Project Management, mengoordinasikan tim dari perencanaan hingga hari acara.",
    tags: ["Manajemen Acara", "Scrum", "Kerja Tim"],
  },
  {
    role: "Anggota Divisi Program Development", company: "UKM Coding Cyber University", period: "2025 — 2026", tone: "tertiary",
    desc: "Bagian dari divisi program development UKM Coding kampus, terlibat dalam kegiatan dan proyek pengembangan perangkat lunak bersama anggota lain.",
    tags: ["Pengembangan Software", "Kolaborasi"],
  },
  {
    role: "Anggota Divisi Kreasi dan Inovasi", company: "HIMASTI Cyber University", period: "2025 — 2026", tone: "outline",
    desc: "Anggota divisi Kreasi dan Inovasi di himpunan mahasiswa Sistem dan Teknologi Informasi.",
    tags: ["Kreativitas", "Inovasi", "Organisasi Mahasiswa"],
  },
  {
    role: "Anggota Divisi Acara", company: "Decompe 4.0 × Skillclass", period: "2025", tone: "primary",
    desc: "Bergabung di divisi acara pada Decompe 4.0 × Skillclass, membantu perencanaan dan pelaksanaan kegiatan.",
    tags: ["Acara", "Kepanitiaan", "Kerja Tim"],
  },
  {
    role: "Mahasiswa Sistem dan Teknologi Informasi", company: "Cyber University (Universitas Siber Indonesia)", period: "Semester 5", tone: "secondary",
    desc: "Menempuh studi Sistem dan Teknologi Informasi sambil membangun proyek web dengan Laravel, CodeIgniter, MySQL, dan Next.js.",
    tags: ["Laravel", "CodeIgniter", "Next.js", "MySQL"],
  },
  {
    role: "Siswa Rekayasa Perangkat Lunak (RPL)", company: "SMK Prestasi Prima", period: "2022 — 2024", tone: "tertiary",
    desc: "Mempelajari dasar pemrograman dan pengembangan perangkat lunak di jurusan Rekayasa Perangkat Lunak.",
    tags: ["Pemrograman", "RPL", "Dasar Web"],
  },
];

export const toneText = { primary: "text-primary", secondary: "text-secondary", tertiary: "text-tertiary", outline: "text-outline" } as const;
export const toneBg = { primary: "bg-primary", secondary: "bg-secondary", tertiary: "bg-tertiary", outline: "bg-outline" } as const;
