require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: process.env.SITE_NAME,
    author: process.env.SITE_COMPANY,
    description: process.env.SITE_NAME,
    locale: {
      language: `it`,
      culture: `IT`,
    },
    siteUrl: `https://bassiservice.it/`,
    organization: {
      company: process.env.SITE_COMPANY,
      address: `Via Caduti Sul Lavoro, 12`,
      url: `https://bassiservice.it/`,
      logo: `https://bassiservice.it/logo.png`,
      zipCode: `48026`,
      city: `Russi`,
      province: `RA`,
      country: `Italia`,
      email: `info@bassiservice.it`,
      taxId: `BSSMTT90M07E730A`,
      vatId: `02471950390`,
      registryId: ``,
    },
    theme: {
      background: process.env.COLOR_BACKGROUND,
      primary: process.env.COLOR_PRIMARY,
      secondary: process.env.COLOR_SECONDARY,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/page.jsx")
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168639833-1`,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.SITE_NAME,
        short_name: process.env.SITE_NAME,
        start_url: `/`,
        background_color: process.env.COLOR_BACKGROUND,
        theme_color: process.env.COLOR_PRIMARY,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    {
      resolve: `@pittica/gatsby-plugin-seo`,
      options: {
        image: `/share.jpg`,
        socials: {
          facebook: {
            app: `1326198567495083`
          }
        }
      },
    },
    `gatsby-plugin-offline`,
  ],
}
