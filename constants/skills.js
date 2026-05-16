import { DiReact, DiTrello, DiGit, DiScrum, DiVisualstudio } from "react-icons/di"
import { IoLogoAndroid, IoLogoJavascript, IoLogoHtml5, IoLogoPython, IoMdCloud, IoLogoNodejs } from "react-icons/io"
import { SiNextdotjs, SiTypescript, SiSocketdotio, SiTailwindcss, SiCss, SiBootstrap, SiExpress, SiMysql, SiMongodb, SiJsonwebtokens, SiAngular, SiLaravel, SiPhp, SiJira, SiNotion, SiClaude, SiGoogle } from "react-icons/si"
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
  angular: { icon: <SiAngular />, label: "Angular" },
  git: { icon: <DiGit />, label: "Git" },
  agile: { icon: <DiScrum />, label: "Agile" },
  "visual-studio": { icon: <DiVisualstudio />, label: "Visual Studio" },
  "android-studio": { icon: <IoLogoAndroid />, label: "Android Studio" },
  trello: { icon: <DiTrello />, label: "Trello" },
  laravel: { icon: <SiLaravel />, label: "Laravel" },
  php: { icon: <SiPhp />, label: "PHP" },
  jira: { icon: <SiJira />, label: "Jira" },
  notion: { icon: <SiNotion />, label: "Notion" },
  "claude-code": { icon: <SiClaude />, label: "Claude Code" },
  opencode: { icon: <SiGoogle />, label: "OpenCode" },
  antigravity: { icon: <SiGoogle />, label: "Antigravity" },
  seo: { icon: <IoMdCloud />, label: "SEO" },
}

export const SKILL_CATEGORIES = [
  {
    key: "web",
    skills: ["javascript", "nextjs", "socket.io", "python", "typescript", "apis", "php", "laravel"],
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
    skills: ["git", "agile", "visual-studio", "android-studio", "trello", "jira", "notion", "claude-code", "opencode", "antigravity", "seo"],
  },
]

export const PROJECT_SKILLS = {
  sinigual: ["react", "angular", "nextjs", "tailwind", "typescript", "apis", "node", "mysql", "jwt", "php", "laravel", "jira", "git"],
  payf: ["react-native", "node", "apis", "jwt", "mongodb", "git"],
  skuadlack: ["react", "socket.io", "node", "express", "mongodb", "jwt", "git"],
  typedcinema: ["react", "typescript", "nextjs", "tailwind", "css", "apis", "git"],
  portfolio: ["react", "angular", "nextjs", "tailwind", "css", "git"],
  i18n: ["react", "nextjs", "tailwind", "css", "git"],
  blockbuster: ["react", "node", "express", "mysql", "css", "bootstrap", "git"],
  pokedex: ["html5", "css", "javascript", "apis", "git"],
  jbctools: ["angular", "tailwind", "typescript", "apis", "node", "express", "mysql", "php", "laravel", "notion", "git", "seo"],
  aroacarmona: ["react", "nextjs", "tailwind", "typescript", "css", "responsive", "git"],
  endansa: ["react", "nextjs", "tailwind", "typescript", "css", "apis", "javascript", "git"],
}
