import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Seo } from "@pittica/gatsby-plugin-seo"

import TopMenu from "../components/nav/top-menu"
import Footer from "../components/ui/footer"

import "../scss/layouts/_single-layout.scss"

export default function SingleLayout({
  children,
  location,
  title,
  description,
  footerDark,
  fixedMenu,
  position,
}) {
  return (
    <div
      className={classNames("single-layout", {
        "has-navbar-fixed-top": fixedMenu,
      })}
    >
      <Seo
        path={location.pathname}
        image={null}
        isBlogPost={false}
        title={title}
        description={description}
      />
      <TopMenu location={location} fixed={fixedMenu} position={position} />
      {children}
      <Footer dark={footerDark} />
    </div>
  )
}

SingleLayout.propTypes = {
  fixedMenu: PropTypes.bool,
  footerDark: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
  location: PropTypes.object,
  position: PropTypes.any,
}

SingleLayout.defaultProps = {
  fixedMenu: false,
  footerDark: true,
}
