import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 sm:py-24"
    >
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Selected work
        </h2>
        <span className="text-sm text-muted-foreground">
          {sorted.length} {sorted.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
