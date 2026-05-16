import Head from "next/head"
import { useState, useMemo } from "react"
import { FiLink } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"
import { useTranslation } from "@/hooks/useTranslation"
import { ProjectCard } from "@/components/ProjectCard"
import { SKILL_CATEGORIES, PROJECT_SKILLS, SKILL_ICONS } from "@/constants/skills"

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
  const [activeFilter, setActiveFilter] = useState(null)

  const filteredProjects = useMemo(() => {
    if (!activeFilter) return projects
    const category = SKILL_CATEGORIES.find((c) => c.key === activeFilter)
    if (!category) return projects
    return projects.filter((p) => {
      const pSkills = PROJECT_SKILLS[p.id] || []
      return pSkills.some((s) => category.skills.includes(s))
    })
  }, [activeFilter])

  const experienceProjects = filteredProjects.filter((p) => p.category === "experience")
  const projectProjects = filteredProjects.filter((p) => p.category === "projects")

  return (
    <>
      <Head>
        <title>DCM91 | Works</title>
        <meta name="description" content={t.works.experience} />
      </Head>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl animate-fade-in">
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-medium">
            Portfolio
          </span>
          <h1 className="mt-3 font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            Things I&apos;ve <span className="text-accent">built</span>
          </h1>
          <p className="mt-4 text-text-secondary text-base leading-relaxed">
            {t.works.description || "Every project tells a story — here are mine, built with modern tools and clean code."}
          </p>
        </div>

        <div className="mt-16 animate-slide-up">
          <h2 className="font-heading text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent" />
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.key}
                className="p-6 rounded-2xl border border-border bg-surface-alt"
              >
                <h3 className="font-heading text-xs font-bold mb-4 text-accent uppercase tracking-widest">
                  {t.skills[cat.key]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skillKey) => {
                    const skill = SKILL_ICONS[skillKey]
                    if (!skill) return null
                    return (
                      <span
                        key={skillKey}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-surface border border-border text-text-secondary"
                      >
                        <span className="text-sm">{skill.icon}</span>
                        {skill.label}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !activeFilter
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "bg-surface-alt border border-border text-text-secondary hover:border-accent/30 hover:text-accent"
            }`}
          >
            All
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(activeFilter === cat.key ? null : cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === cat.key
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "bg-surface-alt border border-border text-text-secondary hover:border-accent/30 hover:text-accent"
              }`}
            >
              {t.skills[cat.key]}
            </button>
          ))}
        </div>

        {experienceProjects.length > 0 && (
          <div className="mt-16 animate-slide-up animate-delay-100">
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
                  skillKeys={PROJECT_SKILLS[project.id]}
                />
              ))}
            </div>
          </div>
        )}

        {projectProjects.length > 0 && (
          <div className="mt-20 animate-slide-up animate-delay-200">
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
                  skillKeys={PROJECT_SKILLS[project.id]}
                />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="mt-16 text-center py-16">
            <p className="text-text-muted text-lg">No projects match this filter.</p>
            <button
              onClick={() => setActiveFilter(null)}
              className="mt-4 text-accent hover:text-accent-hover underline text-sm"
            >
              Clear filter
            </button>
          </div>
        )}
      </section>
    </>
  )
}
