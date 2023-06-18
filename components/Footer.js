import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import en from "@/languages/en"
import es from "@/languages/es"
import cat from "@/languages/cat"
import { useRouter } from 'next/router';


export const Footer = ({theme}) => {
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
    <div data-theme={theme}>
        <footer  className="footer w-100 p-4 bg-neutral text-neutral-content" >
            <div style={{fontSize:"large"}}>
                <p><br/>{t.footer.text1}<br/> <br/>{t.footer.text2}</p>
            </div> 
            <div>
                <span className="footer-title" style={{fontSize:"large"}}>Social &nbsp; /DCM91</span> 
                <div className="grid grid-flow-col gap-4">
                <a href='https://www.linkedin.com/in/dcm91'><svg style={{width:"4rem", height:"4rem"}}  viewBox="0 0 24 24" className="fill-current"><BsLinkedin /></svg></a>
                <a href='https://github.com/DCM91'><svg style={{width:"4rem", height:"4rem"}}  viewBox="0 0 24 24" className="fill-current"><BsGithub /></svg></a>
                </div>
            </div>
        </footer>
    </div>
  )
}
