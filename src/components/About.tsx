import { profile } from "@/data/profile";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 sm:py-24"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        About
      </h2>

      <div className="mt-8 grid gap-10 sm:grid-cols-3">
        <div className="space-y-4 sm:col-span-2">
          {profile.bio.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-medium text-foreground">Skills</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
