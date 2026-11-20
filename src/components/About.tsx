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

      <div className="mt-8 space-y-4">
        {profile.bio.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
