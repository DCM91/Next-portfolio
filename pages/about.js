import Head from "next/head"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"

const milestones = [
  { year: "2024 — Present", company: "JBC Tools", role: "Full Stack Developer", current: true },
  { year: "2023 — 2024", company: "Sinigual", role: "Full Stack Developer" },
  { year: "2023", company: "Payf", role: "Front End Developer" },
  { year: "2022 — 2023", company: "Nuclio Digital School", role: "Full Stack Training" },
  { year: "2011 — 2022", company: "Charcutería Hnos Castro", role: "Self-employed" },
  { year: "2009 — 2011", company: "Silex Informática S.L.", role: "Telecommunications Technician" },
]

const education = [
  { title: "Master in AI Development", school: "BIG School", year: "2025 — Present" },
  { title: "Full Stack Master", school: "Nuclio Digital School", year: "2022" },
  { title: "Minor UI/UX", school: "Nuclio Digital School", year: "2023" },
  { title: "Grado Superior en Sistemas de Telecomunicaciones e Informática", school: "IES Anna Gironella Mundet", year: "" },
]

const languagesList = [
  { name: "Spanish", level: "Native" },
  { name: "Catalan", level: "Native" },
  { name: "English", level: "B2" },
]

export default function About() {
  const t = useTranslation()

  return (
    <>
      <Head>
        <title>DCM91 | About</title>
        <meta name="description" content={t.about.intro} />
      </Head>

      <section className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src="/assets/networking.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-surface/60" />
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-4 md:pb-6">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            Daniel Castro<span className="text-accent"> Martín</span>
          </h1>
          <span className="inline-flex items-center gap-2 text-xs font-mono text-accent tracking-widest uppercase font-medium mt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t.about.sectionTitle}
          </span>
          <p className="mt-4 text-text-secondary text-base leading-relaxed">
            {t.about.intro}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-0 pb-12 md:pb-16">
        <div className="animate-slide-up">
          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
            {t.about.trajectory}
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className={`w-3.5 h-3.5 rounded-full shrink-0 transition-all duration-300 ${
                      m.current
                        ? "bg-accent ring-4 ring-accent/20"
                        : "bg-border group-hover:bg-accent/50"
                    }`} />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-accent/20 to-border-subtle group-hover:from-accent/40 group-hover:to-accent/10 transition-all" />
                    )}
                  </div>
                  <div className={`pb-6 ${i === milestones.length - 1 ? "pb-0" : ""}`}>
                    <time className="text-xs font-mono text-accent tracking-wide">{m.year}</time>
                    <h3 className="mt-1 text-base font-semibold group-hover:text-accent transition-colors">{m.company}</h3>
                    <p className="text-sm text-text-secondary mt-0.5">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block sticky top-28 animate-scale-in animate-delay-200">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/20 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-border">
                  <Image
                    src="/assets/clase esade.jpg"
                    alt="Nuclio Digital School"
                    width={500}
                    height={500}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ maxHeight: 420 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface/90 backdrop-blur-sm text-xs font-mono text-accent font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Nuclio Digital School &middot; 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-0 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up animate-delay-100">
          <div>
            <h3 className="font-heading text-xl font-bold tracking-tight mb-6">{t.about.education}</h3>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-border bg-surface-alt hover:border-accent/20 hover:bg-accent-subtle transition-all"
                >
                  <p className="font-semibold text-sm">{edu.title}</p>
                  <p className="text-xs text-text-muted mt-1">{edu.school}{edu.year && <span> &middot; {edu.year}</span>}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold tracking-tight mb-6">{t.about.languages}</h3>
            <div className="space-y-3">
              {languagesList.map((lang, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface-alt hover:border-accent/20 transition-all"
                >
                  <span className="font-medium text-sm">{lang.name}</span>
                  <span className="text-xs text-text-muted">{lang.level}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
