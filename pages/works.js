import Head from "next/head"
import { useState } from "react"
import { FiLink } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"
import { useTranslation } from "@/hooks/useTranslation"
import { ProjectCard } from "@/components/ProjectCard"

const projects = [
  {
    id: "sinigual",
    title: "SinIgual",
    category: "experience",
    image: "/projects/sinigual.png",
    links: [{ label: "Website", url: "https://www.sinigual.com", icon: <FiLink /> }],
  },
  {
    id: "payf",
    title: "Payf",
    category: "experience",
    image: "/projects/payf.png",
    links: [{ label: "Website", url: "https://payf.es", icon: <FiLink /> }],
  },
  {
    id: "skuadlack",
    title: "Skuadlack",
    category: "projects",
    image: "/projects/skuadlack.png",
    links: [{ label: "Github", url: "https://github.com/nds-fsd/slack", icon: <BsGithub /> }],
  },
  {
    id: "typedcinema",
    title: "TypedCinema",
    category: "projects",
    image: "/projects/typed.png",
    links: [
      { label: "Github", url: "https://github.com/DCM91/next.tsx-cinema", icon: <BsGithub /> },
      { label: "Website", url: "https://next-tsx-cinema.vercel.app", icon: <FiLink /> },
    ],
  },
  {
    id: "portfolio",
    title: "My first Portfolio",
    category: "projects",
    image: "/projects/portfolio.png",
    links: [
      { label: "Github", url: "https://github.com/DCM91/next-portfolio", icon: <BsGithub /> },
      { label: "Website", url: "https://next-portfolio-dcm91.vercel.app", icon: <FiLink /> },
    ],
  },
  {
    id: "i18n",
    title: "I18N internationalization",
    category: "projects",
    image: "/projects/internacionalizacion.png",
    links: [
      { label: "Github", url: "https://github.com/DCM91/i18n-template", icon: <BsGithub /> },
    ],
  },
  {
    id: "blockbuster",
    title: "Blockbuster",
    category: "projects",
    image: "/projects/blockbuster.png",
    links: [
      { label: "Github", url: "https://github.com/DCM91/BlockBuster", icon: <BsGithub /> },
    ],
  },
  {
    id: "pokedex",
    title: "Pokédex",
    category: "projects",
    image: "/projects/pokedex.png",
    links: [
      { label: "Github", url: "https://github.com/DCM91/Pokedex", icon: <BsGithub /> },
    ],
  },
]

const getDescKey = (id) => id.charAt(0).toUpperCase() + id.slice(1)

export default function Works() {
  const t = useTranslation()
  const [expandedId, setExpandedId] = useState(null)

  const experienceProjects = projects.filter((p) => p.category === "experience")
  const projectProjects = projects.filter((p) => p.category === "projects")

  return (
    <>
      <Head>
        <title>DCM91 | Works</title>
        <meta name="description" content={t.works.experience} />
      </Head>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-medium">
            Portfolio
          </span>
          <h1 className="mt-3 font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            Things I&apos;ve <span className="text-accent">built</span>
          </h1>
        </div>

        <div className="mt-16">
          <h2 className="font-heading text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent" />
            {t.works.experience}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experienceProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedId === project.id}
                onToggle={() => setExpandedId((prev) => (prev === project.id ? null : project.id))}
                desc={t.works[getDescKey(project.id)]}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-heading text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent" />
            {t.works.projects}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedId === project.id}
                onToggle={() => setExpandedId((prev) => (prev === project.id ? null : project.id))}
                desc={t.works[getDescKey(project.id)]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
