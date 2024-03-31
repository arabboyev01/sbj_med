/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["uz","en", "ru" ],
    defaultLocale: "uz",
     localeDetection: false
  },
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.sbjmedical.uz',
        },
      ],
    },
};

export default nextConfig;
