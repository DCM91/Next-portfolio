import { Layout } from "@/components/Layout"
import { Mail } from "@/components/mail"

export default function Contact() {
  return (
    <Layout title="Dcm91Portfolio - Contact">
      <div className="grid h-80 px-10 pb-4">
        <div className="border-solid border-2 border-orange-900 flex justify-center">
          {/* <video className=" flex w-96 pl-5 justify-items-end" ><source src="/assets/WIN_20230524_22_03_38_Pro.mp4" /> </video> */}
          <Mail/>
        </div>
      </div>
    </Layout>
  )
}