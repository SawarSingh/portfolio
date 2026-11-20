# Portfolio

A personal portfolio site to showcase projects and apps. Built with Next.js (App Router),
TypeScript, and Tailwind CSS v4.

## Features

- Hero, selected work, about, and contact sections
- Per-project detail pages generated from data (`/projects/<slug>`)
- Light/dark theme with system preference detection and no flash on load
- Responsive layout with a mobile nav
- SEO: metadata, Open Graph, sitemap, and robots

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

Everything you need to change lives in `src/data`:

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, role, tagline, bio, skills, email, social links |
| `src/data/projects.ts` | The project list (cards + detail pages) |
| `src/data/site.ts` | Your live site URL (metadata, sitemap, robots) |

### Adding a project

Append an entry to the `projects` array:

```ts
{
  slug: "my-app",                 // used in the URL: /projects/my-app
  title: "My App",
  summary: "One-line description shown on the card.",
  description: ["Longer paragraph one.", "Longer paragraph two."],
  year: 2026,
  status: "live",                 // "live" | "in-progress" | "archived"
  image: "/projects/my-app.png",  // put the file in public/projects/
  links: [
    { label: "Live Demo", url: "https://..." },
    { label: "GitHub", url: "https://github.com/..." },
  ],
}
```

Add cover images to `public/projects/`. Recommended size: 1200×630.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Add your custom domain under **Settings → Domains**.
5. Set your real URL in `src/data/site.ts` and redeploy.

Or from the CLI:

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

## Project structure

```
src/
  app/
    layout.tsx            # fonts, metadata, theme script
    page.tsx              # homepage
    projects/[slug]/      # project detail pages
    sitemap.ts, robots.ts # SEO
  components/             # Nav, Hero, Projects, About, Contact, Footer
  data/                   # profile.ts, projects.ts, site.ts
public/projects/          # project cover images
```
