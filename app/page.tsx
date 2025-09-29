import Hero from "@/components/hero"
import About from "@/components/about"
import SkillsGrid from "@/components/skills-grid"
import Projects from "@/components/projects"
import Timeline from "@/components/timeline"
import Contact from "@/components/contact"

export default function HomePage() {
  return (
    <main role="main" className="bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Hero />
      <About />
      <SkillsGrid />
      <Projects />
      <Timeline />
      <Contact />
      <footer className="section py-10 text-sm opacity-80">
        <p>Built with care and curiosity. © {new Date().getFullYear()} Srivishnavi Chebrolu</p>
      </footer>
    </main>
  )
}
