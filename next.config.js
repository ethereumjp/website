/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/website" : "",
  // i18n: { locales: ['en', 'ja'], defaultLocale: 'en', localeDetection: false },
  compiler: {
    emotion: true,
  },
  async redirects() {
    return [
      {
        source: "/ethtokyo2024",
        destination: "https://www.ethtokyo.org",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
