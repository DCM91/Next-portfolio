import Head from 'next/head'
import { Footer } from './Footer'
import { Navbar } from './navbar'
import { Selector } from './selector'
import { useState } from "react"
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";




export const Layout = ({ title = "Dcm91Portfolio" , children}) => {
  const [theme, setTheme] = useState("luxury")
  const handleTheme = () =>{
    setTheme(theme === "luxury" ? "cupcake" : "luxury")
  }
  const typetheme=["luxury", "cupcake"]


  return (
    <div data-theme={theme} className='h-screen w-full grid'>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Dcm91 profesional Portfolio" />
            
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className='w-full '>
          <div>
            <Navbar theme={theme}/>
            <div className=' w-100 flex justify-between'>
              <div className='flex-1'> 
                  <p className='text-xl text-error pl-4'>WEB DEVELOPER</p>
              </div>
              <div className='flex-2 inline-flex  items-center  justify-end pr-4'>
                <BsFillSunFill className='mx-1 text-lg'/>
                <input type="checkbox" className="toggle toggle-md" id="luxury" checked={theme === "luxury"} onChange={handleTheme} />
                <BsFillMoonStarsFill className='mx-1' />
                <Selector />
              </div>

            </div>
          </div>
        </header>

        <main className=' mt-5'>{children}</main>

        <footer className=''><Footer theme={theme} /></footer>
    </div>
  )
}
