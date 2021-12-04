/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  // Remove styled-component .babelrc
  // Opted out of SWC feedback #30174 in NextJS github
  // https://github.com/vercel/next.js/discussions/30174
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
