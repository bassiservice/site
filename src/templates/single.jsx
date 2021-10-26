import React from "react"
import { graphql } from "gatsby"

import Hero from "../components/ui/hero"
import SingleLayout from "../layouts/single-layout"

export default function Single({ data: { post }, location }) {
  return (
    <SingleLayout
      location={location}
      title={post.title}
      description={post.excerpt}
      footerDark={true}
      fixedMenu={false}
    >
      <header className="header">
        <Hero
          title={post.title}
          subtitle={post.description}
          dark={post.cornerstone}
        />
      </header>
      <main>
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </main>
    </SingleLayout>
  )
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!, $locale: GraphCMS_Locale!) {
    post: graphCmsPage(
      slug: { eq: $slug }
      stage: { eq: PUBLISHED }
      locale: { eq: $locale }
    ) {
      id
      title
      description
      excerpt
      cornerstone
      content {
        html
      }
    }
  }
`
