export type WorkItem = {
  name: string;
  /** Anchor id, e.g. "#work-sidekick". */
  slug: string;
  category: string;
  summary: string;
  tags: string[];
  palette: [string, string];
  /** Real screenshots; the first one is the cover. */
  images: string[];
  /** Live site, if public. */
  url?: string;
  github?: string;
  /** Client work for a real business vs. an in-house product build. */
  kind: "client" | "product";
};

export const work: WorkItem[] = [
  {
    name: "Sidekick",
    slug: "sidekick",
    category: "AI SaaS Platform",
    summary:
      "AI sales assistant that answers customers and takes orders on Facebook, Instagram, and WhatsApp 24/7, with a live demo tester and analytics dashboard.",
    tags: ["Product UI", "Landing Page", "Dashboard", "KA / EN"],
    palette: ["#22d3ee", "#6366f1"],
    images: [
      "/clients/sidekick/1.jpg",
      "/clients/sidekick/2.jpg",
      "/clients/sidekick/3.jpg",
    ],
    url: "https://sidekick.ge",
    kind: "client",
  },
  {
    name: "Monolith Group",
    slug: "monolith",
    category: "Real Estate Developer",
    summary:
      "Corporate platform for one of Georgia's residential developers — project showcases, construction progress, Monolith Card program, news, and FAQ.",
    tags: ["Corporate Website", "Project Catalog", "CMS", "KA / EN / RU"],
    palette: ["#f59e0b", "#ef4444"],
    images: [
      "/clients/monolith/1.jpg",
      "/clients/monolith/2.jpg",
      "/clients/monolith/3.jpg",
    ],
    url: "https://monolith.ge",
    kind: "client",
  },
  {
    name: "Montavia",
    slug: "montavia",
    category: "Design & Construction",
    summary:
      "Minimal, architecture-first website for a design, construction, and renovation company with a numbered project portfolio and bold typography.",
    tags: ["Brand Website", "Portfolio", "Responsive UI", "KA / EN"],
    palette: ["#a3e635", "#10b981"],
    images: [
      "/clients/montavia/1.jpg",
      "/clients/montavia/2.jpg",
      "/clients/montavia/3.jpg",
    ],
    url: "https://montavia.ge",
    kind: "client",
  },
  {
    name: "Skaoi — Georgia Ski Hub",
    slug: "skaoi",
    category: "Travel Web App",
    summary:
      "Bilingual hub for Gudauri, Bakuriani, Goderdzi, and Mestia — live weather and lift status, interactive trail maps, a multi-step trip planner with live pricing, and resort comparison.",
    tags: ["Live Weather API", "Trip Planner", "Trail Maps", "KA / EN"],
    palette: ["#38bdf8", "#6366f1"],
    images: [
      "/projects/skaoi/1.jpg",
      "/projects/skaoi/2.jpg",
      "/projects/skaoi/3.jpg",
      "/projects/skaoi/4.jpg",
      "/projects/skaoi/5.jpg",
    ],
    github: "https://github.com/GogaDanelia06/skaoi-next",
    kind: "product",
  },
  {
    name: "The Curated Capsule",
    slug: "curated-capsule",
    category: "Shoppable Fashion Magazine",
    summary:
      "Editorial fashion magazine you can shop — trend stories, resale value tracking, price-drop alerts, and a saved capsule that sends you to retailers in one click.",
    tags: ["Editorial Design", "E-commerce", "Price Tracking", "Next.js 16"],
    palette: ["#f5f5f4", "#d6a77a"],
    images: [
      "/projects/curated-capsule/1.jpg",
      "/projects/curated-capsule/2.jpg",
      "/projects/curated-capsule/3.jpg",
    ],
    url: "https://thecuratedcapsule.vercel.app",
    github: "https://github.com/GogaDanelia06/thecuratedcapsule",
    kind: "product",
  },
  {
    name: "GPadel",
    slug: "gpadel",
    category: "Padel Booking Platform",
    summary:
      "Padel court booking platform with a full booking flow, dynamic pricing rules, discount codes, and an admin panel for managing courts and schedules.",
    tags: ["Court Booking", "Dynamic Pricing", "Discount Codes", "Admin Panel"],
    palette: ["#84cc16", "#06b6d4"],
    images: [
      "/Padel/1.png",
      "/Padel/2.png",
      "/Padel/3.png",
      "/Padel/4.png",
      "/Padel/5.png",
      "/Padel/6.png",
      "/Padel/7.png",
      "/Padel/8.png",
      "/Padel/9.png",
      "/Padel/10.png",
    ],
    github: "https://github.com/GogaDanelia06/gpadel",
    kind: "product",
  },
  {
    name: "TBC Internet Banking",
    slug: "tbc",
    category: "Banking Dashboard",
    summary:
      "Production-style internet banking inspired by TBC Bank — authentication, transfers, templates, multilingual support, and dark/light themes.",
    tags: ["Authentication", "Transfers", "Multilingual", "Dark / Light"],
    palette: ["#00aeef", "#2563eb"],
    images: [
      "/TBC/1.png",
      "/TBC/2.png",
      "/TBC/3.png",
      "/TBC/4.png",
      "/TBC/5.png",
      "/TBC/6.png",
      "/TBC/7.png",
      "/TBC/8.png",
      "/TBC/9.png",
    ],
    github: "https://github.com/GogaDanelia06/tbc-web",
    kind: "product",
  },
  {
    name: "Cana",
    slug: "cana",
    category: "Product Landing Page",
    summary:
      "Bold launch page for a zero-proof sparkling cocktail line — animated cans, floating fruit, and flavor switching that re-themes the whole page.",
    tags: ["Product Launch", "Animation", "Flavor Switcher", "Branding"],
    palette: ["#22c55e", "#3b82f6"],
    images: ["/projects/cocktail-cans/1.jpg", "/projects/cocktail-cans/2.jpg"],
    github: "https://github.com/GogaDanelia06/cocktail-cans",
    kind: "product",
  },
  {
    name: "Job Application Tracker",
    slug: "job-tracker",
    category: "Career Dashboard",
    summary:
      "Job search command center with authentication, a kanban pipeline, interview tracking, and an analytics dashboard backed by MongoDB.",
    tags: ["Kanban Board", "Analytics", "MongoDB", "Auth"],
    palette: ["#8b5cf6", "#ec4899"],
    images: [
      "/Job-Tracker/1.png",
      "/Job-Tracker/2.png",
      "/Job-Tracker/3.png",
      "/Job-Tracker/4.png",
      "/Job-Tracker/5.png",
      "/Job-Tracker/6.png",
      "/Job-Tracker/7.png",
      "/Job-Tracker/8.png",
      "/Job-Tracker/9.png",
      "/Job-Tracker/10.png",
      "/Job-Tracker/11.png",
      "/Job-Tracker/12.png",
    ],
    github: "https://github.com/GogaDanelia06/job-application-tracker",
    kind: "product",
  },
];

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Angular",
  "MongoDB",
  "MySQL",
  "Authentication",
  "API Integration",
  "Responsive Design",
  "UI/UX",
];

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Mainstream / Kinotechy",
    date: "2026 — Present",
    text: "Developing modern web applications, dashboards, responsive interfaces, and production-focused frontend architecture.",
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Remote / Contract Projects",
    date: "2023 — Present",
    text: "Building business websites, dashboards, and custom web applications using React, Next.js, and modern frontend tools.",
  },
  {
    role: "Front-End Developer",
    company: "LEPL Levan Samkharauli National Forensics Bureau",
    date: "2024 — 2025",
    text: "Developed frontend applications using Angular and JavaScript, improving usability and internal workflows.",
  },
];
