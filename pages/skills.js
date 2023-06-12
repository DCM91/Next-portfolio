import { Layout } from "@/components/Layout"
import { DiReact } from "react-icons/di";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { SiNextdotjs, SiTypescript } from "react-icons/si";



export default function Skills() {
  return (
    <Layout title="Dcm91Portfolio - Skills">
      <div className="grid px-10 py-4">
        <div className="border-solid border-2 border-orange-900 mt-3 p-2">
          <h2 className="px-2 ">WEB DEVELOPMENT</h2>
          <div className="border-solid border-2 border-orange-900 mt-2 p-2">
            <IoLogoJavascript/>
            <SiNextdotjs/>
            <SiTypescript/>
          </div>
        </div>

        <div className="border-solid border-2 border-orange-900 mt-3 p-2">
          <h2 className="px-2 text-right">FRONT-END DEVELOPMENT</h2>
          <div className="border-solid border-2 border-orange-900 mt-2 p-2">
            <DiReact/>
            <IoLogoHtml5/>
          </div>
        </div>

        <div className="border-solid border-2 border-orange-900 mt-3 p-2">
          <h2 className="px-2 ">BACK-END DEVELOPMENT</h2>
          <div className="border-solid border-2 border-orange-900 mt-2 p-2"></div>
        </div>

        <div className="border-solid border-2 border-orange-900 mt-3 p-2">
          <h2 className="px-2 text-right">TOOLS</h2>
          <div className="border-solid border-2 border-orange-900 mt-2 p-2"></div>
        </div>
        
      </div>
    </Layout>
  )
}