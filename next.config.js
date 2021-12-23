/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
    localeDetection: false,
  },
  env: {
    API_DOMAIN_CLIENT: process.env.API_DOMAIN,
  },
};
