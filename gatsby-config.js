const tw = require('tailwindcss/defaultTheme');

module.exports = {
  siteMetadata: {
    title: `Trivia Questions`,
    description: ``,
    author: `@luke_bennett_`,
    siteUrl: ``,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwindcss`,
        short_name: `starter`,
        start_url: `/`,
        background_color: tw.colors.white,
        theme_color: tw.colors.blue[600],
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.woff': ['Cache-Control:  max-age=31536000'],
          '/*.woff2': ['Cache-Control:  max-age=31536000'],
          '/*.png': ['Cache-Control:  max-age=31536000'],
          '/*.svg': ['Cache-Control:  max-age=31536000'],
        },
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
