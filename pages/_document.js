import { Html, Head, Main, NextScript } from "next/document"

export default function Document(props) {
  const locale = props.locale || "en"
  return (
    <Html lang={locale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var s=localStorage.getItem("theme");var p=window.matchMedia("(prefers-color-scheme: dark)").matches;var d=s?s==="dark":p;if(d)document.documentElement.classList.add("dark")})()`
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
