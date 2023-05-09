import en from "@/languages/en"
import es from "@/languages/es"
import Link from "next/link";
import { useRouter } from 'next/router';

export const Navbar = ({theme}) => {
  const router = useRouter()
  let t
  if (router.locale === 'en') {
    t = en
  } else if (router.locale === 'es') {
    t = es
  } 

  return (
      <div data-theme={theme} className="navbar flex flex-wrap w-full bg-base-100">
        <div className="flex-1 ">
          <Link href={"/"} className="btn btn-ghost normal-case text-3xl">Daniel Castro Martín</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-error">
            <li><Link href={"/about"}>{t.navbar.about}</Link></li>
            <li><Link href={"/skills"}>{t.navbar.SKILLS}</Link></li>
            <li><Link href={"/works"}>{t.navbar.works}</Link></li>
            <li><Link href={"/contact"}>{t.navbar.contact}</Link></li>
          </ul>
      </div>
    </div>

  )
}
