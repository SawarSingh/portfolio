export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
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
    slug: "wayline",
    title: "Wayline",
    summary:
      "Every arrival, precisely timed. Wayline is a Delhi NCR commute companion that solves backwards from your arrival target to a leave-by time, using live TomTom traffic snapshots and historical durations learned by clock time. It ships as a responsive web board, an iPhone app, a home-screen widget, and a Chrome reminder extension.",
    description: [
      "Wayline started as a Next.js web dashboard and grew into a multi-client product. The web app manages named routes, records live traffic snapshots, and predicts leave-by times from historical duration at the departure clock time. I added email/password auth with httpOnly session cookies plus Google and Apple OAuth, wrapped the web UI in a Capacitor iPhone shell, built a Swift WidgetKit widget that shares a read-only token through an App Group, and shipped a Chrome extension that bootstraps its own token from the web session to send leave-by reminders.",
    ],
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
      "Built a full-stack commute intelligence web app with Next.js, TypeScript, Tailwind, and SQLite.",
      "Integrated TomTom live traffic and historical snapshots to solve leave-by time from a user's arrival target.",
      "Designed a Weather-inspired, full-screen UI with swipeable route pages and semantic timing colors.",
      "Implemented email/password sessions plus Google/Apple OAuth with provider-verified emails.",
      "Added a Capacitor iPhone shell and Swift WidgetKit widget using App Groups for zero-setup token sharing.",
      "Built a Chrome Manifest V3 extension that bootstraps its own read-only token from the web session and mirrors logout.",
      "Deployed the web app to Railway with a persistent SQLite volume, installed the iOS app/widget on a physical device with automatic token sharing, and packaged the Chrome extension for distribution.",
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
    image: "/projects/wayline.svg",
    links: [
      {
        label: "Live app",
        url: "https://wayline-production-9f677978.up.railway.app",
      },
      { label: "GitHub", url: "https://github.com/SawarSingh/wayline" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
