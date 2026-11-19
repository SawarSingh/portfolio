import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

const statusLabels: Record<NonNullable<Project["status"]>, string> = {
  live: "Live",
  "in-progress": "In progress",
  archived: "Archived",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/50">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[1200/630] overflow-hidden bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              {project.title}
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
          {project.status ? (
            <span className="shrink-0 text-xs text-muted-foreground">
              {statusLabels[project.status]}
            </span>
          ) : null}
        </div>

        <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.links.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
