import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { SEO } from "@pittica/gatsby-plugin-seo"

import Hero from "../../components/ui/hero"
import Footer from "../../components/ui/footer"
import MainNavBar from "../../components/ui/nav/main"

import "../../scss/layouts/page/_page.scss"

export default ({ children, location, metadata }) => (
  <>
    <SEO
      title={metadata.title}
      path={location.pathname}
    />
    <MainNavBar location={location} fixed={false} />
    <header className="header">
      <Hero
        title={metadata.title}
        subtitle={metadata.description}
        dark={true}
      />
    </header>
    <main className="page-main">
      <div className="container">
        <MDXProvider>{children}</MDXProvider>
      </div>
    </main>
    <Footer dark={true} />
  </>
)
