import { Layout } from "@/components/Layout"
import { CgGym } from "react-icons/cg";
import { SiJordan } from "react-icons/si";
import { IoGameController } from "react-icons/io5";
import { GiCat } from "react-icons/gi";

export default function About() {
  return (
    <Layout title="Dcm91Portfolio - About">
    <div className="h-fit px-3">
        <p className=''>
          I am passionate about learning and continuous improvement in the IT sector, and eager to acquire new knowledge and skills in this field.<br />
          For 10 years, I was an independent freelancer in Barcelona where I learned to work in a team and be solution-oriented. But I decided to change my career path and started studying Full Stack software development.<br/> 
          Currently, I have been in this field for a year and I love discovering new technologies and tools.In my free time, I enjoy hobbies like NBA<SiJordan/>, calisthenics<CgGym />, video game<IoGameController /> and spending time with my cat<GiCat/>.<br />
          In my portfolio, you will find a variety of projects that I have developed and I am sure I can bring value to any team I have the opportunity to work with
          </p>
        
    </div>   
  </Layout>
  )
}
