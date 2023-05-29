import { useRouter } from "next/router"
import { Layout } from "../components/Layout"
import en from "@/languages/en"
import es from "@/languages/es"
import { MdWavingHand } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

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
      <div className="grid w-9/12">

        <div className="h-10 w-100  p-4">
            <h1 className="text-2xl flex">{t.home.title} &nbsp; <MdWavingHand/></h1>
        </div>
        <div className="flex flex-wrap mt-5"> 
          <div className="border-yellow-50 border-4 flex-1  p-3">
            <Image src={"/assets/devIAPortfolio.jpg"} width={250} height={250} alt="kakaka" />
          </div>


          <div className="flex-2">
            <ul className="grid text-error">
              <li className="p-2"><Link href={"/about"}>{t.navbar.about}</Link></li>
              <li className="p-2"><Link href={"/skills"}>{t.navbar.SKILLS}</Link></li>
              <li className="p-2"><Link href={"/works"}>{t.navbar.works}</Link></li>
              <li className="p-2"><Link href={"/contact"}>{t.navbar.contact}</Link></li>
            </ul>  
        </div>
        </div>
      </div>   
      </Layout>
  )
}
