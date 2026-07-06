/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  i18n: {
    locales: ["en", "es", "cat"],
    defaultLocale: "en",
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      const existing = config.optimization.splitChunks || {}
      config.optimization.splitChunks = {
        ...existing,
        cacheGroups: {
          ...(existing.cacheGroups || {}),
          icons: {
            test: /[\\/]node_modules[\\/](react-icons)[\\/]/,
            name: "chunk-icons",
            chunks: "all",
            priority: 20,
          },
        },
      }
    }
    return config
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
