import { Layout } from "@/components/Layout"
import { useRouter } from "next/router"
import en from "@/languages/en"
import es from "@/languages/es"
import Image from "next/image"


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
        <div className="flex h-fit">
         <p className='text-primary-focus text-base w-2/3 align-middle p-2'>{t.about.basetext1}</p> 
         <Image className="mr-1 w-1/3" src={"/assets/networking.jpg"} width={250} height={250} alt="kakaka" />
        </div>
        <div className="pt-4 flex h-fit "> 
          <Image className="mr-1 w-1/3" src={"/assets/clase esade.jpg"} width={250} height={250} alt="kakaka" />
          <div className="w-2/3 h-100 flex align-middle justify-center">
            <p className="text-primary-focus text-base h-full align-middle text-right p-2 ">{t.about.basetext2}</p>
          </div>
        </div>        
        <div className="pt-4 flex h-fit "> 
          <div className="w-2/3 h-100 flex align-middle justify-center">
            <p className="text-primary-focus text-base align-middle p-2 ">{t.about.basetext3}</p>
          </div>
        <Image className="mr-1 w-1/3" src={"/assets/devworking.png"} width={225} height={225} alt="kakaka" />  
        </div>
      </div>   
    </Layout>
  )
}
