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
        <select value={router.locale} onChange={changeLanguage} className="select text-primary w-32 h-8 p-1 m-3">
          <option disabled selected>Languages Selector</option>
          <option className="text-primary" value="en">English</option>
          <option className="text-primary" value="es">Español</option>
        </select>
      )
    }
