import type React from "react"
import type { Metadata } from "next"
import { Caveat, Karla, Homemade_Apple } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Srivishnavi Chebrolu — Portfolio",
  description:
    "Personal portfolio of Srivishnavi Chebrolu — Pre-final year CSE at GITAM, Minor in AI at IIT Ropar. Into ML, cybersecurity, and full‑stack.",
  generator: "v0.app",
}

const heading = Caveat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
})
const homemade = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-homemade",
})
const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${karla.variable} ${heading.variable} ${homemade.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
