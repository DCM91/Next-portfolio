import { useRouter } from "next/router"
import en from "@/languages/en"
import es from "@/languages/es"
import cat from "@/languages/cat"

const translations = { en, es, cat }

export function useTranslation() {
  const router = useRouter()
  const locale = router?.locale || "en"
  return translations[locale] || en
}
