require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Lewkan Home Page",
    description:
      "My personal website with blog and projects",
    author: "Alexey Smirnov",
    siteUrl: "https://lewkan.fun/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgo: true,
        svgoConfig: {
          plugins: [
            { removeViewBox: false }, // remove viewBox when possible (default)
          ],
        },
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "lewkun.fun",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/speaker.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
