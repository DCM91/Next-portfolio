import Head from "next/head"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"

const sections = [
  {
    key: "basetext1",
    image: "/assets/networking.jpg",
    alt: "Networking",
    width: 500,
    height: 300,
    reverse: false,
  },
  {
    key: "basetext2",
    image: "/assets/clase esade.jpg",
    alt: "Class at ESADE",
    width: 500,
    height: 500,
    reverse: true,
  },
  {
    key: "basetext3",
    image: "/assets/mefoto.jpg",
    alt: "Developer working",
    width: 250,
    height: 250,
    reverse: false,
  },
]

export default function About() {
  const t = useTranslation()

  return (
    <>
      <Head>
        <title>DCM91 | About</title>
        <meta name="description" content={t.about.basetext1} />
      </Head>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-medium">
            About
          </span>
          <h1 className="mt-3 font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            The story <span className="text-accent">so far</span>
          </h1>
        </div>

        <div className="mt-16 space-y-24">
          {sections.map((s, i) => (
            <div
              key={s.key}
              className={`flex flex-col ${s.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent to-pink-500 opacity-10 blur-xl" />
                  <Image
                    src={s.image}
                    width={s.width}
                    height={s.height}
                    alt={s.alt}
                    className="relative rounded-2xl w-full object-cover"
                    style={{ maxHeight: 400 }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative pl-6 border-l-2 border-accent">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent" />
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {t.about[s.key]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
