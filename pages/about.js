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

        <div className="flex">
          <div className="w-2/3 border-solid border-t-8 border-sucess"> 
           <p className='text-primary-focus text-base p-2'>{t.about.basetext1}</p>
          </div>
          <div className="w-1/3 h-full align-middle">
            <Image className="pt-10" src={"/assets/networking.jpg"} width={500} height={300} alt="kakaka" />
          </div> 
        </div>

        <div className="flex pt-5"> 
          <div className="w-1/3">
            <Image className="pt-10" src={"/assets/clase esade.jpg"} width={500} height={500} alt="kakaka" />
          </div>
          <div className=" w-2/3 border-solid border-t-8 border-sucess">
            <p className="text-primary-focus text-base align-middle text-right p-2 ">{t.about.basetext2}</p>
          </div>
        </div>       

        <div className="pt-4 flex"> 
          <div className="w-2/3 border-solid border-t-8 border-sucess">
            <p className="text-primary-focus text-base align-middle p-2 ">{t.about.basetext3}</p>
          </div>
          <div className="w-1/3 ml-4">
            <Image className="" src={"/assets/devworking.png"} width={250} height={250} alt="kakaka" />  
          </div>
        </div>

      </div>   
    </Layout>
  )
}
