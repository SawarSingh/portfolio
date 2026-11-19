export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  techStack?: string;
  features?: string[];
  highlights?: string[];
  screenshotCaptions?: string[];
  tags: string[];
  year: number;
  featured?: boolean;
  status?: "live" | "in-progress" | "archived";
  image?: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "commute-board",
    title: "Commute Board",
    summary:
      "Commute Board is a Delhi NCR commute companion that answers the question most traffic apps skip: when should you leave? It stores your regular routes, records live TomTom traffic snapshots over time, and learns how long each trip typically takes at a given clock time, then solves backwards from your arrival target to produce a leave-by time. It ships as a responsive web board, an iPhone app, a home-screen widget, and a Chrome reminder extension.",
    description: [
      "Commute Board started as a Next.js web dashboard and grew into a multi-client product. The web app manages named routes, records live traffic snapshots, and predicts leave-by times from historical duration at the departure clock time. I added email/password auth with httpOnly session cookies plus Google and Apple OAuth, wrapped the web UI in a Capacitor iPhone shell, built a Swift WidgetKit widget that shares a read-only token through an App Group, and shipped a Chrome extension that bootstraps its own token from the web session to send leave-by reminders.",
    ],
    techStack:
      "Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4 · SQLite via node:sqlite on Railway with a persistent volume · TomTom Routing/Search and Traffic Stats · Leaflet with CARTO dark tiles · DB-backed sessions with scrypt hashes and Google/Apple OAuth · Capacitor iOS with a Swift WidgetKit widget and App Groups · Chrome Manifest V3 extension.",
    features: [
      "Multiple named routes, each with an arrival target and an optional via point to pin the intended corridor.",
      "Leave-by time solved backwards from your arrival target using recorded history: last 7 days, then same week last year, then the live ETA.",
      "Paired return trips that stay in sync as either side is edited.",
      "Route discovery with TomTom typeahead search and up to three alternatives on dark map previews.",
      "History and insights: 7-day fastest/typical/slowest, on-time rate, today's 15-minute trend, a 24-hour best-time profile, and a same-week-last-year comparison.",
      "Live traffic snapshots refreshed by a background worker, so history builds even when the app is closed.",
      "iPhone app and WidgetKit widget showing the next route, live drive time, and leave-by, with zero-setup token sharing.",
      "Chrome extension that mirrors your web session and sends leave-by notifications at configurable lead times.",
    ],
    highlights: [
      "Built a full-stack commute intelligence app with Next.js, TypeScript, Tailwind, and SQLite, deployed on Railway with a persistent volume.",
      "Designed a leave-by prediction that solves backwards from a user's arrival target using recorded traffic history (last 7 days, then same week last year, then the live ETA).",
      "Integrated TomTom live traffic and search behind a single adapter, with route alternatives, an optional via point, and mock fallbacks for local development.",
      "Implemented email/password sessions with scrypt hashes and httpOnly cookies, plus Google and Apple OAuth with provider-verified emails.",
      "Created a Weather-inspired, full-screen UI with swipeable route pages, semantic timing colors, and 7-day and intraday history panels.",
      "Shipped a Capacitor iPhone app (installed on a physical device) and a Swift WidgetKit widget using App Groups for zero-setup, read-only token sharing.",
      "Built a Chrome Manifest V3 extension that mirrors the signed-in web session, polls a read-only token API, and sends deduplicated leave-by notifications.",
    ],
    screenshotCaptions: [
      "The overview board: every saved route with its live drive time and leave-by time.",
      "Route detail: a Weather-style ETA, leave-by, 7-day history, and today's intraday trend.",
      "Route options: three TomTom alternatives on dark map previews, with a pin to lock the corridor.",
      "iPhone: the app beside its home-screen widget showing the next commute at a glance.",
      "Chrome extension: current IST time, 'if you leave by…', and configurable reminder presets.",
      "Settings: the route manager and the read-only widget token manager.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SQLite",
      "TomTom",
      "Leaflet",
      "Capacitor",
      "Swift",
      "Chrome MV3",
    ],
    year: 2026,
    featured: true,
    status: "live",
    image: "/projects/commute-board.svg",
    links: [
      {
        label: "Live app",
        url: "https://commute-board-production-2300a8d2.up.railway.app",
      },
      {
        label: "GitHub",
        url: "https://github.com/SawarSingh/commute-board",
      },
    ],
  },
  {
    slug: "hello-next",
    title: "Hello Next",
    summary:
      "A minimal Next.js starter used as a launchpad for new apps and experiments.",
    description: [
      "A small, opinionated Next.js starter with TypeScript, Tailwind, and the App Router wired up. I use it to spin up new ideas without re-doing boilerplate.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: 2025,
    status: "in-progress",
    links: [
      { label: "GitHub", url: "https://github.com/your-username/hello-next" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
