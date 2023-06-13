import { Layout } from "@/components/Layout"
import { DiReact, DiTrello, DiGit, DiScrum, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript, IoLogoHtml5, IoLogoPython, IoMdCloud, IoLogoNodejs } from "react-icons/io";
import { SiNextdotjs, SiTypescript, SiSocketdotio, SiTailwindcss, SiCss3, SiBootstrap, SiExpress, SiMysql, SiMongodb, SiJsonwebtokens } from "react-icons/si";


export default function Skills() {
  return (
    <Layout title="Dcm91Portfolio - Skills">
      <div className="grid px-10 py-4 my-4 gap-4">

        <div className="p-2 border-t-4 border-solid border-l-8 border-warning-focus">
          <h2 className="px-10 text-warning-focus "><b><ins>WEB DEVELOPMENT</ins></b></h2>
          <div className="mt-2 p-3 flex gap-6 text-error flex-wrap text-center">

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
              <div className="flex justify-center "> 
               <SiTypescript/>
              </div>
              <div>
                <p>Typescript</p>
              </div>
            </div>
            
            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center"> 
                <IoMdCloud/>
              </div>
              <div>
                <p>APIs</p>
              </div>
            </div>

          </div>
        </div>

        <div className="p-2 border-t-4 border-solid border-r-8 border-accent">
          <h2 className="px-10 text-right text-accent"><b><ins>FRONT-END DEVELOPMENT</ins></b></h2>
          <div className=" mt-2 p-3 flex gap-6 text-error flex-wrap text-center justify-end">

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

        <div className="p-2 border-t-4 border-solid border-l-8 border-primary-focus">
          <h2 className="px-10 text-primary-focus "><b><ins>BACK-END DEVELOPMENT</ins></b></h2>
          <div className=" mt-2 p-3 flex gap-6 text-error flex-wrap text-center">

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <IoLogoNodejs/>
              </div>
              <div>
                <p>Node</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <SiExpress/>
              </div>
              <div>
                <p>Express</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <SiMysql/>
              </div>
              <div>
                <p>Mysql</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
               <SiMongodb/>
              </div>
              <div>
                <p>Mongodb</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
               <SiJsonwebtokens/>
              </div>
              <div>
                <p>JWT</p>
              </div>
            </div>

          </div>
        </div>


        <div className=" mb-3 p-2 border-t-4 border-solid border-r-8 border-info">
          <h2 className="px-10 text-right text-info"><b><ins>TOOLS</ins></b></h2>
          <div className=" mt-2 p-3 flex gap-6 text-error flex-wrap text-center justify-end">

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125"> 
              <div className="flex justify-center "> 
                <DiGit/>
              </div>
              <div>
                <p>GIT</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <DiScrum/>
              </div>
              <div>
                <p>Agile</p>
              </div>
            </div>
            
            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <DiVisualstudio/>
              </div>
              <div>
                <p>Visual studio</p>
              </div>
            </div>

            <div className="grid justify-center transition-transform duration-350 transform hover:scale-125">
              <div className="flex justify-center"> 
                <DiTrello/>
              </div>
              <div>
                <p>Trello</p>
              </div>
            </div>

          </div>
        </div>

        
      </div>
    </Layout>
  )
}