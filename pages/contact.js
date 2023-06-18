import { Layout } from "@/components/Layout"
import { Mail } from "@/components/mail"
import en from "@/languages/en"
import es from "@/languages/es"
import cat from "@/languages/cat"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Contact() {
  const router = useRouter()
  let t

  switch (router.locale) {
    case 'en':
      t = en
      break
    case 'es':
      t = es
      break
    case 'cat':
      t = cat // Añade la traducción al catalán (cat) en la variable cat correspondiente
      break
    default:
      t = en // Establece un idioma predeterminado en caso de que no se encuentre una traducción específica
      break
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