export default function About() {
  return (
    <section id="about" className="section py-12 md:py-16">
      <div className="max-w-4xl">
        <h2 className="h-heading text-3xl md:text-4xl mb-6">About Me!</h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-5 text-[var(--color-muted-foreground)]">
            <p className="text-xl leading-relaxed font-medium text-[var(--color-foreground)]">
              I am a pre-final year student at GITAM with a heart for software engineering 
              and a Minor in AI from IIT Ropar.
            </p>
            
            <p className="leading-relaxed">
              To me, engineering is as much about the person using the app as it is about the 
              logic running it. I spend my time bridging the gap between high-level 
              interface design and the production-grade systems that make everything feel instant. 
              Whether I am optimizing distributed RAG architectures at BoardMax or 
              hardening security protocols with the HackOps team, my goal is always 
              the same: shipping software that feels intentional, secure, and helpful.
            </p>

            <p className="leading-relaxed">
              I love the energy of hackathons and collaborative building. It is where 
              I find my rhythm—translating complex requirements into scalable backend logic and performant RESTful microservices. I thrive in cross-functional teams 
              where technical rigor meets the challenge of taking full ownership of the 
              end-to-end SDLC.
            </p>

            <p className="leading-relaxed">
              When I am away from the terminal, I am usually diving into new cultures. 
              As a linguaphile learning Korean, Japanese, and Tamil, I have found that 
              whether it is a programming language or a spoken one, it is all about 
              finding new ways to connect with others.
            </p>
            
            <p className="pt-4 font-semibold text-[var(--color-primary)] opacity-90">
              Thanks so much for stopping by my corner of the internet!
            </p>
          </div>

          <aside className="p-6 bg-[var(--color-secondary)] rounded-2xl border-2 border-[var(--color-border)] shadow-sm">
            <h4 className="font-bold mb-4 text-[var(--color-secondary-foreground)] uppercase tracking-wider text-xs">
              The Essentials
            </h4>
            <ul className="space-y-4 text-sm font-medium text-[var(--color-secondary-foreground)]">
              <li>
                <span className="block opacity-60 text-[10px] uppercase mb-1">Foundations</span>
                CSE @ GITAM (9.25 CGPA)
              </li>
              <li>
                <span className="block opacity-60 text-[10px] uppercase mb-1">Intelligence</span>
                AI Minor @ IIT Ropar
              </li>
              <li>
                <span className="block opacity-60 text-[10px] uppercase mb-1">Infrastructure</span>
                Distributed Systems & RAG
              </li>
              <li>
                <span className="block opacity-60 text-[10px] uppercase mb-1">Security</span>
                TryHackMe Top 7% Globally
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
