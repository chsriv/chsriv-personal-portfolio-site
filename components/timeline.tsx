import Reveal from "./reveal"

const items = [
  {
    title: "Scholar — SheFi Season 16",
    period: "March 2026 – Present",
    detail: "Mastering end-to-end onchain operations, hardware security, and DeFi protocols on Base & Rootstock, integrated with AI-driven productivity workflows.",
  },
  {
    title: "Member — GitHub Community, GITAM Hyderabad",
    period: "2025 – Present",
    detail: "Contributed to technical execution for EPOCH 3.0, GitHub's flagship event; orchestrated technical workshops and developer community engagement.",
  },
  {
    title: "Tech Team — HackOps GITAM",
    period: "Jan 2025 – Present",
    detail: "Specializing in cybersecurity fundamentals (Linux, CTFs) via TryHackMe and Hack The Box to build security-first software development habits.",
  },
  {
    title: "Communications Lead — Homecoming 2025 Team",
    period: "Nov 2025 – Dec 2025",
    detail: "Scaled digital communication to 20,000+ alumni, implementing personalized messaging strategies that increased engagement rates by 25%.",
  },
  {
    title: "Cloud Team — GDG on Campus, GITAM Hyderabad",
    period: "Sep 2024 – Sep 2025",
    detail: "Collaborated on cross-domain cloud architecture projects and technical events, focusing on scalable student-led developer solutions.",
  },
  {
    title: "Web3 Fellow — DoraDAO x Girls Who Yap",
    period: "Jul 2025 – Sep 2025",
    detail: "Completed intensive Web3 fellowship focusing on decentralized governance and blockchain development fundamentals.",
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
