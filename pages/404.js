import Head from "next/head"
import Link from "next/link"
import { MdArrowBack } from "react-icons/md"
import { useTranslation } from "@/hooks/useTranslation"

export default function Custom404() {
  const t = useTranslation()

  return (
    <>
      <Head>
        <title>DCM91 | {t.notFound.title}</title>
        <meta name="description" content={t.notFound.message} />
      </Head>

      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <span className="font-heading text-8xl md:text-9xl font-extrabold text-accent/20">
          404
        </span>
        <h1 className="mt-0 font-heading text-3xl md:text-4xl font-extrabold">
          {t.notFound.title}
        </h1>
        <p className="mt-4 text-lg text-text-secondary max-w-md">
          {t.notFound.message}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
        >
          <MdArrowBack size={18} />
          {t.notFound.back}
        </Link>
      </section>
    </>
  )
}
