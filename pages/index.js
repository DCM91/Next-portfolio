import { useRouter } from "next/router"
import { Layout } from "../components/Layout"
import en from "@/languages/en"
import es from "@/languages/es"
import cat from "@/languages/cat"
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
import { BiCodeAlt } from "react-icons/bi";
import { GiTechnoHeart } from "react-icons/gi";
import { IoMdConstruct } from "react-icons/io";





export default function Home() {
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
  const themeValues =["Corporate", "Luxury", "Synthwave"]
  useEffect(()=>{themeChange(false)});



  return (
      <div className="grid ">
          <Head>
            <title>Dcm91Portfolio - Home</title>
            <meta name="description" content="Dcm91 profesional Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full m-2 mx-0 mb-0 pt-4 justify-items-center">
            <h1 className="text-4xl stat-title m-3 pl-8 flex">{t.home.title} &nbsp; <MdWavingHand/></h1>
            <p className="text-lg w-full my-2 text-center">
              {t.home.description} &nbsp; 
              <TypeAnimation
              sequence={[
              'Web Development',
              3000,
              'Frontend Development',
              3000,
              'Backend Development',
              3000,
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
              <select  className="select text-primary w-32 h-8 p-1 m-3" data-choose-theme>
                <option disabled selected>Style Selector</option>
                  {themeValues.map((value)=>(
                    <option className="text-primary" key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
                  ))}
              </select>
              <CgColorBucket className='mx-1 text-lg' />
            </div>
            


            </div>

            <Image className="mr-1 " src={"/assets/mefoto.jpg"} width={300} height={300} alt="kakaka" />
            <div>
              <p>Daniel Castro Martin</p>
              <p>castromartindaniel91@gmail.com</p>
            </div>
          </div>


          <div className="flex-2 border-solid border-l-8 border-primary-focus w-1/4 mb-8 ml-4">
            <ul className="grid pt-1 ml-4 text-info w-full h-full font-bold ">
              <li className="text-lg w-full p-2 flex items-center  transition-transform duration-1000 transform hover:translate-x-14 "><Link className="pl-4 w-50" href={"/about"} >{t.navbar.about}</Link></li>
              <li className="text-lg w-full p-2 flex items-center transition-transform duration-1000 transform hover:translate-x-14"><Link className="pl-4 w-50" href={"/skills"}>{t.navbar.SKILLS}</Link></li>
              <li className="text-lg w-full p-2 flex items-center transition-transform duration-1000 transform hover:translate-x-14"><Link className="pl-4 w-50" href={"/works"}>{t.navbar.works}</Link></li>
              <li className="text-lg w-full p-2 flex items-center transition-transform duration-1000 transform hover:translate-x-14"><Link className="pl-4 w-50" href={"/contact"}>{t.navbar.contact}</Link></li>
            </ul>  

        </div>
        </div>
        <div className="gap-10 flex justify-center items-center w-100 h-40 bg-secondary my-4">
          <div className="grid bg-secondary-focus border-2 border-success items-center w-32 h-32">
            <BiCodeAlt className="w-full text-center font-bold text-6xl" />
            <p className="text-center border-t border-success"><b>Code &nbsp; Craftsman</b></p>
          </div>
          <div className="grid bg-secondary-focus border-2 border-success items-center w-32 h-32">
            <GiTechnoHeart className="w-full text-center font-bold text-6xl" />
            <p className="text-center border-t border-success"><b>Bridging Technology</b></p>
          </div>
          <div className="grid bg-secondary-focus border-2 border-success items-center w-32 h-32">
            <IoMdConstruct className="w-full text-center font-bold text-6xl" />
            <p className="text-center border-t border-success"><b>Building the Future</b></p>
          </div>
        </div>
        <div className="pt-5">
          <Footer  />
        </div>
      </div>   
  )
}
