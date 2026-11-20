import { profile } from "@/data/profile";

const points = [
  {
    title: "Signals over guesswork",
    body: "Live snapshots and recorded history drive each leave-by time, so the answer changes with the road, not with a hunch.",
  },
  {
    title: "Every surface, one experience",
    body: "The same commute follows you across the web board, iPhone app, home-screen widget, and browser extension.",
  },
  {
    title: "Ready for the real world",
    body: "Accounts, sign-in, device access, and background refresh are part of the build, not an afterthought.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="border-y border-border/60 bg-card/30 scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              How I work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Built with intent, not guesswork.
            </h2>
          </div>

          <div className="space-y-4">
            {profile.bio.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {points.map((point, index) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <span className="text-xs font-semibold text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
