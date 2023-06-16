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
      <div className="grid px-10 py-10">

        <div className="flex items-center h-full">
          <div className="w-2/3 border-solid border-t-8 border-sucess"> 
           <p className='text-primary-focus text-base text-left p-4'><b>{t.about.basetext1}</b></p>
          </div>
          <div className="w-1/3 h-full align-middle">
            <Image className="pt-10" src={"/assets/networking.jpg"} width={500} height={300} alt="kakaka" />
          </div> 
        </div>

        <div className="flex items-center h-full pt-5"> 
          <div className="w-1/3">
            <Image className="pt-10" src={"/assets/clase esade.jpg"} width={500} height={500} alt="kakaka" />
          </div>
          <div className=" w-2/3 border-solid border-t-8 border-sucess">
            <p className="text-primary-focus text-base text-middle text-right p-4 "><b>{t.about.basetext2}</b></p>
          </div>
        </div>       

        <div className="pt-4 flex items-center h-full"> 
          <div className="w-2/3 border-solid border-t-8 border-sucess">
            <p className="text-primary-focus text-base text-left p-4"><b>{t.about.basetext3}</b></p>
          </div>
          <div className="w-1/3 ml-4">
            <Image className="" src={"/assets/devworking.png"} width={250} height={250} alt="kakaka" />  
          </div>
        </div>

      </div>   
    </Layout>
  )
}
