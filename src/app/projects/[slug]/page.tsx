import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
          <Link
            href="/#work"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to work
          </Link>

          <header className="mt-8">
            <p className="text-sm text-muted-foreground">{project.year}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {project.summary}
            </p>
          </header>

          {project.image ? (
            <figure className="mt-10">
              <div className="relative aspect-[1200/630] overflow-hidden rounded-2xl border border-border bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
              </div>
              {project.screenshotCaptions?.[0] ? (
                <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                  {project.screenshotCaptions[0]}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <div className="mt-12 space-y-10">
            {project.description.length > 0 ? (
              <section>
                <h2 className="text-sm font-medium">What I built</h2>
                <div className="mt-4 space-y-4">
                  {project.description.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            {project.features?.length ? (
              <section>
                <h2 className="text-sm font-medium">Features</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-accent">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.highlights?.length ? (
              <section>
                <h2 className="text-sm font-medium">Highlights</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-accent">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          {project.links.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  );
}
