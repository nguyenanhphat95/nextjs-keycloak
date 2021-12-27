/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
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
    SENTRY_DSN_CLIENT: process.env.SENTRY_DSN,
  },
};
const SentryWebpackPluginOptions = {
  silent: true,
};
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
