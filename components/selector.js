import { useRouter } from "next/router"
import en from "@/languages/en"
import es from "@/languages/es"
import { MdLanguage } from 'react-icons/md'



export const Selector = () => {
    const router = useRouter()
    let t
    if (router.locale === 'en') {
      t = en
    } else if (router.locale === 'es') {
      t = es
    }     
    const changeLanguage = (e) => {
      router.push(router.pathname, router.pathname, { locale: e.target.value })

      };
      return (
        <select value={router.locale} onChange={changeLanguage} className="select text-secondary p-1 bg-transparent">
          <option disabled selected>Languages Selector</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      )
    }
