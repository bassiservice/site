import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"

import Section from "./section"

import "../../scss/ui/_section-block.scss"

export default function SectionBlock({
  children,
  location,
  title,
  dark,
  side,
}) {
  return (
    <Section dark={dark}>
      {title && <h1 className="title">{title}</h1>}
      <div className="columns">
        {side && dark && <div className="column">{side}</div>}
        <div
          className={classNames({
            column: true,
            "is-half": true,
            "is-offset-half": dark && !side,
          })}
        >
          <div className="page-section">{children}</div>
          {location && (
            <div
              className={classNames({
                "has-text-right": !dark,
              })}
            >
              <Link to={location} className="button readmore">
                Leggi di più...
              </Link>
            </div>
          )}
        </div>
        {side && !dark && <div className="column">{side}</div>}
      </div>
    </Section>
  )
}

SectionBlock.propTypes = {
  dark: PropTypes.bool,
  title: PropTypes.string,
}

SectionBlock.defaultProps = {
  dark: false,
}
