# portfolio

Personal portfolio site. Next.js App Router, TypeScript, Tailwind v4.

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — `tsc --noEmit`

## Content

All content lives in `src/data`:

- `profile.ts` — name, role, bio, email, socials.
- `projects.ts` — the project list rendered on the homepage and detail pages.
- `site.ts` — the canonical site URL (used for metadata, sitemap, robots).

To add a project, append an entry to the `projects` array in `src/data/projects.ts`.
The detail page at `/projects/<slug>` and the sitemap entry are generated automatically.
Drop cover images in `public/projects/` and reference them as `/projects/<file>`.

## Deploy

Deployed on Vercel. Set the real domain in `src/data/site.ts` and update
`metadataBase` usage in `src/app/layout.tsx` before going live.
