export function SkillIcon({ icon, label }) {
  return (
    <div className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-surface hover:border-accent/30 hover:bg-accent-subtle transition-all cursor-default min-w-[80px]">
      <div aria-hidden="true" className="text-2xl text-text-secondary group-hover:text-accent group-hover:scale-110 transition-all">
        {icon}
      </div>
      <span className="text-xs font-medium text-text-muted group-hover:text-text-secondary transition-colors text-center">
        {label}
      </span>
    </div>
  )
}
