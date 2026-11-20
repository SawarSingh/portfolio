import Image from "next/image";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export function Hero() {
  const project = projects[0];
  const cover = project?.screenshots?.[0]?.src ?? project?.image;

  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 pt-20 pb-20 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.role} · {profile.location}
          </p>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">
            Build what
            <br />
            matters,
            <br />
            <span className="gradient-text">beautifully.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.tagline} I turn real-time data and thoughtful design into
            products that feel calm, quick, and dependable.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Explore the work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {social.label} ↗
              </a>
            ))}
          </div>
        </div>

        {cover ? (
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-[3rem] bg-accent/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-accent/10">
              <Image
                src={cover}
                alt={`${project.title} app screenshot`}
                width={1200}
                height={670}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-xl border border-border bg-card/95 px-5 py-4 shadow-xl backdrop-blur sm:-left-8">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {project.title}
              </p>
              <p className="mt-1 text-base font-semibold text-accent">
                Every arrival, precisely timed.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
