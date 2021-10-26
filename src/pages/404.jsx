import React from "react"
import { Link } from "gatsby"

import Hero from "../components/ui/hero"
import Section from "../components/ui/section"
import SingleLayout from "../layouts/single-layout"

export default function NotFoundPage({ location }) {
  return (
    <SingleLayout
      location={location}
      fixedMenu={false}
      title="Errore 404"
      description="Pagina non trovata"
    >
      <Hero title="NOT FOUND" subtitle="Pagina non trovata" />
      <Section dark={true}>
        <div className="has-text-centered">
          <Link to="/" className="button">
            Torna alla home
          </Link>
        </div>
      </Section>
    </SingleLayout>
  )
}
