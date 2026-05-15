import Head from "next/head"
import { useEffect, useState } from "react"
import { Navbar } from "./navbar"
import { Footer } from "./Footer"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { Selector } from "./selector"

export const Layout = ({ children }) => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDark = stored ? stored === "dark" : prefersDark
    setDark(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle("dark", next)
      localStorage.setItem("theme", next ? "dark" : "light")
      return next
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>DCM91 Portfolio</title>
        <meta name="description" content="Full Stack Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-xs font-mono text-text-muted tracking-widest uppercase">
            Full Stack Developer
          </p>
          <div className="flex items-center gap-3">
            <Selector />
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-hover transition-colors"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}
