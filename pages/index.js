import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { MdArrowForward } from "react-icons/md"
import { BiCodeAlt } from "react-icons/bi"
import { DiDatabase } from "react-icons/di"
import { MdSmartToy } from "react-icons/md"
import { useTranslation } from "@/hooks/useTranslation"
import { NAV_LINKS } from "@/constants"

const skills = [
  {
    key: "codeDesc",
    title: "Code Craftsman",
    icon: <BiCodeAlt size={22} />,
  },
  {
    key: "dataDesc",
    title: "Data Architect",
    icon: <DiDatabase size={22} />,
  },
  {
    key: "aiDesc",
    title: "AI Integration",
    icon: <MdSmartToy size={22} />,
  },
]

export default function Home() {
  const t = useTranslation()

  return (
    <>
      <Head>
        <title>DCM91 | Full Stack Developer</title>
        <meta name="description" content={t.home.description} />
      </Head>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-subtle via-transparent to-transparent dark:from-accent-subtle/5" />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="order-2 lg:order-1">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface-alt text-sm text-text-secondary mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  {t.home.title}
                </div>

                <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                  Daniel Castro Martín
                </h1>

                <p className="mt-6 text-lg md:text-xl font-medium text-text-primary">
                  Programador especializado en desarrollo web
                </p>

                <div className="mt-4 text-xl md:text-2xl text-text-secondary flex items-center gap-2">
                  <span className="text-accent font-semibold">
                    <TypeAnimation
                      sequence={[
                        "Web Development", 3000,
                        "Frontend Development", 3000,
                        "Backend Development", 3000,
                      ]}
                      speed={30}
                      wrapper="span"
                      repeat={Infinity}
                    />
                  </span>
                  <span className="w-1.5 h-6 bg-accent rounded-full animate-pulse" />
                </div>

                <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-4 animate-slide-up animate-delay-200">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-alt border border-border text-sm font-medium text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent-subtle transition-all"
                  >
                    {t.navbar[link.labelKey.split(".")[1]]}
                    <MdArrowForward
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 h-full flex items-center justify-center lg:justify-end animate-fade-in animate-delay-100">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent/50 to-pink-500 opacity-30 blur-2xl" />
                <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-full border-4 border-surface-alt shadow-2xl">
                  <Image
                    src="/assets/foto_blanconegro.jpeg"
                    alt="Daniel Castro Martín"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start" >
          <div className="shrink-0 mx-auto md:mx-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent to-pink-500 opacity-20 blur-xl" />
              <Image
                src="/assets/mefoto.jpg"
                width={280}
                height={280}
                alt="Daniel Castro Martín"
                className="relative rounded-2xl move-down-5rem"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-medium">Daniel Castro Martin</p>
              <p className="text-sm text-text-muted">
                castromartindaniel91@gmail.com
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-2 w-full">
            {skills.map((skill, i) => (
              <div
                key={skill.key}
                className="group flex items-start gap-5 p-5 rounded-2xl transition-all hover:bg-surface-alt hover:translate-x-1 cursor-default"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="mt-1 w-10 h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-lg">
                    {skill.title}
                  </h3>
                  <p className="mt-1.5 text-text-secondary leading-relaxed">
                    {t.home[skill.key]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
