import { profile } from "@/data/profile";

const questions = [
  {
    q: "What kind of work do you do?",
    a: "I build web and mobile products with a focus on real-time data, clear interfaces, and dependable delivery. I enjoy problems where the UX and the underlying engineering matter equally.",
  },
  {
    q: "What is Waylink?",
    a: "Waylink is a Delhi NCR commute companion. It solves backwards from your arrival target to a leave-by time using live traffic and recorded history, then follows you across the web, iPhone, widget, and browser extension.",
  },
  {
    q: "What did you build for it?",
    a: "The responsive web board, the iPhone app and home-screen widget, the browser reminder extension, and the account and device-access pieces that keep all of them in sync.",
  },
  {
    q: "Are you available for new work?",
    a: "Yes. I'm open to freelance work, full-time roles, and interesting collaborations.",
  },
  {
    q: "How can I reach you?",
    a: `Email is fastest: ${profile.email}. You can also find me on LinkedIn and GitHub through the links below.`,
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border/60 bg-card/30 scroll-mt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            FAQs
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Good questions, clear answers.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {questions.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                {item.q}
                <span className="text-lg text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
