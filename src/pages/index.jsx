import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import CanvasWrapper from "../components/ui/canvas-wrapper"
import SectionBlock from "../components/ui/section-block"
import SingleLayout from "../layouts/single-layout"

import { Ledwall, Cube } from "@pittica/gatsby-plugin-canvas-animations"

export default function IndexPage({
  data: {
    site: {
      siteMetadata: { theme },
    },
    about,
    services,
    history,
    mission,
    values,
    contact,
  },
  location,
}) {
  const [section, setSection] = useState(1)
  const [container, setContainer] = useState(null)
  const getSection = () => {
    let found = false

    if (container) {
      const bounds = document.body.getBoundingClientRect()
      const position = container.offsetTop
      const top = position - bounds.top

      container.childNodes.forEach((element, i) => {
        if (
          top >= element.offsetTop &&
          top < element.offsetTop + element.offsetHeight + position
        ) {
          setSection(i + 1)
          found = true
        }
      })
    }

    if (!found) {
      setSection(1)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      window.addEventListener("scroll", getSection)
      return () => window.removeEventListener("scroll", getSection)
    }
  })

  return (
    <SingleLayout
      location={location}
      footerDark={false}
      fixedMenu={true}
      position={section}
    >
      <div ref={element => setContainer(element)}>
        <CanvasWrapper>
          <Ledwall
            background={theme.background}
            primary={theme.primary}
            secondary={theme.secondary}
          />
          <SectionBlock location={`/${about.slug}`} title={about.title}>
            {about.excerpt}
          </SectionBlock>
        </CanvasWrapper>
        <SectionBlock
          dark={true}
          location={`/${services.slug}`}
          title={services.title}
        >
          {services.excerpt}
        </SectionBlock>
        <CanvasWrapper>
          <Ledwall
            background={theme.background}
            primary={theme.primary}
            secondary={theme.secondary}
            random={true}
            width={32}
            height={48}
          />
          <SectionBlock location={`/${history.slug}`} title={history.title}>
            {history.excerpt}
          </SectionBlock>
        </CanvasWrapper>
        <SectionBlock
          dark={true}
          location={`/${mission.slug}`}
          title={mission.title}
          side={
            <div className="ui-effects">
              <Cube color={theme.primary} background={theme.background} />
            </div>
          }
        >
          {mission.excerpt}
        </SectionBlock>
        <CanvasWrapper>
          <Ledwall
            background={theme.background}
            primary={theme.primary}
            secondary={theme.secondary}
            width={12}
            height={12}
          />
          <SectionBlock location={`/${values.slug}`} title={values.title}>
            {values.excerpt}
          </SectionBlock>
        </CanvasWrapper>
        <SectionBlock
          dark={true}
          location={`/${contact.slug}`}
          title={contact.title}
        >
          {contact.excerpt}
        </SectionBlock>
      </div>
    </SingleLayout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        theme {
          background
          primary
          secondary
        }
      }
    }
    about: graphCmsPage(slug: { eq: "about" }) {
      slug
      title
      excerpt
    }
    services: graphCmsPage(slug: { eq: "services" }) {
      slug
      title
      excerpt
    }
    history: graphCmsPage(slug: { eq: "history" }) {
      slug
      title
      excerpt
    }
    mission: graphCmsPage(slug: { eq: "mission" }) {
      slug
      title
      excerpt
    }
    values: graphCmsPage(slug: { eq: "values" }) {
      slug
      title
      excerpt
    }
    contact: graphCmsPage(slug: { eq: "contact" }) {
      slug
      title
      excerpt
    }
  }
`
