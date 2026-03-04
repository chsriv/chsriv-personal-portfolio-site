export default function About() {
  return (
    <section id="about" className="section py-12 md:py-16">
      <h2 className="h-heading text-3xl md:text-4xl">About</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4">
          <p className="text-xl leading-relaxed font-medium">
            I’m a pre-final year student at GITAM with a heart for **software design** and a minor in **AI from IIT Ropar**. 
          </p>
          <p className="leading-relaxed text-[var(--color-muted-foreground)]">
            To me, engineering is as much about the person using the app as it is about the 
            logic running it. I spend my time bridging the gap between high-level 
            interface design and the low-level systems that make everything feel instant. 
            Whether I’m optimizing context windows for Llama 3.3 at **BoardMax** or 
            hardening security protocols with the **HackOps** team, my goal is always 
            the same: shipping software that feels intentional, secure, and helpful.
          </p>
          <p className="leading-relaxed text-[var(--color-muted-foreground)]">
            When I’m not in a code editor, you’ll probably find me contributing to 
            **GitHub's EPOCH** or exploring the latest in onchain DeFi with **SheFi**. 
            I love the challenge of taking a complex problem and turning it into something 
            clear and approachable!
          </p>
          <p className="pt-2 font-semibold text-[var(--color-primary)]">
            Thanks so much for stopping by my corner of the internet.
          </p>
        </div>

        <aside className="panel p-6 bg-[var(--color-secondary)] rounded-3xl border-2 border-[var(--color-border)] shadow-sm">
          <h4 className="font-bold mb-4 text-[var(--color-secondary-foreground)]">The Essentials</h4>
          <ul className="space-y-3 text-sm text-[var(--color-secondary-foreground)]">
            <li className="flex items-center gap-3">
              <span className="opacity-70">🎓</span> 
              <span>CSE @ GITAM (9.25 CGPA)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="opacity-70">🧠</span> 
              <span>AI Minor @ IIT Ropar</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="opacity-70">☁️</span> 
              <span>Cloud Architecture & RAG</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="opacity-70">🛡️</span> 
              <span>TryHackMe Top 7% Globally</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
