import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-14">
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Have something in mind?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            I&apos;m open to freelance work, full-time roles, and interesting
            collaborations. The fastest way to reach me is email.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-accent/60 hover:text-accent"
              >
                {social.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
