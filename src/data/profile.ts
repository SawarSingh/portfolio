export type Social = {
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  bio: string[];
  skills: string[];
  email: string;
  resumeUrl?: string;
  socials: Social[];
};

export const profile: Profile = {
  name: "Sawar Pratap Singh",
  role: "Software Engineer",
  tagline: "I build fast, thoughtful web and mobile applications.",
  location: "Delhi, India",
  bio: [
    "I'm a software engineer who enjoys turning ideas into products people actually use. I work across the stack with TypeScript, React, and Next.js, and I care about performance, clean interfaces, and shipping.",
    "Lately I've been building data-rich dashboards and cross-platform apps. I like problems that mix real-time data, good UX, and a bit of polish.",
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "SQLite",
    "Capacitor",
    "Swift",
    "Docker",
  ],
  email: "hello@example.com",
  resumeUrl: "",
  socials: [
    { label: "GitHub", url: "https://github.com/your-username" },
    { label: "LinkedIn", url: "https://linkedin.com/in/your-username" },
    { label: "X", url: "https://x.com/your-username" },
  ],
};
