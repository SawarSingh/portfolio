import Image from "next/image";
import { projects } from "@/data/projects";

export function Projects() {
  const project = projects[0];
  if (!project) return null;

  const cover = project.screenshots?.[0]?.src ?? project.image;

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28"
    >
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Selected work
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          One product, built end to end.
        </h2>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-3xl bg-accent-2/10 blur-2xl"
            aria-hidden="true"
          />
          {cover ? (
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={cover}
                alt={`${project.title} overview`}
                width={1200}
                height={670}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : null}
        </div>

        <div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{project.year}</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span className="text-accent">Live</span>
          </div>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <ul className="mt-8 space-y-3">
            {(project.features ?? []).slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`/projects/${project.slug}`}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              View case study
            </a>
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
