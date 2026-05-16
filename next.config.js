/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  i18n: {
    locales: ["en", "es", "cat"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/skills",
        destination: "/works",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
