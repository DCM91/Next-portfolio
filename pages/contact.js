import Head from "next/head"
import Image from "next/image"
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md"
import { useTranslation } from "@/hooks/useTranslation"
import { Mail } from "@/components/mail"

export default function Contact() {
  const t = useTranslation()

  const handleEmailClick = (e) => {
    e.preventDefault()
    const user = "castromartindaniel91"
    const domain = "gmail.com"
    window.location.href = `mailto:${user}@${domain}`
  }

  return (
    <>
      <Head>
        <title>DCM91 | Contact</title>
        <meta name="description" content="Get in touch with Daniel Castro Martin for web development projects." />
      </Head>

      <section className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src="/assets/contactame.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-surface/60" />
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-4 md:pb-6">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-accent tracking-widest uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t.contact.sectionTitle}
          </span>
          <h1 className="mt-3 font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            {t.contact.letsWorkTogether.split(" ")[0]}{" "}
            <span className="text-accent">{t.contact.letsWorkTogether.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-4 text-text-secondary text-base leading-relaxed">
            {t.contact.contact2}
          </p>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 pt-0 pb-12 md:pb-16 gradient-mesh">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight">
                {t.contact.getInTouch}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                {t.contact.contact3}
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${["castromartindaniel91","gmail.com"].join("@")}`}
                onClick={handleEmailClick}
                className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface-alt hover:border-accent/30 hover:bg-accent-subtle transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent-subtle text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MdEmail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.contact.email}</p>
                  <p className="text-xs text-text-muted">{t.contact.contact1}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface-alt">
                <div className="w-9 h-9 rounded-lg bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                  <MdLocationOn size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.contact.location}</p>
                  <p className="text-xs text-text-muted">{t.contact.barcelona}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface-alt">
                <div className="w-9 h-9 rounded-lg bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                  <MdAccessTime size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.contact.responseTime}</p>
                  <p className="text-xs text-text-muted">{t.contact.within24Hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 animate-slide-up animate-delay-200">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div className="relative rounded-2xl border border-border bg-surface p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="font-heading text-lg font-semibold tracking-tight">
                    {t.contact.sendMessage}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">
                    {t.contact.fillForm}
                  </p>
                </div>
                <Mail />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}