import { BsGithub, BsLinkedin } from "react-icons/bs"
import { HiMail } from "react-icons/hi"
import { useTranslation } from "@/hooks/useTranslation"

export const Footer = () => {
  const t = useTranslation()

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <span className="font-heading text-lg font-bold">
              DCM<span className="text-accent">91</span>
            </span>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-md">
              {t.footer.text1}
            </p>
            <p className="mt-2 text-sm text-text-muted italic">
              {t.footer.text2}
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-medium text-text-muted mb-3">Social</p>
            <div className="flex gap-3 md:justify-end">
              <a
                href="https://www.linkedin.com/in/dcm91"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-hover text-text-secondary hover:text-accent hover:bg-accent-subtle transition-all"
                aria-label="LinkedIn"
              >
                <BsLinkedin size={20} />
              </a>
              <a
                href="https://github.com/DCM91"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-hover text-text-secondary hover:text-accent hover:bg-accent-subtle transition-all"
                aria-label="GitHub"
              >
                <BsGithub size={20} />
              </a>
              <a
                href="mailto:castromartindaniel91@gmail.com"
                className="p-3 rounded-lg bg-surface-hover text-text-secondary hover:text-accent hover:bg-accent-subtle transition-all"
                aria-label="Email"
              >
                <HiMail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Daniel Castro Martín
        </div>
      </div>
    </footer>
  )
}
