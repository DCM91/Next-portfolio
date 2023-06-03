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
         <p className='text-success text-base '>{t.about.basetext1}</p> 
         <video className=" flex w-96 pl-5 justify-items-end" ><source src="/assets/WIN_20230524_22_03_38_Pro.mp4" /> </video>
        </div>
        <div className="pt-4 "> 
          <p className="text-success text-base ">{t.about.basetext2}</p>
        </div>
      </div>   
    </Layout>
  )
}
