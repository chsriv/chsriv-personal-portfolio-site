"use client"

import React from "react"
import type { JSX } from "react/jsx-runtime"

type Props = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
  once?: boolean
  threshold?: number
}

export default function Reveal({ as: Tag = "div", className = "", children, once = true, threshold = 0.15 }: Props) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [inView, setInView] = React.useState(false)

  React.useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold])

  return (
    <Tag
      ref={ref as any}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      data-reveal={inView ? "in" : "out"}
    >
      {children}
    </Tag>
  )
}
