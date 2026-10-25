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
  { label: "Orgs & Committees", tag: "ORG", value: 4, suffix: "", icon: "verified", tone: "primary" },
] as const;

export const aboutChips = ["Laravel", "CodeIgniter", "Next.js & React", "MySQL", "Game Dev (Godot)", "Scrum & Teamwork"];

export const stack = [
  {
    title: "Frontend",
    badge: "Web Client",
    icon: "devices",
    tone: "primary",
    desc: "Responsive, accessible interfaces built with modern JavaScript tooling.",
    items: [
      ["HTML5 & CSS3", "Comfortable"],
      ["JavaScript", "Comfortable"],
      ["React", "Comfortable"],
      ["Next.js", "Comfortable"],
    ],
  },
  {
    title: "Backend & Database",
    badge: "Server Side",
    icon: "dns",
    tone: "secondary",
    desc: "Full-stack web apps with MVC frameworks and relational databases.",
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
    desc: "Version control, hosting, and containers to ship and share work.",
    items: [
      ["Git & GitHub", "Comfortable"],
      ["Vercel", "Used in projects"],
      ["Docker", "Learning"],
    ],
  },
  {
    title: "More Languages",
    badge: "Beyond Web",
    icon: "pkg",
    tone: "primary",
    desc: "Programming foundations and game development experiments.",
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
    title: "MICU (Mitra Cuci)", kind: "Laundry Marketplace", year: "2025", category: "laravel", tone: "secondary",
    desc: "Aplikasi satu pintu untuk menemukan dan memesan jasa laundry terbaik di sekitarmu tanpa perlu repot keluar rumah.",
    tags: ["Laravel", "MySQL", "Web App"], demo: "https://mitracuci.vercel.app/",
  },
  {
    title: "LoakIN", kind: "Second-hand Marketplace", year: "2025", category: "codeigniter", tone: "primary",
    desc: "Platform one-stop shop untuk jual-beli barang bekas berkualitas sekaligus memesan jasa reparasi agar barang awet kembali.",
    tags: ["CodeIgniter", "MySQL", "Web App"], repo: "https://github.com/WidhyFadhiil/LoakIN",
  },
];

export const experience = [
  {
    role: "Head of Public Relations & Administration", company: "Decompe 5.0 × Skillclass", period: "2026 — Present", tone: "primary",
    desc: "Leading the Public Relations & Administration division: coordinating communication, partnerships, and administrative flow for the event team.",
    tags: ["Leadership", "Public Relations", "Administration"],
  },
  {
    role: "Organizing Chair", company: "Scrum Project Management Webinar & Workshop", period: "2026", tone: "secondary",
    desc: "Chaired the organizing committee of a webinar and workshop on Scrum Project Management, coordinating the team from planning to event day.",
    tags: ["Event Management", "Scrum", "Teamwork"],
  },
  {
    role: "Member, Program Development Division", company: "UKM Coding Cyber University", period: "2025 — 2026", tone: "tertiary",
    desc: "Part of the program development division of the university coding club, involved in software development activities and projects with fellow members.",
    tags: ["Software Development", "Collaboration"],
  },
  {
    role: "Member, Creativity & Innovation Division", company: "HIMASTI Cyber University", period: "2025 — 2026", tone: "outline",
    desc: "Member of the Creativity & Innovation division of the Information Systems and Technology student association.",
    tags: ["Creativity", "Innovation", "Student Association"],
  },
  {
    role: "B.Sc. Student, Information Systems & Technology", company: "Cyber University (Universitas Siber Indonesia)", period: "Semester 5", tone: "primary",
    desc: "Studying Sistem dan Teknologi Informasi while building web projects with Laravel, CodeIgniter, MySQL, and Next.js.",
    tags: ["Laravel", "CodeIgniter", "Next.js", "MySQL"],
  },
];

export const toneText = { primary: "text-primary", secondary: "text-secondary", tertiary: "text-tertiary", outline: "text-outline" } as const;
export const toneBg = { primary: "bg-primary", secondary: "bg-secondary", tertiary: "bg-tertiary", outline: "bg-outline" } as const;
