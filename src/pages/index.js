import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import About from "../../content/pages/about"
import History from "../../content/pages/history"
import Services from "../../content/pages/services"
import Mission from "../../content/pages/mission"
import Values from "../../content/pages/values"
import Contact from "../../content/pages/contact"

import CornestoneLayout from "../layouts/cornerstone"
import CanvasWrapper from "../components/ui/canvas-wrapper"

import { LedwallCanvas, CubeCanvas } from "@pittica/gatsby-plugin-canvas-animations"

const IndexPage = ({ location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            theme {
              background
              primary
              secondary
            }
          }
        }
      }
    `
  )

  return (
    <CornestoneLayout location={location.pathname}>
      <CanvasWrapper>
        <LedwallCanvas
          background={site.siteMetadata.theme.background}
          primary={site.siteMetadata.theme.primary}
          secondary={site.siteMetadata.theme.secondary}
        />
        <About section={true} location="/about" />
      </CanvasWrapper>
      <Services dark={true} section={true} location="/services" />
      <CanvasWrapper>
        <LedwallCanvas
          background={site.siteMetadata.theme.background}
          primary={site.siteMetadata.theme.primary}
          secondary={site.siteMetadata.theme.secondary}
          random={true}
          width={32}
          height={48}
        />
        <History section={true} location="/history" />
      </CanvasWrapper>
      <Mission dark={true} section={true} location="/mission" side={(
        <div className="ui-effects">
          <CubeCanvas color={site.siteMetadata.theme.primary} background={site.siteMetadata.theme.background} />
        </div>
      )} />
      <CanvasWrapper>
        <LedwallCanvas
          background={site.siteMetadata.theme.background}
          primary={site.siteMetadata.theme.primary}
          secondary={site.siteMetadata.theme.secondary}
          width={12}
          height={12}
        />
        <Values section={true} location="/values" />
      </CanvasWrapper>
      <Contact section={true} dark={true} location="/contact" />
    </CornestoneLayout>
  )
}

export default IndexPage
