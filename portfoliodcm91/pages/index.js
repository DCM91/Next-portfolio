import { useRouter } from "next/router"
import { Layout } from "../components/Layout"
import { useState } from "react"
import en from "@/languages/en"
import es from "@/languages/es"
import fr from "@/languages/fr"


export default function Home() {
  const router = useRouter()
  let t
  if (router.locale === 'en') {
    t = en
  } else if (router.locale === 'es') {
    t = es
  } else if (router.locale === 'fr') {
    t = fr
  }
  const [theme, setTheme] = useState("luxury")
  const handleTheme = () =>{
    setTheme(theme === "luxury" ? "cupcake" : "luxury")
  }
  const typetheme=["luxury", "cupcake"]


  return (
     <Layout theme={theme} title="Dcm91Portfolio - Home">
        <div className="grid" data-theme={theme}>
            <h1 className="flex justify-center items-center text-xl h-80">{t.home.title}</h1>
            <button className="btn btn-primary mb-2 mx-3" onClick={handleTheme} >ClickME</button>
        </div>   
      </Layout>
  )
}
