import { DiReact, DiTrello, DiGit, DiScrum, DiVisualstudio } from "react-icons/di"
import { IoLogoAndroid, IoLogoJavascript, IoLogoHtml5, IoLogoPython, IoMdCloud, IoLogoNodejs } from "react-icons/io"
import { SiNextdotjs, SiTypescript, SiSocketdotio, SiTailwindcss, SiCss, SiBootstrap, SiExpress, SiMysql, SiMongodb, SiJsonwebtokens } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { MdDevicesOther } from "react-icons/md"

export const SKILL_ICONS = {
  javascript: { icon: <IoLogoJavascript />, label: "JavaScript" },
  nextjs: { icon: <SiNextdotjs />, label: "NextJS" },
  "socket.io": { icon: <SiSocketdotio />, label: "Socket.io" },
  python: { icon: <IoLogoPython />, label: "Python" },
  typescript: { icon: <SiTypescript />, label: "TypeScript" },
  apis: { icon: <IoMdCloud />, label: "APIs" },
  react: { icon: <DiReact />, label: "React" },
  responsive: { icon: <MdDevicesOther />, label: "Responsive" },
  html5: { icon: <IoLogoHtml5 />, label: "HTML5" },
  tailwind: { icon: <SiTailwindcss />, label: "Tailwind" },
  bootstrap: { icon: <SiBootstrap />, label: "Bootstrap" },
  css: { icon: <SiCss />, label: "CSS" },
  "react-native": { icon: <TbBrandReactNative />, label: "React Native" },
  node: { icon: <IoLogoNodejs />, label: "Node" },
  express: { icon: <SiExpress />, label: "Express" },
  mysql: { icon: <SiMysql />, label: "MySQL" },
  mongodb: { icon: <SiMongodb />, label: "MongoDB" },
  jwt: { icon: <SiJsonwebtokens />, label: "JWT" },
  git: { icon: <DiGit />, label: "Git" },
  agile: { icon: <DiScrum />, label: "Agile" },
  "visual-studio": { icon: <DiVisualstudio />, label: "Visual Studio" },
  "android-studio": { icon: <IoLogoAndroid />, label: "Android Studio" },
  trello: { icon: <DiTrello />, label: "Trello" },
}

export const SKILL_CATEGORIES = [
  {
    key: "web",
    skills: ["javascript", "nextjs", "socket.io", "python", "typescript", "apis"],
  },
  {
    key: "frontend",
    skills: ["react", "responsive", "html5", "tailwind", "bootstrap", "css", "react-native"],
  },
  {
    key: "backend",
    skills: ["node", "express", "mysql", "mongodb", "jwt"],
  },
  {
    key: "tools",
    skills: ["git", "agile", "visual-studio", "android-studio", "trello"],
  },
]

export const PROJECT_SKILLS = {
  sinigual: ["react", "nextjs", "tailwind", "typescript", "apis", "node", "mysql", "jwt"],
  payf: ["react-native", "node", "apis", "jwt", "mongodb"],
  skuadlack: ["react", "socket.io", "node", "express", "mongodb", "jwt"],
  typedcinema: ["react", "typescript", "nextjs", "tailwind", "css", "apis"],
  portfolio: ["react", "nextjs", "tailwind", "css"],
  i18n: ["react", "nextjs", "tailwind", "css"],
  blockbuster: ["react", "node", "express", "mysql", "css", "bootstrap"],
  pokedex: ["html5", "css", "javascript", "apis"],
}
