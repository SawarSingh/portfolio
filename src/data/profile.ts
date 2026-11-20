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
    "I'm a software engineer who enjoys turning ideas into products people actually use. I care about performance, clean interfaces, and shipping work that holds up in the real world.",
    "Lately I've been building data-rich dashboards and cross-platform apps. I like problems that mix real-time data, good UX, and a bit of polish.",
  ],
  email: "hello@example.com",
  resumeUrl: "",
  socials: [
    { label: "GitHub", url: "https://github.com/your-username" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sawar-singh-04a08514b/",
    },
    { label: "X", url: "https://x.com/your-username" },
  ],
};
