const stats = [
  { value: "04", label: "platforms shipped" },
  { value: "Live", label: "traffic-aware timing" },
  { value: "NCR", label: "Delhi commute focus" },
  { value: "2026", label: "latest release" },
];

export function Stats() {
  return (
    <section className="border-b border-border/60 bg-card/40">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
