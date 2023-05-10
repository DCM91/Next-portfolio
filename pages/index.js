import { useRouter } from "next/router"
import { Layout } from "../components/Layout"
import en from "@/languages/en"
import es from "@/languages/es"
import { MdWavingHand } from "react-icons/md";

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
        <div className="h-80 w-100 flex px-3">
            <h1 className="text-2xl flex">{t.home.title} &nbsp; <MdWavingHand/></h1>
            
        </div>   
      </Layout>
  )
}
