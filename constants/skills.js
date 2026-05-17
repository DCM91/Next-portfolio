import { DiReact, DiTrello, DiGit, DiScrum, DiVisualstudio } from "react-icons/di"
import { IoLogoAndroid, IoLogoJavascript, IoLogoHtml5, IoLogoPython, IoMdCloud, IoLogoNodejs } from "react-icons/io"
import { SiNextdotjs, SiTypescript, SiSocketdotio, SiTailwindcss, SiCss, SiBootstrap, SiExpress, SiMysql, SiMongodb, SiJsonwebtokens, SiAngular, SiLaravel, SiPhp, SiJira, SiNotion, SiClaude, SiGoogle, SiWordpress, SiMui, SiLinear, SiExpo } from "react-icons/si"
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
  wordpress: { icon: <SiWordpress />, label: "WordPress" },
  g4a: { icon: <SiGoogle />, label: "G4A" },
  "material-ui": { icon: <SiMui />, label: "Material UI" },
  expo: { icon: <SiExpo />, label: "Expo" },
  linear: { icon: <SiLinear />, label: "Linear" },
}

export const FILTERABLE_SKILLS = [
  "nextjs",
  "socket.io",
  "typescript",
  "apis",
  "react",
  "react-native",
  "express",
  "mysql",
  "mongodb",
  "jwt",
  "angular",
  "android-studio",
  "laravel",
  "php",
  "opencode",
  "antigravity",
  "seo",
]

export const SKILL_CATEGORIES = [
  {
    key: "web",
    skills: ["javascript", "nextjs", "socket.io", "typescript", "apis", "php", "laravel", "wordpress"],
  },
  {
    key: "frontend",
    skills: ["react", "responsive", "html5", "tailwind", "bootstrap", "css", "react-native", "angular", "material-ui"],
  },
  {
    key: "backend",
    skills: ["node", "express", "mysql", "mongodb", "jwt"],
  },
  {
    key: "tools",
    skills: ["git", "agile", "visual-studio", "android-studio", "trello", "jira", "notion", "opencode", "antigravity", "seo", "expo", "linear", "g4a"],
  },
]

export const PROJECT_SKILLS = {
  jbctools: ["javascript", "apis", "php", "laravel", "wordpress", "responsive", "html5", "tailwind", "bootstrap", "css", "mysql", "jwt", "antigravity", "seo", "notion", "g4a", "react", "node"],
  sinigual: ["angular", "visual-studio", "material-ui", "git", "agile", "jira", "mysql", "laravel", "php", "javascript", "apis", "css", "responsive", "jwt", "typescript", "html5", "socket.io", "node"],
  aroacarmona: ["react", "nextjs", "html5", "tailwind", "css", "responsive", "javascript", "seo", "antigravity", "git", "node"],
  endansa: ["react", "nextjs", "html5", "tailwind", "css", "responsive", "javascript", "seo", "opencode", "git", "node"],
  payf: ["expo", "android-studio", "responsive", "javascript", "html5", "css", "mongodb", "jwt", "trello", "git", "react-native", "node", "express", "agile"],
  skuadlack: ["react", "node", "express", "linear", "html5", "css", "responsive", "javascript", "agile", "jwt", "socket.io", "mongodb"],
  typedcinema: ["react", "nextjs", "typescript", "node", "express", "html5", "tailwind", "css", "responsive", "javascript"],
  portfolio: ["angular", "html5", "bootstrap", "css", "responsive", "javascript"],
  i18n: ["react", "html5", "tailwind", "css", "responsive", "javascript"],
}
