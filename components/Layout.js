import Head from "next/head"
import { useEffect, useState } from "react"
import { Navbar } from "./navbar"
import { Footer } from "./Footer"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { Selector } from "./selector"
import { useTranslation } from "@/hooks/useTranslation"

export const Layout = ({ children, className = "" }) => {
  const [dark, setDark] = useState(false)
  const t = useTranslation()

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
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Head>
        <title>DCM91 Portfolio</title>
        <meta name="description" content="Full Stack Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-white focus:outline-none focus:shadow-lg"
      >
        Skip to content
      </a>

      <Navbar />

      <div className="sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <p className="text-xs font-mono text-text-muted tracking-widest uppercase">
            {t.home.subtitle}
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

      <main id="main-content" className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}
