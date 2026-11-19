import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24"
    >
      <p className="text-sm font-medium text-accent">
        {profile.role} · {profile.location}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
        {profile.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          View work
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          Get in touch
        </a>
        {profile.resumeUrl ? (
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Resume
          </a>
        ) : null}
      </div>

      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
