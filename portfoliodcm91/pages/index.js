import { useRouter } from "next/router"
import { Layout } from "../components/Layout"
import en from "@/languages/en"
import es from "@/languages/es"


export default function Home() {
  const router = useRouter()
  let t
  if (router.locale === 'en') {
    t = en
  } else if (router.locale === 'es') {
    t = es
  }


  return (
     <Layout title="Dcm91Portfolio - Home">
        <div>
            <h1 className="flex justify-center items-center text-xl h-80">{t.home.title}</h1>
        </div>   
      </Layout>
  )
}
