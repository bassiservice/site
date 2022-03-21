import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar } from "@pittica/gatsby-plugin-navigation"

import Logo from "../ui/logo"

import "../../scss/nav/_top-menu.scss"

export default function TopMenu({ location, position, fixed }) {
  const {
    pages: { nodes },
  } = useStaticQuery(graphql`
    query TopMenu {
      pages: allGraphCmsPage(filter: { menu: { eq: true } }) {
        nodes {
          title
          slug
        }
      }
    }
  `)

  return (
    <Navbar
      className={classNames("top-menu", { "is-fixed-top": fixed })}
      location={location}
      startItems={nodes.map(({ slug, title }) => ({
        to: `/${slug}`,
        label: title,
      }))}
    >
      <Link to="/" className="navbar-logo">
        <Logo selected={position} />
      </Link>
    </Navbar>
  )
}

TopMenu.propTypes = {
  fixed: PropTypes.bool,
}

TopMenu.defaultProps = {
  fixed: true,
}
