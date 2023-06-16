import { Layout } from "@/components/Layout"
import { Mail } from "@/components/mail"
import en from "@/languages/en"
import es from "@/languages/es"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Contact() {
  const router = useRouter()
  let t
  if (router.locale === 'en') {
    t = en
  } else if (router.locale === 'es') {
    t = es
  }
  return (
    <Layout title="Dcm91Portfolio - Contact">

      <div className="flex flex-wrap px-10 mt-8 mb-8 w-full justify-center">

        <div className=" grid justify-between pl-14 border-l-4  py-2 rounded-sm">

         <div className=" ">
            <p className="text-info py-1 text-xl"><b>{t.contact.contact1}</b></p>
            <p className="text-primary text-base px-1"><b>{t.contact.contact2}</b></p>
            <p className="text-primary text-base px-1"><b>{t.contact.contact3}</b></p>
          </div>

          <div className=" w-80 ">
            <Image className="card shadow-xl opacity-90 m-2" src={"/assets/contactame.jpg"} width={300} height={200} alt="kakaka" />
          </div>

       </div>
          
          <div className=" w-100">
            <Mail/>
          </div>
          
      </div>
    </Layout>
  )
}