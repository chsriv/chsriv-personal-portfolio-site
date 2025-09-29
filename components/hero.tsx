"use client"

import { cn } from "@/lib/utils"
import Reveal from "./reveal"
import Image from "next/image"

function DynamicHeroCopy() {
  return (
    <>
      <Reveal className="a-fade-in a-slide-left" once>
        <h1 className="h-heading font-signature text-4xl md:text-5xl leading-tight">
          {"Hi, I'm "}
          <span className="hand-underline inline-block">Srivishnavi Chebrolu</span>
          {"!"}
        </h1>
      </Reveal>

      <Reveal className="a-fade-in a-slide-up" once>
        <p className="mt-4 text-lg leading-relaxed">
          Computer Science undergraduate — Full‑stack & AI‑driven solutions · CGPA 9.23/10
        </p>
      </Reveal>

      <Reveal className="a-fade-in a-slide-up" once>
        <p className="mt-2 leading-relaxed">
          Hands‑on with Python, React, Node.js, and ML. I build warm, human UIs and ship thoughtfully for real users.
        </p>
      </Reveal>

      <Reveal className="a-fade-in a-slide-up" once>
        <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
          <a
            href="#projects"
            className="card-wiggle inline-flex items-center rounded-xl border-2 border-[var(--color-border)]
                       bg-[var(--color-accent)] text-[var(--color-accent-foreground)] px-4 py-2"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="card-wiggle inline-flex items-center rounded-xl border-2 border-[var(--color-border)]
                       bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] px-4 py-2"
          >
            Contact Me
          </a>
        </div>
      </Reveal>
    </>
  )
}

export default function Hero() {
  return (
    <header className={cn("section pt-16 md:pt-24 pb-10")}>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="shrink-0">
          <div
            className="relative h-40 w-40 md:h-56 md:w-56 rounded-full overflow-hidden
                       border-4 border-[var(--color-border)]
                       outline outline-2 outline-offset-4 outline-[var(--color-secondary)]
                       shadow-sm"
          >
            <Image
              src="/github-pfp-moana-shell.jpg"
              alt="Portrait of Srivishnavi Chebrolu"
              fill
              sizes="(min-width: 768px) 224px, 160px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <DynamicHeroCopy />
        </div>
      </div>
    </header>
  )
}
