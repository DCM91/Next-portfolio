import { Layout } from "@/components/Layout"
import { DiReact } from "react-icons/di";
import { IoLogoJavascript, IoLogoHtml5, IoLogoPython, IoMdCloud } from "react-icons/io";
import { SiNextdotjs, SiTypescript, SiSocketdotio, SiTailwindcss, SiCss3, SiBootstrap } from "react-icons/si";


export default function Skills() {
  return (
    <Layout title="Dcm91Portfolio - Skills">
      <div className="grid px-10 py-4">

        <div className="p-2">
          <h2 className="px-2 text-primary-focus "><b>WEB DEVELOPMENT</b></h2>
          <div className="border-solid border-2 border-primary mt-2 p-3 flex gap-6 text-error flex-wrap">

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <IoLogoJavascript/>
              </div>
              <div>
                <p>Javascript</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <SiNextdotjs/>
              </div>
              <div>
                <p>NextJS</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <SiSocketdotio/>
              </div>
              <div>
                <p>Socket.io</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <IoLogoPython/>
              </div>
              <div>
                <p>Python</p>
              </div>
            </div>
            
            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center"> 
                <IoMdCloud/>
              </div>
              <div>
                <p>Api</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
               <SiTypescript/>
              </div>
              <div>
                <p>Typescript</p>
              </div>
            </div>

          </div>
        </div>

        <div className=" mt-3 p-2">
          <h2 className="px-2 text-right text-accent"><b>FRONT-END DEVELOPMENT</b></h2>
          <div className="border-solid border-2 border-primary mt-2 p-3 flex gap-6 text-error flex-wrap justify-end">

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <DiReact/>
              </div>
              <div>
                <p>ReactJS</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <IoLogoHtml5/>
              </div>
              <div>
                <p>HTML</p>
              </div>
            </div>
            
            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <SiTailwindcss/>
              </div>
              <div>
                <p>Tailwind</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <SiBootstrap/>
              </div>
              <div>
                <p>Bootstrap</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <SiCss3/>
              </div>
              <div>
                <p>CSS</p>
              </div>
            </div>

          </div>
        </div>

        <div className="p-2">
          <h2 className="px-2 text-primary-focus "><b>BACK-END DEVELOPMENT</b></h2>
          <div className="border-solid border-2 border-primary mt-2 p-3 flex gap-6 text-error flex-wrap">

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <IoLogoJavascript/>
              </div>
              <div>
                <p>Javascript</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <SiNextdotjs/>
              </div>
              <div>
                <p>NextJS</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <SiSocketdotio/>
              </div>
              <div>
                <p>Socket.io</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
               <SiTypescript/>
              </div>
              <div>
                <p>Typescript</p>
              </div>
            </div>

          </div>
        </div>


        <div className=" mt-3 p-2">
          <h2 className="px-2 text-right text-accent"><b>TOOLS</b></h2>
          <div className="border-solid border-2 border-primary mt-2 p-3 flex gap-6 text-error flex-wrap justify-end">

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <DiReact/>
              </div>
              <div>
                <p>ReactJS</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <IoLogoHtml5/>
              </div>
              <div>
                <p>HTML</p>
              </div>
            </div>
            
            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <SiTailwindcss/>
              </div>
              <div>
                <p>Tailwind</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <SiBootstrap/>
              </div>
              <div>
                <p>Bootstrap</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <SiCss3/>
              </div>
              <div>
                <p>CSS</p>
              </div>
            </div>

          </div>
        </div>

        
      </div>
    </Layout>
  )
}