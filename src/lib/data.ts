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
    "/Profile.png",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { label: "Current Semester", tag: "SEM", value: 5, suffix: "", icon: "history", tone: "secondary" },
  { label: "Projects Built", tag: "PROJ", value: 2, suffix: "+", icon: "rocket", tone: "primary" },
  { label: "Technologies Learned", tag: "TECH", value: 11, suffix: "", icon: "dataset", tone: "tertiary" },
  { label: "Orgs & Committees", tag: "ORG", value: 5, suffix: "", icon: "verified", tone: "primary" },
] as const;

export const aboutChips = ["Laravel", "CodeIgniter", "Next.js & React", "MySQL", "Game Dev (Godot)", "Scrum & Teamwork"];

export const stack = [
  {
    title: "Frontend",
    badge: "Client-side",
    icon: "devices",
    tone: "primary",
    desc: "Interface yang responsive dan nyaman dipakai, dibangun dengan modern JavaScript tooling.",
    items: [
      ["HTML5 & CSS3", "Comfortable"],
      ["JavaScript", "Comfortable"],
      ["React", "Comfortable"],
      ["Next.js", "Comfortable"],
    ],
  },
  {
    title: "Backend & Database",
    badge: "Server-side",
    icon: "dns",
    tone: "secondary",
    desc: "Full-stack web app dengan MVC framework dan relational database.",
    items: [
      ["Laravel (PHP)", "Used in projects"],
      ["CodeIgniter", "Used in projects"],
      ["MySQL", "Used in projects"],
    ],
  },
  {
    title: "Tools & Deployment",
    badge: "Workflow",
    icon: "cloud",
    tone: "tertiary",
    desc: "Version control, hosting, dan container untuk release serta sharing karya.",
    items: [
      ["Git & GitHub", "Comfortable"],
      ["Vercel", "Used in projects"],
      ["Docker", "Learning"],
    ],
  },
  {
    title: "Other Languages",
    badge: "Beyond Web",
    icon: "pkg",
    tone: "primary",
    desc: "Programming fundamentals dan eksperimen game development.",
    items: [
      ["Java", "Comfortable"],
      ["Godot Engine", "Comfortable"],
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
    title: "MICU (Mitra Cuci)", kind: "Laundry Service Marketplace", year: "2025", category: "laravel", tone: "secondary",
    desc: "Satu aplikasi untuk menemukan dan memesan layanan laundry terbaik di sekitarmu, tanpa perlu repot keluar rumah.",
    tags: ["Laravel", "MySQL", "Web App"], demo: "https://mitracuci.vercel.app/",
  },
  {
    title: "LoakIN", kind: "Second-hand Marketplace", year: "2025", category: "codeigniter", tone: "primary",
    desc: "One-stop platform untuk jual-beli barang bekas berkualitas, sekaligus pesan jasa reparasi supaya barang awet kembali.",
    tags: ["CodeIgniter", "MySQL", "Web App"], repo: "https://github.com/WidhyFadhiil/LoakIN",
  },
];

export const experience = [
  {
    role: "Head of Public Relations & Administration", company: "Decompe 5.0 × Skillclass", period: "2026 — Present", tone: "primary",
    desc: "Memimpin divisi Public Relations & Administration: mengoordinasikan communication, partnership, dan alur administrasi tim event.",
    tags: ["Leadership", "Public Relations", "Administration"],
  },
  {
    role: "Event Chair", company: "Webinar & Workshop Scrum Project Management", period: "2026", tone: "secondary",
    desc: "Memimpin panitia webinar dan workshop Scrum Project Management, mengoordinasikan tim dari planning sampai hari-H.",
    tags: ["Event Management", "Scrum", "Teamwork"],
  },
  {
    role: "Program Development Division Member", company: "UKM Coding Cyber University", period: "2025 — 2026", tone: "tertiary",
    desc: "Bagian dari divisi program development UKM Coding kampus, terlibat dalam kegiatan dan software development project bersama member lain.",
    tags: ["Software Development", "Collaboration"],
  },
  {
    role: "Creation & Innovation Division Member", company: "HIMASTI Cyber University", period: "2025 — 2026", tone: "outline",
    desc: "Member divisi Kreasi dan Inovasi di himpunan mahasiswa Sistem dan Teknologi Informasi.",
    tags: ["Creativity", "Innovation", "Student Organization"],
  },
  {
    role: "Event Division Member", company: "Decompe 4.0 × Skillclass", period: "2025", tone: "primary",
    desc: "Bergabung di divisi event pada Decompe 4.0 × Skillclass, membantu planning dan eksekusi kegiatan.",
    tags: ["Events", "Committee", "Teamwork"],
  },
  {
    role: "Student, Sistem dan Teknologi Informasi", company: "Cyber University (Universitas Siber Indonesia)", period: "Semester 5", tone: "secondary",
    desc: "Menempuh studi Sistem dan Teknologi Informasi sambil membangun web project dengan Laravel, CodeIgniter, MySQL, dan Next.js.",
    tags: ["Laravel", "CodeIgniter", "Next.js", "MySQL"],
  },
  {
    role: "Software Engineering (RPL) Student", company: "SMK Prestasi Prima", period: "2022 — 2024", tone: "tertiary",
    desc: "Belajar programming fundamentals dan software development di jurusan Rekayasa Perangkat Lunak.",
    tags: ["Programming", "RPL", "Web Basics"],
  },
];

export const toneText = { primary: "text-primary", secondary: "text-secondary", tertiary: "text-tertiary", outline: "text-outline" } as const;
export const toneBg = { primary: "bg-primary", secondary: "bg-secondary", tertiary: "bg-tertiary", outline: "bg-outline" } as const;
