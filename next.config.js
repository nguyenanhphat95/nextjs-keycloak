/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
    localeDetection: false,
  },
  env: {
    API_DOMAIN_CLIENT: process.env.API_DOMAIN,
    SIGNATURE_CLIENT: process.env.SIGNATURE,
    PARTNER_ID_CLIENT: process.env.PARTNER_ID,
    GRANT_TYPE_CLIENT: process.env.GRANT_TYPE,
    CLIENT_SECRET_CLIENT: process.env.CLIENT_SECRET,
    PORT: process.env.PORT,
  },
};
