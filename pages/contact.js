import { Layout } from "@/components/Layout"
import { Mail } from "@/components/mail"
import Image from "next/image"

export default function Contact() {
  return (
    <Layout title="Dcm91Portfolio - Contact">

      <div className="flex flex-wrap px-10 mt-10 pb-12 w-full justify-center">

        <div className="border-solid border-2 border-orange-900 grid justify-between py-5 px-5">

          <div className="border-solid border-2 border-orange-900 ">
            <Image className="m-2" src={"/assets/clase esade.jpg"} width={300} height={200} alt="kakaka" />
          </div>

           <div className="border-solid border-2 border-orange-900 ">
            <p>nananananana</p>
          </div>

        </div>
          
          <div className="border-solid border-2 border-orange-900 ">
            <Mail/>
          </div>
          {/* <video className=" flex w-96 pl-5 justify-items-end" ><source src="/assets/WIN_20230524_22_03_38_Pro.mp4" /> </video> */}
          
      </div>
    </Layout>
  )
}