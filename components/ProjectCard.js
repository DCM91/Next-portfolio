import Image from "next/image"
import { MdExpandMore } from "react-icons/md"
import { SKILL_ICONS } from "@/constants/skills"

export function ProjectCard({ project, isExpanded, onToggle, desc, skillKeys }) {
  return (
    <div
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onToggle()
        }
      }}
      role="button"
      tabIndex={0}
      className="group rounded-2xl border border-border bg-surface-alt overflow-hidden transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          width={600}
          height={400}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-alt/80 to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-bold text-lg">{project.title}</h3>
          <MdExpandMore
            className={`text-text-muted transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            size={20}
          />
        </div>

        {skillKeys && skillKeys.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {skillKeys.map((key) => {
              const skill = SKILL_ICONS[key]
              if (!skill) return null
              return (
                <span
                  key={key}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-accent/10 text-accent"
                >
                  <span className="text-sm">{skill.icon}</span>
                  {skill.label}
                </span>
              )
            })}
          </div>
        )}

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-96 mt-4" : "max-h-0 mt-0"
          }`}
        >
          <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-alt border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
