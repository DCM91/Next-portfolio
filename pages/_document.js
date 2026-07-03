import { Html, Head, Main, NextScript } from "next/document"

export default function Document(props) {
  const locale = props.locale || "en"
  return (
    <Html lang={locale}>
      <Head>

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
