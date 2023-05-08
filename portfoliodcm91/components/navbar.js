import en from "@/languages/en"
import es from "@/languages/es"
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
          <a className="btn btn-ghost normal-case text-3xl">Daniel Castro Martín</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-error">
            <li><a>Home</a></li>
            <li tabIndex={0}>
              <a>
                Info
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>{t.navbar.about}</a></li>
                <li><a>{t.navbar.SKILLS}</a></li>
                <li><a>{t.navbar.works}</a></li>
              </ul>
            </li>
            <li><a>{t.navbar.contact}</a></li>
          </ul>
      </div>
    </div>

  )
}
