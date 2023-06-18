import en from "@/languages/en"
import es from "@/languages/es"
import cat from "@/languages/cat"
import Link from "next/link";
import { useRouter } from 'next/router';

export const Navbar = ({theme}) => {
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

  return (
      <div data-theme={theme} className="navbar flex flex-wrap w-full bg-base-100">
        <div className="flex-1 ">
          <Link href={"/"} className="btn btn-ghost normal-case text-3xl">Daniel Castro Martín</Link>
        </div>
        <div className="flex-2">
          <ul className="inline-flex text-success">
            <li className="p-2"><Link href={"/about"}>{t.navbar.about}</Link></li>
            <li className="p-2"><Link href={"/skills"}>{t.navbar.SKILLS}</Link></li>
            <li className="p-2"><Link href={"/works"}>{t.navbar.works}</Link></li>
            <li className="p-2"><Link href={"/contact"}>{t.navbar.contact}</Link></li>
          </ul>
      </div>
    </div>

  )
}
