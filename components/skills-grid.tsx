const skills = [
  "Python",
  "Java",
  "Machine Learning",
  "React",
  "Product Design",
  "Cybersecurity",
  "SQL",
  "Cloud Computing",
  "SDLC",
  "Communication",
  "Collaboration",
]

export default function SkillsGrid() {
  return (
    <section id="skills" className="section py-12 md:py-16">
      <h2 className="h-heading text-3xl md:text-4xl">Skills</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {skills.map((s) => (
          <div
            key={s}
            className="card-wiggle text-center rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-muted)] text-[var(--color-muted-foreground)] px-3 py-2"
            aria-label={s}
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  )
}
