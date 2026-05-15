import Head from "next/head"
import Image from "next/image"
import { MdEmail, MdLocationOn } from "react-icons/md"
import { useTranslation } from "@/hooks/useTranslation"
import { Mail } from "@/components/mail"

export default function Contact() {
  const t = useTranslation()

  return (
    <>
      <Head>
        <title>DCM91 | Contact</title>
        <meta name="description" content="Get in touch with Daniel Castro Martin for web development projects." />
      </Head>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-medium">
            Contact
          </span>
          <h1 className="mt-3 font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            Let&apos;s work <span className="text-accent">together</span>
          </h1>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="p-6 rounded-2xl border border-border bg-surface-alt">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                  <MdEmail size={20} />
                </div>
                <div>
                  <p className="font-medium">{t.contact.contact1}</p>
                  <p className="text-sm text-text-secondary mt-1">
                    {t.contact.contact2}
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    {t.contact.contact3}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border">
              <Image
                src="/assets/contactame.jpg"
                width={600}
                height={400}
                alt="Contact"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border p-6 md:p-8">
            <Mail />
          </div>
        </div>
      </section>
    </>
  )
}
