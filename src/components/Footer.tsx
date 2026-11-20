import { profile } from "@/data/profile";

const year = new Date().getFullYear();

const explore = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "Approach" },
  { href: "#why", label: "Why Waylink" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
                S
              </span>
              <span className="font-semibold tracking-tight">Sawar Singh</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Explore
            </h3>
            <div className="mt-5 space-y-3">
              {explore.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Elsewhere
            </h3>
            <div className="mt-5 space-y-3">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Say hello
            </h3>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 block break-all text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {year} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
