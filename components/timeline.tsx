import Reveal from "./reveal"

const items = [
  {
    title: "Event Management Team — GDG on Campus, GITAM Hyderabad",
    period: "Sep 2025 – Present · 1 mo",
    detail:
      "Creating memorable tech experiences, building vibrant developer communities at GDGC and fostering community connections.",
  },
  {
    title: "Cloud Team — GDG on Campus, GITAM Hyderabad",
    period: "Sep 2024 – Sep 2025 · 1 yr 1 mo",
    detail:
      "Worked on cross-domain projects and events with students who really know their stuff — smart, creative, and cool to work with.",
  },
  {
    title: "Tech Team — HackOps GITAM",
    period: "Jan 2025 – Present · 9 mo",
    detail:
      "Gained cybersecurity fundamentals through TryHackMe, Hack The Box, and OverTheWire — focused on CTFs, Linux, and practical skills.",
  },
  {
    title: "Member — GitHub Community, GITAM Hyderabad",
    period: "2025 – Present",
    detail: "",
  },
  {
    title: "Member — COGAAN Club",
    period: "Sep 2024 – Present · 1 yr 1 mo",
    detail:
      "Collaboration is at the heart of everything here, and I’ve loved being part of that. From exciting projects to unforgettable people — it’s all been worth it!",
  },
  {
    title: "Student Volunteer — National Service Scheme",
    period: "Aug 2024 – Present · 1 yr 2 mo",
    detail:
      "Volunteering through NSS reconnected me with nature, culture, and community — a grounding experience I’m grateful for.",
  },
  {
    title: "Web3 Fellow — DoraDAO x Girls Who Yap",
    period: "Jul 2025 – Sep 2025 · 3 mo",
    detail: "DoraDAO x Girls Who Yap — Web3 Fellowship.",
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="section py-12 md:py-16">
      <Reveal className="a-fade-in a-slide-up" once>
        <h2 className="h-heading text-3xl md:text-4xl">Experience</h2>
      </Reveal>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <ol className="relative border-l-4 border-[var(--color-secondary)] pl-6 space-y-6">
            {items.map((it, idx) => (
              <Reveal
                as="li"
                key={idx}
                once={false}
                className="relative a-fade-in a-slide-up a-fade-out a-slide-down-out"
                // eslint-disable-next-line react/no-unknown-property
                style={{ animationDelay: `${idx * 80}ms` } as any}
              >
                <span
                  aria-hidden
                  className="absolute -left-3 top-1.5 h-4 w-4 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-border)]"
                />
                <h3 className="h-heading text-2xl">{it.title}</h3>
                <span className="mt-1 inline-block rounded-lg bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] px-2 py-0.5 text-xs">
                  {it.period}
                </span>
                {it.detail ? <p className="mt-2 leading-relaxed">{it.detail}</p> : null}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
