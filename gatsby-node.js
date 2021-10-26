require("dotenv").config()

const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: { pages },
  } = await graphql(`
    {
      pages: allGraphCmsPage(
        filter: { locale: { eq: ${process.env.LOCALE}_${process.env.CULTURE} }, stage: { eq: PUBLISHED } }
      ) {
        nodes {
          id
          slug
          updatedAt
          locale
        }
      }
    }
  `)

  pages.nodes.forEach(({ slug, updatedAt, locale }) => {
    createPage({
      path: `/${slug}`,
      component: path.resolve(`./src/templates/single.jsx`),
      context: {
        slug,
        updatedAt,
        locale,
      },
    })
  })
}
