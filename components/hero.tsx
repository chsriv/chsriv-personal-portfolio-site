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
          {/* Enhanced contrast/color on your name */}
          <span className="hand-underline inline-block text-[var(--color-primary)]">Sri C</span>
          {"."}
        </h1>
      </Reveal>

      <Reveal className="a-fade-in a-slide-up" once>
        {/* Stronger, more specialized title */}
        <p className="mt-4 text-xl font-semibold leading-relaxed text-[var(--color-foreground)]">
          Software Engineering Intern — <span className="text-[var(--color-accent)]">Full‑stack & AI Systems</span>
        </p>
      </Reveal>

      <Reveal className="a-fade-in a-slide-up" once>
        {/* High-impact description featuring your GPA and modern stack */}
        <p className="mt-2 leading-relaxed text-[var(--color-muted-foreground)] max-w-2xl mx-auto md:mx-0">
          Maintaining a <span className="font-bold text-[var(--color-foreground)]">9.25/10 CGPA</span> while architecting 
          scalable solutions with Python, React, and LLM integrations. I ship thoughtfully, prioritizing human-centric 
          UIs for real-world impact.
        </p>
      </Reveal>

      <Reveal className="a-fade-in a-slide-up" once>
        {/* Tighter, more authoritative buttons with increased padding and font weight */}
        <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="card-wiggle inline-flex items-center rounded-xl border-2 border-[var(--color-border)]
                       bg-[var(--color-foreground)] text-[var(--color-background)] px-6 py-3 font-bold transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="card-wiggle inline-flex items-center rounded-xl border-2 border-[var(--color-border)]
                       bg-transparent text-[var(--color-foreground)] px-6 py-3 font-semibold hover:bg-[var(--color-muted)] transition-all"
          >
            Let's Talk
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
          {/* Main container for the PFP and the Badge */}
          <div className="relative">
            {/* The existing PFP container */}
            <div
              className="relative h-40 w-40 md:h-56 md:w-56 rounded-full overflow-hidden
                         border-4 border-[var(--color-border)]
                         outline outline-2 outline-offset-4 outline-[var(--color-secondary)]
                         shadow-lg"
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

            {/* THE NEW BADGE: Positions at top-right of the image */}
            <Reveal
              className="absolute -top-3 -right-3 sm:-right-6 md:-top-4 md:-right-8 z-10 a-fade-in a-slide-up delay-300"
              once
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border-2 
                           border-[var(--color-border)] bg-[var(--color-card)] 
                           px-3 py-1.5 md:px-4 md:py-2 shadow-xl"
              >
                {/* Pulsing "Active" green dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                
                {/* Badge Text */}
                <span className="text-xs md:text-sm font-bold tracking-tight text-[var(--color-foreground)] whitespace-nowrap">
                  Open for Internships
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <DynamicHeroCopy />
        </div>
      </div>
    </header>
  )
}
