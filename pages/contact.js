import { Layout } from "@/components/Layout"
import { Mail } from "@/components/mail"
import Image from "next/image"

export default function Contact() {
  return (
    <Layout title="Dcm91Portfolio - Contact">

      <div className="flex flex-wrap px-10 mt-8 mb-8 w-full justify-center">

        <div className=" grid justify-between py-5 px-10 pl-20 border-l-4">

         <div className=" ">
            <p className="text-info"><b>amigo dele!</b></p>
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