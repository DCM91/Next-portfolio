import Head from "next/head"
import { useState, useMemo } from "react"
import { FiLink } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"
import { useTranslation } from "@/hooks/useTranslation"
import { ProjectCard } from "@/components/ProjectCard"
import { SKILL_CATEGORIES, PROJECT_SKILLS, SKILL_ICONS, FILTERABLE_SKILLS } from "@/constants/skills"

const projects = [
  {
    id: "jbctools",
    title: "JBC Tools",
    category: "experience",
    image: "/projects/jbctools.png",
    links: [{ label: "Website", url: "https://jbctools.com", icon: <FiLink /> }],
  },
  {
    id: "sinigual",
    title: "SinIgual",
    category: "experience",
    image: "/projects/sinigual.png",
    links: [{ label: "Website", url: "https://www.sinigual.com", icon: <FiLink /> }],
  },
  {
    id: "aroacarmona",
    title: "Aroa Photography",
    category: "experience",
    image: "/projects/aroaweb.png",
    links: [{ label: "Website", url: "https://byphnix.vercel.app", icon: <FiLink /> }],
  },
  {
    id: "endansa",
    title: "Endansa",
    category: "experience",
    image: "/projects/endabsa.png",
    links: [{ label: "Website", url: "https://endansa.com", icon: <FiLink /> }],
  },
  {
    id: "payf",
    title: "Payf",
    category: "experience",
    image: "/projects/payf.png",
    links: [{ label: "Website", url: "https://payf.es", icon: <FiLink /> }],
  },
  {
    id: "framematch",
    title: "FrameMatch",
    category: "experience",
    image: "/projects/FrameMatch.png",
    links: [{ label: "Website", url: "https://framematch.vercel.app", icon: <FiLink /> }],
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
    id: "i18n",
    title: "I18N internationalization",
    category: "projects",
    image: "/projects/internacionalizacion.png",
    links: [
      { label: "Github", url: "https://github.com/DCM91/i18n-template", icon: <BsGithub /> },
    ],
  },
  {
    id: "tiendaonline",
    title: "App de tienda online",
    category: "projects",
    image: "/projects/TiendaOnline.jpeg",
    links: [{ label: "Github", url: "https://github.com/DCM91/MerchanProyect", icon: <BsGithub /> }],
  },
]

const getDescKey = (id) => id.charAt(0).toUpperCase() + id.slice(1)

export default function Works() {
  const t = useTranslation()
  const [expandedId, setExpandedId] = useState(null)
  const [activeTech, setActiveTech] = useState(null)

  const allTechKeys = useMemo(() => {
    const techSet = new Set()
    Object.values(PROJECT_SKILLS).forEach((skills) => skills.forEach((s) => {
      if (FILTERABLE_SKILLS.includes(s)) techSet.add(s)
    }))
    return [...techSet].sort((a, b) => {
      const countA = Object.values(PROJECT_SKILLS).filter((s) => s.includes(a)).length
      const countB = Object.values(PROJECT_SKILLS).filter((s) => s.includes(b)).length
      return countB - countA
    })
  }, [])

  const filteredProjects = useMemo(() => {
    if (!activeTech) return projects
    return projects.filter((p) => {
      const pSkills = PROJECT_SKILLS[p.id] || []
      return pSkills.includes(activeTech)
    })
  }, [activeTech])

  const experienceProjects = filteredProjects.filter((p) => p.category === "experience")
  const projectProjects = filteredProjects.filter((p) => p.category === "projects")

  return (
    <>
      <Head>
        <title>DCM91 | Works</title>
        <meta name="description" content={t.works.experience} />
      </Head>

      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="max-w-2xl animate-fade-in">
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-medium">
            {t.works.portfolio}
          </span>
          <h1 className="mt-3 font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            {t.works.thingsIveBuilt.split(" ")[0]} <span className="text-accent">{t.works.thingsIveBuilt.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-4 text-text-secondary text-base leading-relaxed">
            {t.works.description || "Every project tells a story — here are mine, built with modern tools and clean code."}
          </p>
        </div>

        <div className="mt-12">
          <select
            value={activeTech || ""}
            onChange={(e) => setActiveTech(e.target.value || null)}
            className="md:hidden w-full px-4 py-2.5 rounded-xl border border-border bg-surface-alt text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            <option value="">{t.works.all}</option>
            {allTechKeys.map((techKey) => {
              const skill = SKILL_ICONS[techKey]
              if (!skill) return null
              return <option key={techKey} value={techKey}>{skill.label}</option>
            })}
          </select>

          <div className="hidden md:flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTech(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !activeTech
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "bg-surface-alt border border-border text-text-secondary hover:border-accent/30 hover:text-accent"
              }`}
            >
              {t.works.all}
            </button>
            {allTechKeys.map((techKey) => {
              const skill = SKILL_ICONS[techKey]
              if (!skill) return null
              return (
                <button
                  key={techKey}
                  onClick={() => setActiveTech(activeTech === techKey ? null : techKey)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTech === techKey
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "bg-surface-alt border border-border text-text-secondary hover:border-accent/30 hover:text-accent"
                  }`}
                >
                        <span className="text-sm" aria-hidden="true">{skill.icon}</span>
                  {skill.label}
                </button>
              )
            })}
          </div>
        </div>

        {experienceProjects.length > 0 && (
          <div className="mt-12 animate-slide-up animate-delay-100">
            <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-accent" />
              {t.works.experience}
            </h2>
<div className="grid md:grid-cols-2 gap-5">
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
          <div className="mt-12 animate-slide-up animate-delay-200">
            <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-accent" />
              {t.works.projects}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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

        <div className="mt-12 animate-slide-up animate-delay-300">
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-accent" />
            {t.works.techStack}
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
                  <span className="text-sm" aria-hidden="true">{skill.icon}</span>
                        {skill.label}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-16 text-center py-16">
            <p className="text-text-muted text-lg">{t.works.noProjects}</p>
            <button
              onClick={() => setActiveTech(null)}
              className="mt-4 text-accent hover:text-accent-hover underline text-sm"
            >
              {t.works.clearFilter}
            </button>
          </div>
        )}
      </section>
    </>
  )
}
