"use client"

import { cn } from "@/lib/utils"

type Project = {
  title: string
  blurb: string
  tags: string[]
  github?: string
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
      <h2 className="h-heading text-3xl md:text-4xl text-[var(--color-foreground)]">
        Projects
      </h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => {
          const cardTone =
            idx % 4 === 0
              ? "bg-[#FFFDD0] text-slate-900" 
              : idx % 4 === 1
                ? "bg-[#FFEB3B] text-slate-900" 
                : idx % 4 === 2
                  ? "bg-[#FF9800] text-white"     
                  : "bg-[#E1AD01] text-white"     

          return (
            <a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "card-wiggle block group rounded-2xl border-2 border-[var(--color-border)] p-6 transition-all hover:scale-[1.02] hover:shadow-xl",
                cardTone
              )}
            >
              <article>
                <div className="flex justify-between items-start">
                  <h3 className="h-heading text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">
                    {p.title}
                  </h3>
                  {/* Subtle external link icon that appears on hover */}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                    ↗
                  </span>
                </div>
                
                <p className="mt-3 leading-relaxed opacity-90 font-medium text-balance">
                  {p.blurb}
                </p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-lg border border-black/10 bg-black/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </a>
          )
        })}
      </div>
    </section>
  )
}
