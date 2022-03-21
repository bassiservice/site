require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: process.env.SITE_TITLE,
    author: process.env.SITE_COMPANY,
    description: process.env.SITE_TITLE,
    locale: {
      language: process.env.LOCALE,
      culture: process.env.CULTURE,
    },
    siteUrl: process.env.SITE_URL,
    organization: {
      company: process.env.SITE_COMPANY,
      address: `Via Caduti Sul Lavoro, 12`,
      url: process.env.SITE_URL,
      logo: new URL("/logo.jpg", process.env.SITE_URL).href,
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
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/content/documents`,
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
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.SITE_TITLE,
        short_name: process.env.SITE_NAME,
        start_url: `/`,
        background_color: process.env.COLOR_BACKGROUND,
        theme_color: process.env.COLOR_PRIMARY,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/./",
        query: `
          {
            indexes: allSitePage(filter: {path: {eq: "/"}}) {
              nodes {
                path
              }
            }
            pages: allGraphCmsPage {
              nodes {
                slug
                updatedAt
                cornerstone
              }
            }
          }
        `,
        resolveSiteUrl: () => new URL("/", process.env.SITE_URL).href,
        resolvePages: ({ indexes, pages }) => {
          const items = []

          indexes.nodes.forEach(({ path }) => {
            items.push({
              path: new URL(path, process.env.SITE_URL).href,
              changefreq: "daily",
              priority: 1.0,
              lastmod: null,
            })
          })
          pages.nodes.forEach(({ slug, updatedAt, cornerstone }) => {
            items.push({
              path: new URL(`/${slug}`, process.env.SITE_URL).href,
              changefreq: "daily",
              priority: cornerstone ? 0.7 : 0.5,
              lastmod: updatedAt,
            })
          })

          return items
        },
        serialize: ({ path, changefreq, priority, lastmod }) => {
          return { url: path, changefreq, priority, lastmod }
        },
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
        locales: [`${process.env.LOCALE}_${process.env.CULTURE}`],
        fragmentsPath: "fragments",
        downloadLocalImages: true,
        stages: ["PUBLISHED"],
      },
    },
    {
      resolve: `@pittica/gatsby-plugin-seo`,
      options: {
        image: `/share.jpg`,
        socials: {
          facebook: {
            app: `1326198567495083`,
            page: `bassiservice`,
          },
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-iubenda-cookie-footer`,
      options: {
        iubendaOptions: {
          consentOnContinuedBrowsing: false,
          whitelabel: false,
          lang: "it",
          siteId: 1927637,
          cookiePolicyId: 24429738,
          cookiePolicyUrl: "https://bassiservice.it/cookies",
          cookiePolicyInOtherWindow: true,
          banner: {
            acceptButtonDisplay: true,
            customizeButtonDisplay: false,
            position: "float-bottom-center",
            brandBackgroundColor: process.env.COLOR_BACKGROUND,
            brandTextColor: process.env.COLOR_BACKGROUND,
            acceptButtonColor: process.env.COLOR_PRIMARY,
            acceptButtonCaptionColor: process.env.COLOR_SECONDARY,
            customizeButtonColor: process.env.COLOR_BACKGROUND,
            customizeButtonCaptionColor: process.env.COLOR_SECONDARY,
            rejectButtonColor: process.env.COLOR_PRIMARY,
            rejectButtonCaptionColor: process.env.COLOR_SECONDARY,
            textColor: process.env.COLOR_SECONDARY,
            backgroundColor: process.env.COLOR_BACKGROUND,
            logo: "https://bassiservice.it/logo-banner-negative.png",
            closeButtonDisplay: false,
          },
        },
      },
    },
  ],
}
