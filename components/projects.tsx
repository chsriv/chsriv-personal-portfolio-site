"use client"

type Project = {
  title: string
  blurb: string
  tags: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: "ManabiFun – AI Adventurous English Learning",
    blurb:
      "Gamified English learning with five themed realms. ML models hit 88.4% weakness detection and 92.8% learning prediction across 258 questions.",
    tags: ["Python", "ML", "Data Viz"],
    github: "https://github.com/chsriv/ManabiFun-English-Adventure",
  },
  {
    title: "JinjjaMood – Reflective Mood Journaling",
    blurb:
      "Web app for reflective mood tracking with animated entries and interactive insights. Deployed with Supabase backend.",
    tags: ["Supabase", "Netlify", "Full‑stack"],
    github: "https://github.com/chsriv/JinjjaMood",
  },
  {
    title: "QuizzzWithMe – Interactive Web Trivia",
    blurb: "Responsive trivia with real‑time score tracking and a seamless UI.",
    tags: ["Vite", "TypeScript", "Tailwind"],
    github: "https://github.com/chsriv/quizzzwithme",
  },
  {
    title: "RACKON – Cloud Inventory System for MSMEs",
    blurb: "AI‑driven dashboard that improved inventory tracking efficiency by ~40% for small and medium businesses.",
    tags: ["React", "Node.js", "Firebase"],
    github: "https://github.com/chsriv/RackON-by-TeamAviDhrithi",
  },
  {
    title: "Alumni Association Platform – SIH 2024 (Internal Top 10)",
    blurb: "Connects alumni and students for networking and mentorship. Led UI/UX and integrated backend services.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chsriv/alumni-association-platform",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section py-12 md:py-16">
      <h2 className="h-heading text-3xl md:text-4xl">Projects</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => {
          const cardTone =
            idx % 4 === 0
              ? "card-cream"
              : idx % 4 === 1
                ? "card-yellow"
                : idx % 4 === 2
                  ? "card-orange"
                  : "card-mustard"

          return (
            <article
              key={p.title}
              className={`card-wiggle rounded-2xl border-2 border-[var(--color-border)] ${cardTone} p-5 cursor-pointer transition-transform hover:scale-105`}
              role="link"
              tabIndex={0}
              href={p.github}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && p.github) {
                  window.open(p.github, "_blank")
                }
              }}
            >
              <h3 className="h-heading text-2xl">{p.title}</h3>
              <p className="mt-2 leading-relaxed">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-accent)] text-[var(--color-accent-foreground)] px-2 py-1 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[var(--color-accent)] font-semibold hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on GitHub →
                </a>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
