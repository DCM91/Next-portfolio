import Head from "next/head"
import { DiReact, DiTrello, DiGit, DiScrum, DiVisualstudio } from "react-icons/di"
import { IoLogoAndroid, IoLogoJavascript, IoLogoHtml5, IoLogoPython, IoMdCloud, IoLogoNodejs } from "react-icons/io"
import { SiNextdotjs, SiTypescript, SiSocketdotio, SiTailwindcss, SiCss, SiBootstrap, SiExpress, SiMysql, SiMongodb, SiJsonwebtokens } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { MdDevicesOther } from "react-icons/md"
import { useTranslation } from "@/hooks/useTranslation"
import { SkillIcon } from "@/components/SkillIcon"

const skillCategories = [
  {
    titleKey: "web",
    color: "accent",
    skills: [
      { icon: <IoLogoJavascript />, label: "Javascript" },
      { icon: <SiNextdotjs />, label: "NextJS" },
      { icon: <SiSocketdotio />, label: "Socket.io" },
      { icon: <IoLogoPython />, label: "Python" },
      { icon: <SiTypescript />, label: "Typescript" },
      { icon: <IoMdCloud />, label: "APIs" },
    ],
  },
  {
    titleKey: "frontend",
    color: "accent",
    skills: [
      { icon: <DiReact />, label: "ReactJS" },
      { icon: <MdDevicesOther />, label: "Responsive" },
      { icon: <IoLogoHtml5 />, label: "HTML5" },
      { icon: <SiTailwindcss />, label: "Tailwind" },
      { icon: <SiBootstrap />, label: "Bootstrap" },
      { icon: <SiCss />, label: "CSS" },
      { icon: <TbBrandReactNative />, label: "React Native" },
    ],
  },
  {
    titleKey: "backend",
    color: "accent",
    skills: [
      { icon: <IoLogoNodejs />, label: "Node" },
      { icon: <SiExpress />, label: "Express" },
      { icon: <SiMysql />, label: "Mysql" },
      { icon: <SiMongodb />, label: "Mongodb" },
      { icon: <SiJsonwebtokens />, label: "JWT" },
    ],
  },
  {
    titleKey: "tools",
    color: "accent",
    skills: [
      { icon: <DiGit />, label: "GIT" },
      { icon: <DiScrum />, label: "Agile" },
      { icon: <DiVisualstudio />, label: "Visual studio" },
      { icon: <IoLogoAndroid />, label: "Android Studio" },
      { icon: <DiTrello />, label: "Trello" },
    ],
  },
]

export default function Skills() {
  const t = useTranslation()

  return (
    <>
      <Head>
        <title>DCM91 | Skills</title>
        <meta name="description" content="Technical skills and expertise in web development, frontend, backend, and tools." />
      </Head>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-medium">
            Expertise
          </span>
          <h1 className="mt-3 font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            Skills &amp; <span className="text-accent">tools</span>
          </h1>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.titleKey}
              className="p-8 rounded-2xl border border-border bg-surface-alt"
            >
              <h2 className="font-heading text-xl font-bold mb-6 text-accent">
                {t.skills[cat.titleKey]}
              </h2>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill) => (
                  <SkillIcon key={skill.label} icon={skill.icon} label={skill.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
