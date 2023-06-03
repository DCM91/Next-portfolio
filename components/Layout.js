import Head from 'next/head'
import { Footer } from './Footer'
import { Navbar } from './navbar'
import { Selector } from './selector'
import { useEffect, useState } from "react"
import { CgColorBucket } from "react-icons/cg";
import {themeChange} from "theme-change"
import { MdLanguage } from 'react-icons/md'




export const Layout = ({ title = "Dcm91Portfolio" , children}) => {
  const themeValues =["Bumblebee", "Luxury", "Aqua"]
  useEffect(()=>{themeChange(false)});


  return (
    <div className='h-full w-full grid'>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Dcm91 profesional Portfolio" />
            
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className='w-full '>
          <div>
            <Navbar />
            <div className=' w-100 flex justify-between'>
              <div className='flex-1'> 
                  <p className='text-xl text-error pl-4'>WEB DEVELOPER</p>
              </div>
              <div className='flex-2 inline-flex  items-center  justify-end pr-4'>
                <div className='inline-flex  items-center'>
                  <select className="select text-primary p-1 bg-transparent" data-choose-theme>
                    <option disabled selected>Style Selector</option>
                    {themeValues.map((value)=>(
                      <option className="text-primary" key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
                    ))}
                  </select>
                  <CgColorBucket className='mx-1 text-lg' />
                </div>
                <div className='inline-flex  items-center'>  
                 <Selector className="mx-1" />
                  <MdLanguage className='mx-1 text-lg' />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className=''>{children}</main>

        <footer className=''><Footer  /></footer>
    </div>
  )
}
