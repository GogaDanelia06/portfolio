import type { Dictionary } from "@/i18n/dictionaries/en";

export type WorkSlug = keyof Dictionary["work"]["items"];

/** Visual and link data per project; all copy lives in the i18n dictionaries. */
export type WorkItem = {
  /** Dictionary key and anchor id (`#work-<slug>`). */
  slug: WorkSlug;
  palette: [string, string];
  /** Real screenshots; the first one is the cover. */
  images: string[];
  /** Muted loop shown in place of the cover image, for work that only makes sense in motion.
   *  Path without extension: `.webm` and `.mp4` versions sit side by side. */
  video?: string;
  /** Live site, if public. */
  url?: string;
  github?: string;
  /** Client work for a real business vs. an in-house product build. */
  kind: "client" | "product";
};

/** Bare host for display, e.g. "https://www.namoriwh.com/en" → "namoriwh.com". */
export function displayDomain(item: WorkItem) {
  const link = item.url ?? item.github;
  if (!link) return "";
  const { hostname, pathname } = new URL(link);
  const host = hostname.replace(/^www\./, "");
  // GitHub links need the repo path to mean anything.
  return host === "github.com" ? `${host}${pathname}` : host;
}

export const work: WorkItem[] = [
  {
    slug: "namori",
    palette: ["#d4a373", "#4d7c5a"],
    images: [
      "/clients/namori/1.jpg",
      "/clients/namori/2.jpg",
      "/clients/namori/3.jpg",
      "/clients/namori/4.jpg",
      "/clients/namori/5.jpg",
    ],
    url: "https://www.namoriwh.com/en",
    kind: "client",
  },
  {
    slug: "sidekick",
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
    slug: "monolith",
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
    slug: "montavia",
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
    slug: "atelier-noir",
    palette: ["#c2a98d", "#c0680f"],
    images: [
      "/projects/atelier-noir/1.jpg",
      "/projects/atelier-noir/2.jpg",
      "/projects/atelier-noir/3.jpg",
      "/projects/atelier-noir/4.jpg",
      "/projects/atelier-noir/5.jpg",
      "/projects/atelier-noir/6.jpg",
      "/projects/atelier-noir/7.jpg",
      "/projects/atelier-noir/8.jpg",
    ],
    video: "/projects/atelier-noir/showcase",
    url: "https://atelier-noir-phi-wine.vercel.app",
    github: "https://github.com/GogaDanelia06/Atelier-noir",
    kind: "product",
  },
  {
    slug: "skaoi",
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
    slug: "curated-capsule",
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
    slug: "gpadel",
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
    slug: "tbc",
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
    slug: "cana",
    palette: ["#22c55e", "#3b82f6"],
    images: ["/projects/cocktail-cans/1.jpg", "/projects/cocktail-cans/2.jpg"],
    github: "https://github.com/GogaDanelia06/cocktail-cans",
    kind: "product",
  },
  {
    slug: "job-tracker",
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
