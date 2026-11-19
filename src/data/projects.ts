export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
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
      "A live commute dashboard for Delhi with real-time traffic, saved routes, and a native iOS app.",
    description: [
      "Commute Board helps people in Delhi understand how their daily routes behave over time. It pulls live traffic data, snapshots it on a schedule, and turns it into clear trends.",
      "The app ships as a Next.js web dashboard, a browser extension, and an iOS app built with Capacitor. It includes multi-user auth with Google and Apple sign-in, per-route history, and a reverse-geocoding search.",
    ],
    tags: ["Next.js", "TypeScript", "SQLite", "Capacitor", "iOS", "Leaflet"],
    year: 2026,
    featured: true,
    status: "live",
    image: "/projects/commute-board.png",
    links: [
      { label: "Live Demo", url: "https://example.com" },
      { label: "GitHub", url: "https://github.com/your-username/commute-board" },
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
