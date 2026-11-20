const rows = [
  {
    before: "A current ETA you have to interpret",
    after: "A leave-by time solved from your arrival target",
  },
  {
    before: "One dashboard, one tab",
    after: "Web, iPhone, widget, and browser extension in sync",
  },
  {
    before: "A single estimate for today",
    after: "Recorded history, intraday trend, and same-week comparison",
  },
  {
    before: "Timing that resets when you close the app",
    after: "Background snapshots that keep the history growing",
  },
];

export function Highlights() {
  return (
    <section id="why" className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Why Waylink
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
          The difference is in the details.
        </h2>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border">
        <div className="grid grid-cols-2 border-b border-border bg-card px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em]">
          <span className="text-muted-foreground">Typical commute tools</span>
          <span className="text-accent">Waylink</span>
        </div>
        {rows.map((row) => (
          <div
            key={row.after}
            className="grid grid-cols-1 border-b border-border last:border-b-0 sm:grid-cols-2"
          >
            <div className="border-b border-border px-6 py-5 text-sm leading-relaxed text-muted-foreground sm:border-b-0 sm:border-r">
              {row.before}
            </div>
            <div className="px-6 py-5 text-sm leading-relaxed text-foreground">
              {row.after}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
