export default function About() {
  return (
    <section id="about" className="section py-12 md:py-16">
      <h2 className="h-heading text-3xl md:text-4xl">About</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <p className="leading-relaxed">
            Computer Science undergraduate with hands-on experience in full‑stack development and AI‑driven solutions.
            Proficient in Python, data structures, and modern frameworks. Skilled at collaborating in cross‑functional
            teams and delivering user‑centric applications through academic projects and hackathons. Eager to create
            impactful products in dynamic technology environments.
          </p>
          <p className="leading-relaxed mt-3">
            I love crafting warm, approachable interfaces and shipping quickly with attention to detail. Recently, I’ve
            explored ML‑assisted learning tools, reflective journaling apps, and inventory dashboards—always aiming for
            clarity, accessibility, and a friendly user experience.
          </p>
        </div>
        <aside className="panel p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Pre‑final year CSE @ GITAM (CGPA 9.25/10)</li>
            <li>Minor in AI @ IIT Ropar</li>
            <li>Full‑stack, AI/ML, Cybersecurity</li>
            <li>Hackathons & community building</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
