import { useRouter } from "next/router"
import { LANGUAGES } from "@/constants"
import { MdLanguage } from "react-icons/md"

export const Selector = () => {
  const router = useRouter()

  const changeLanguage = (e) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value })
  }

  return (
    <div className="flex items-center gap-1.5">
      <MdLanguage size={14} className="text-text-muted" />
      <select
        value={router.locale}
        onChange={changeLanguage}
        className="bg-transparent text-xs text-text-secondary font-medium border-0 cursor-pointer focus:outline-none"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  )
}
