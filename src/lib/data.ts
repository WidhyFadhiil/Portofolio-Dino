export const profile = {
  name: "Widhy Fadhiil Aldino",
  short: "Widhy",
  role: "Backend Engineer",
  email: "widhy.aldino@devmail.com",
  location: "Jakarta, Indonesia (UTC+7)",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  x: "https://x.com",
  whatsapp: "https://wa.me/",
  // Ganti dengan file CV asli di folder /public
  cvUrl: "/cv-widhy.pdf",
  // Ganti dengan foto lokal di /public (mis. "/profile.jpg") agar tidak bergantung pada URL Stitch
  photo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB0raeYSDLcWFHjYc0v45BRjQm1HkENQ6MqqzD2d62NrOHQBmK_ujHwlrrTTcONMVril0dclm2ne90kJ7ERyhQQNdFgfc4TMy-6gT-gHKm7wvzsY_op479ybYSbfpZBUPl4bbs4dlPMN8sA6g3BbkMCaJlPsHqIVCqbwHoG2uyqPDjJQx3q5pdwD0ILf756Zj5kJkZ7iaYzyC81zhFtB6shch7la-_sEKtGIRgPjwp02EUVBwZG3RD8",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { label: "Years of Experience", tag: "EXP", value: 5, suffix: "+", icon: "history", tone: "secondary" },
  { label: "Production Projects", tag: "SHIP", value: 42, suffix: "+", icon: "rocket", tone: "primary" },
  { label: "Reliability Track Record", tag: "SLA", value: 99.99, suffix: "%", decimals: 2, icon: "verified", tone: "tertiary" },
  { label: "Monthly API Requests", tag: "RPS", value: 15, suffix: "M+", icon: "dataset", tone: "primary" },
] as const;

export const aboutChips = ["Microservices", "Event Queues", "PostgreSQL Tuning", "Docker & K8s", "Clean Architecture"];

export const stack = [
  {
    title: "Backend Engineering",
    badge: "Primary Focus",
    icon: "dns",
    tone: "primary",
    desc: "High throughput services, gRPC, REST APIs, asynchronous task processing.",
    items: [
      ["Go (Golang)", "Daily Driver"],
      ["Node.js / Express", "Production Standard"],
      ["Laravel (PHP)", "Enterprise Ready"],
      ["Python & NestJS", "Specialized"],
    ],
  },
  {
    title: "Databases & Caching",
    badge: "Data Tier",
    icon: "database",
    tone: "secondary",
    desc: "Relational indexing, in-memory stores, distributed transactions, search engines.",
    items: [
      ["PostgreSQL", "Daily Driver"],
      ["Redis & Streams", "Production Standard"],
      ["MySQL", "Advanced"],
      ["Elasticsearch / Mongo", "Search & Doc"],
    ],
  },
  {
    title: "Frontend & UI",
    badge: "Web Client",
    icon: "devices",
    tone: "primary",
    desc: "Type-safe component architectures, responsive layouts, API consumer interfaces.",
    items: [
      ["TypeScript", "Daily Driver"],
      ["Next.js & React", "Production Standard"],
      ["Tailwind CSS", "Daily Driver"],
      ["HTML5 / CSS3 / Vite", "Standard"],
    ],
  },
  {
    title: "DevOps & Cloud",
    badge: "Infra",
    icon: "cloud",
    tone: "tertiary",
    desc: "Container orchestration, CI/CD automated deployment, observability.",
    items: [
      ["Docker & Compose", "Daily Driver"],
      ["AWS (ECS, S3, RDS)", "Production Standard"],
      ["Kubernetes & Helm", "Proficient"],
      ["GitHub Actions & Linux", "Automated"],
    ],
  },
] as const;

export const marqueeTech = [
  "Go", "Node.js", "Laravel", "PostgreSQL", "Redis", "Kafka", "gRPC", "Docker", "Kubernetes", "AWS",
  "TypeScript", "Next.js", "Tailwind", "GitHub Actions", "Prometheus", "OpenTelemetry",
];

export type Category = "backend" | "fullstack" | "opensource";

export const projects: {
  title: string; kind: string; year: string; category: Category; tone: "primary" | "secondary" | "tertiary";
  desc: string; tags: string[]; linkLabel: string; repoLabel: string;
}[] = [
  {
    title: "ApexCommerce Concurrency Engine", kind: "Full-Stack E-Commerce", year: "2024", category: "fullstack", tone: "secondary",
    desc: "Multi-tenant backend platform engineered to sustain 10,000 concurrent checkout requests per second with distributed lock management, Stripe webhooks reconciliation, and Next.js headless storefront.",
    tags: ["Go", "PostgreSQL", "Next.js", "Stripe API"], linkLabel: "Live Demo", repoLabel: "GitHub",
  },
  {
    title: "PulseMetrics Real-Time Analytics API", kind: "Backend / Telemetry", year: "2023", category: "backend", tone: "primary",
    desc: "Time-series ingestion service built over TimescaleDB and Redis Pub/Sub with secure WebSockets streaming real-time server vitals to enterprise monitoring dashboards.",
    tags: ["Node.js", "TimescaleDB", "WebSockets", "Docker"], linkLabel: "Live Demo", repoLabel: "GitHub",
  },
  {
    title: "CloudGate Microservice API Gateway", kind: "API Gateway", year: "2023", category: "backend", tone: "tertiary",
    desc: "High-performance reverse proxy featuring token bucket rate-limiting, dynamic JWT authentication, and OpenTelemetry request tracing with less than 2ms average overhead.",
    tags: ["Go", "gRPC", "Redis", "JWT"], linkLabel: "Live Demo", repoLabel: "GitHub",
  },
  {
    title: "DevCraft CLI Developer Suite", kind: "Open Source Tooling", year: "2024", category: "opensource", tone: "primary",
    desc: "Open source command-line utility automating local Kubernetes container provisioning, database mock seeders, and API regression tests directly inside terminal workflows.",
    tags: ["Go / Cobra", "Docker Engine", "Bash", "Cross-platform"], linkLabel: "Package Docs", repoLabel: "420+ Stars",
  },
];

export const experience = [
  {
    role: "Senior Backend Engineer", company: "FinTech Velocity Lab", period: "2022 — Present", tone: "primary",
    desc: "Spearheaded the core transactional payment routing microservice handling over $2.5M in daily volume. Re-engineered cache validation loops with Redis cluster and Go channels, which slashed p99 payment gateway latency by 45%. Conducted architectural reviews and mentored 4 junior and mid-level backend developers.",
    tags: ["Go (Golang)", "PostgreSQL", "Kafka", "Kubernetes"],
  },
  {
    role: "Full Stack Developer", company: "HyperScale Digital", period: "2020 — 2022", tone: "secondary",
    desc: "Architected and shipped multi-tenant enterprise SaaS applications using Laravel and Next.js. Optimized complex database queries and automated background queues, yielding a 60% boost in overall API throughput and stellar Google Core Web Vitals across client portals.",
    tags: ["Laravel", "Next.js / TypeScript", "MySQL", "Tailwind CSS"],
  },
  {
    role: "Software Engineer", company: "DataForge Labs", period: "2018 — 2020", tone: "outline",
    desc: "Designed secure RESTful APIs for analytics aggregation. Introduced automated Dockerized CI/CD pipelines, accelerating release cycles from 2 full days down to 30 automated minutes with zero downtime blue/green rollouts.",
    tags: ["Node.js", "Docker", "GitHub Actions", "MongoDB"],
  },
];

export const testimonials = [
  { quote: "Widhy transformed our payment system architecture. His depth of knowledge in Go concurrency and database locking saved us from severe downtime during our biggest flash sale to date.", name: "Marcus Kramer", role: "CTO @ FinTech Velocity Lab", initials: "MK", tone: "primary" },
  { quote: "Rarely do you find an engineer who can write rock-solid backend services and simultaneously respect clean UI nuances. Widhy communicates with crystal clarity and delivers ahead of milestones.", name: "Aria Lestari", role: "VP of Eng @ HyperScale Digital", initials: "AL", tone: "secondary" },
  { quote: "Widhy rebuilt our automated CI/CD flow from the ground up. Not only did deployments become predictable, but our developer happiness index skyrocketed. Absolute pleasure to work with!", name: "David Hartono", role: "Engineering Director @ DataForge", initials: "DH", tone: "tertiary" },
];

export const toneText = { primary: "text-primary", secondary: "text-secondary", tertiary: "text-tertiary", outline: "text-outline" } as const;
export const toneBg = { primary: "bg-primary", secondary: "bg-secondary", tertiary: "bg-tertiary", outline: "bg-outline" } as const;
