import { useRouter } from "next/router"
import { Layout } from "../components/Layout"
import en from "@/languages/en"
import es from "@/languages/es"
import { MdWavingHand } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import { Selector } from "@/components/selector";

export default function Home() {
  const router = useRouter()
  let t
  if (router.locale === 'en') {
    t = en
  } else if (router.locale === 'es') {
    t = es
  }


  return (
      <div className="grid w-screen h-screen bg-black" data-theme={"luxury"} >
          <Head>
            <title>Dcm91Portfolio - Home</title>
            <meta name="description" content="Dcm91 profesional Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-100  p-4">
            <h1 className="text-2xl flex">{t.home.title} &nbsp; <MdWavingHand/></h1>
        </div>
        <Selector />
        <div className="flex flex-wrap"> 
          <div className="border-yellow-50 border-4 flex-1 w-2/3  p-3 m-3">
            <Image src={"/assets/devIAPortfolio.jpg"} width={250} height={250} alt="kakaka" />
          </div>


          <div className="flex-2 w-1/3">
            <ul className="grid text-error pt-6">
              <li className="p-2 lg transition-transform duration-200 transform hover:translate-x-6 "><Link href={"/about"} >{t.navbar.about}</Link></li>
              <li className="p-2 lg transition-transform duration-200 transform hover:translate-x-6"><Link href={"/skills"}>{t.navbar.SKILLS}</Link></li>
              <li className="p-2 lg transition-transform duration-200 transform hover:translate-x-6"><Link href={"/works"}>{t.navbar.works}</Link></li>
              <li className="p-2 lg transition-transform duration-200 transform hover:translate-x-6"><Link href={"/contact"}>{t.navbar.contact}</Link></li>
            </ul>  

        </div>
        </div>
        <Footer />
      </div>   
  )
}
