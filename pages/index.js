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
import {themeChange} from "theme-change"
import { useEffect } from "react";
import { CgColorBucket } from "react-icons/cg";
import { MdLanguage } from 'react-icons/md'



export default function Home() {
  const router = useRouter()
  let t
  if (router.locale === 'en') {
    t = en
  } else if (router.locale === 'es') {
    t = es
  }
  const themeValues =["Bumblebee", "Luxury", "Aqua"]
  useEffect(()=>{themeChange(false)});



  return (
      <div className="grid h-screen">
          <Head>
            <title>Dcm91Portfolio - Home</title>
            <meta name="description" content="Dcm91 profesional Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-100  p-4">
            <h1 className="text-2xl flex">{t.home.title} &nbsp; <MdWavingHand/></h1>
        </div>
        <div className="flex flex-wrap w-2/3"> 
          <div className=" flex-1 grid   p-3 m-3">
            <div className="m-1">
            <div className="inline-flex  items-center">
              <Selector />
              <MdLanguage />
            </div>
            <div className="inline-flex  items-center">             
              <select  className="text-primary h-8 p-1 m-3 bg-transparent" data-choose-theme>
                <option disabled selected>Style Selector</option>
                  {themeValues.map((value)=>(
                    <option className="text-primary" key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
                  ))}
              </select>
              <CgColorBucket className='mx-1 text-lg' />
            </div>
            


            </div>

          <Image className="mr-1" src={"/assets/devworking.png"} width={250} height={250} alt="kakaka" />
          {/* <Image src={"/assets/devIAPortfolio.jpg"} width={250} height={250} alt="kakaka" /> */}
          </div>


          <div className="flex-2 w-1/3 border-solid border-l-4 border-sucess mb-8">
            <ul className="grid pt-6 text-success">
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
