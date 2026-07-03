import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { MdArrowForward } from "react-icons/md"
import { FiDownload } from "react-icons/fi"
import { useTranslation } from "@/hooks/useTranslation"
import { NAV_LINKS } from "@/constants"

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false, loading: () => <span className="text-accent font-semibold">&nbsp;</span> }
)

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
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            <div className="order-2 lg:order-1">
              <div className="animate-fade-in">
                <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                  Daniel Castro Martín
                </h1>

                <p className="mt-4 text-lg md:text-xl font-medium text-text-primary">
                  {t.home.role}
                </p>

                <div className="mt-4 text-xl md:text-2xl text-text-secondary flex items-center gap-2">
                  <span className="text-accent font-semibold">
                    <TypeAnimation
                      sequence={[
                        t.home.webDev, 3000,
                        t.home.frontendDev, 3000,
                        t.home.backendDev, 3000,
                      ]}
                      speed={30}
                      wrapper="span"
                      repeat={3}
                    />
                  </span>
                  <span className="w-1.5 h-6 bg-accent rounded-full animate-pulse" />
                </div>
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
                <a
                  href="/assets/cv-daniel-castro.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 hover:scale-105 transition-all"
                >
                  <FiDownload size={16} />
                  <span>CV</span>
                </a>
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
                    sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
