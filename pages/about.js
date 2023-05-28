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
      <div className="h-fit  px-10 pb-4">
        <p className='text-base'>
          {t.about.basetext1}
          </p> 
          <p>
          {t.about.basetext2}
        </p>
      </div>   
    </Layout>
  )
}
