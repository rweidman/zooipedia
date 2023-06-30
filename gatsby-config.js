require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: "Zoo-I-Pedia",
    description: "Information on animals, from small to large.",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
  ],
};
