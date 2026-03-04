"use client"

type Project = {
  title: string
  blurb: string
  tags: string[]
  link?: string
  onmouseover github?: string
}

const projects: Project[] = [
  {
    title: "BoardMax – Intelligent Search Assistant for Education",
    blurb:
      "Architected end-to-end RAG (Retrieval-Augmented Generation) system following Agile principles, translating CBSE educational requirements into scalable microservices architecture with RESTful APIs.",
    tags: ["Python", "FastAPI", "RAG", "Next.js"],
    github: "https://github.com/chsriv/BoardMax",
  },
  {
    title: "ManabiFun – AI Adventurous English Learning",
    blurb:
      "Gamified English learning with five themed realms. ML models hit 88.4% weakness detection and 92.8% learning prediction across question-base.",
    tags: ["Python", "ML", "Data Viz"],
    github: "https://github.com/chsriv/ManabiFun",
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
      <h2 className="h-heading text-3xl md:text-4xl text-[var(--color-foreground)]">Projects</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => {
          const cardTone =
            idx % 4 === 0
              ? "bg-[#FFFDD0] text-slate-900" // Cream
              : idx % 4 === 1
                ? "bg-[#FFEB3B] text-slate-900" // Yellow
                : idx % 4 === 2
                  ? "bg-[#FF9800] text-white"     // Orange (White text for contrast)
                  : "bg-[#E1AD01] text-white"     // Mustard (White text for contrast)

          return (
            <article
              key={p.title}
              className={`card-wiggle rounded-2xl border-2 border-[var(--color-border)] ${cardTone} p-5 cursor-pointer transition-transform hover:scale-105 shadow-sm`}
              onClick={() => p.github && window.open(p.github, "_blank")}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && p.github) {
                  window.open(p.github, "_blank")
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View project ${p.title}`}
            >
              <h3 className="h-heading text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 leading-relaxed opacity-90 font-medium">{p.blurb}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-lg border border-black/10 bg-black/5 px-2 py-1 text-xs font-bold uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.github && (
                <div className="mt-5 flex items-center font-bold text-sm underline underline-offset-4">
                  View on GitHub →
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
