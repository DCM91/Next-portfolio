import Link from "next/link"
import { useRouter } from "next/router"
import { NAV_LINKS } from "@/constants"
import { useTranslation } from "@/hooks/useTranslation"

export const Navbar = () => {
  const { pathname } = useRouter()
  const t = useTranslation()

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight hover:text-accent transition-colors"
        >
          DCM<span className="text-accent">91</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-accent bg-accent-subtle"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                }`}
              >
                {t.navbar[link.labelKey.split(".")[1]]}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
