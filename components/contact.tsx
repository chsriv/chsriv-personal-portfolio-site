export default function Contact() {
  return (
    <section id="contact" className="section py-12 md:py-16">
      <h2 className="h-heading text-3xl md:text-4xl">Contact</h2>
      <p className="mt-3 leading-relaxed">Want to build something together or just say hi?</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="mailto:chsrivishnavi2@gmail.com"
          className="card-wiggle inline-flex items-center rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] px-4 py-2"
        >
          Email me
        </a>
        <a
          href="https://github.com/chsriv"
          target="_blank"
          rel="noreferrer"
          className="card-wiggle inline-flex items-center rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-muted)] text-[var(--color-muted-foreground)] px-4 py-2"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/srivishnavi-chebrolu"
          target="_blank"
          rel="noreferrer"
          className="card-wiggle inline-flex items-center rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] px-4 py-2"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
