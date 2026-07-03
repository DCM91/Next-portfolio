import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import { Layout } from "@/components/Layout"
import { SpeedInsights } from "@vercel/speed-insights/react"
import "@/styles/globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const fontVariables = [dmSans, plusJakartaSans, jetbrainsMono]
  .map((f) => f.variable)
  .join(" ")

export default function App({ Component, pageProps }) {
  return (
    <Layout className={fontVariables}>
      <Component {...pageProps} />
      <SpeedInsights />
    </Layout>
  )
}
