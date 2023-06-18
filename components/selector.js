import { useRouter } from "next/router"
import en from "@/languages/en"
import es from "@/languages/es"
import cat from "@/languages/cat"
import { MdLanguage } from 'react-icons/md'



export const Selector = () => {
    const router = useRouter()
    let t

    switch (router.locale) {
      case 'en':
        t = en
        break
      case 'es':
        t = es
        break
      case 'cat':
        t = cat // Añade la traducción al catalán (cat) en la variable cat correspondiente
        break
      default:
        t = en // Establece un idioma predeterminado en caso de que no se encuentre una traducción específica
        break
    }
    const changeLanguage = (e) => {
      router.push(router.pathname, router.pathname, { locale: e.target.value })

      };
      return (
        <select value={router.locale} onChange={changeLanguage} className="select text-primary w-32 h-8 p-1 m-3">
          <option disabled selected>Languages Selector</option>
          <option className="text-primary" value="en">English</option>
          <option className="text-primary" value="es">Español</option>
          <option className="text-primary" value="cat">Català</option>

        </select>
      )
    }
