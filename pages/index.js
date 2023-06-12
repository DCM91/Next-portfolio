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
import { TypeAnimation } from "react-type-animation";




export default function Home() {
  const router = useRouter()
  let t
  if (router.locale === 'en') {
    t = en
  } else if (router.locale === 'es') {
    t = es
  }
  const themeValues =["Bumblebee", "Luxury", "Synthwave"]
  useEffect(()=>{themeChange(false)});



  return (
      <div className="grid">
          <Head>
            <title>Dcm91Portfolio - Home</title>
            <meta name="description" content="Dcm91 profesional Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-100 m-2 mb-0 pt-4 justify-items-center">
            <h1 className="text-4xl stat-title m-5 pl-8 flex">{t.home.title} &nbsp; <MdWavingHand/></h1>
            <p className="text-lg w-full my-2 text-center">
              Ambitious junior professional in &nbsp; 
              <TypeAnimation
              sequence={[
              'Web Development',
              2000,
              'Frontend Development',
              2000,
              'Backend Development',
              2000,
              ]}
              speed={30} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: '1em', color: '#ff760d'  }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />.
            </p>
        </div>
        <div className="flex flex-wrap w-3/4"> 
          <div className=" flex-1 grid h-80  px-3 m-3">
            <div className="m-1">
            <div className="inline-flex  items-center mb-3">
              <Selector />
              <MdLanguage />
            </div>
            <div className="inline-flex  items-center">             
              <select  className="select text-accent w-32 h-8 p-1 m-3 bg-transparent" data-choose-theme>
                <option disabled selected>Style Selector</option>
                  {themeValues.map((value)=>(
                    <option className="text-accent" key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
                  ))}
              </select>
              <CgColorBucket className='mx-1 text-lg' />
            </div>
            


            </div>

          <Image className="mr-1 " src={"/assets/mefoto.jpg"} width={300} height={300} alt="kakaka" />
          {/* <Image src={"/assets/devIAPortfolio.jpg"} width={250} height={250} alt="kakaka" /> */}
          </div>


          <div className="flex-2 border-solid border-l-8 border-sucess w-1/4 mb-8 ml-4">
            <ul className="grid pt-1 ml-4 text-info w-full h-full ">
              <li className="text-lg w-full p-2 flex items-center  transition-transform duration-350 transform hover:translate-x-14 "><Link className="pl-4 w-50" href={"/about"} >{t.navbar.about}</Link></li>
              <li className="text-lg w-full p-2 flex items-center transition-transform duration-350 transform hover:translate-x-14"><Link className="pl-4 w-50" href={"/skills"}>{t.navbar.SKILLS}</Link></li>
              <li className="text-lg w-full p-2 flex items-center transition-transform duration-350 transform hover:translate-x-14"><Link className="pl-4 w-50" href={"/works"}>{t.navbar.works}</Link></li>
              <li className="text-lg w-full p-2 flex items-center transition-transform duration-350 transform hover:translate-x-14"><Link className="pl-4 w-50" href={"/contact"}>{t.navbar.contact}</Link></li>
            </ul>  

        </div>
        </div>
        <div className="fixed bottom-0">
          <Footer  />
        </div>
      </div>   
  )
}
