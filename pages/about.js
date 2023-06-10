import { Layout } from "@/components/Layout"
import { useRouter } from "next/router"
import en from "@/languages/en"
import es from "@/languages/es"


export default function About() {
  const router = useRouter()
  let t
  if (router.locale === 'en') {
    t = en
  } else if (router.locale === 'es') {
    t = es
  }
  return (
    <Layout title="Dcm91Portfolio - About">
      <div className="grid h-fit  px-10 py-10">
        <div className="flex flex-wrap">
         <p className='text-primary-focus text-base '>{t.about.basetext1}</p> 
        </div>
        <div className="pt-4 "> 
          <p className="text-primary-focus text-base ">{t.about.basetext2}</p>
        </div>        
        <div className="pt-4 "> 
          <p className="text-primary-focus text-base ">{t.about.basetext3}</p>
        </div>
      </div>   
    </Layout>
  )
}
