import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 sm:py-24"
    >
      <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&apos;s work together
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          I&apos;m open to freelance work, full-time roles, and interesting
          collaborations. The fastest way to reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
