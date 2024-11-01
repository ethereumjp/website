/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/archived_site" : "",
  // i18n: { locales: ['en', 'ja'], defaultLocale: 'en', localeDetection: false },
  compiler: {
    emotion: true,
  },
  async redirects() {
    return [
      {
        source: "/ethtokyo2024",
        destination: "https://www.ethtokyo.com",
        permanent: true,
      },
      // {
      //   source: "/*",
      //   destination: "https://www.ethtokyo.com/",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
