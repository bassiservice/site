import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "../../scss/ui/_section.scss"

export default function Section({ children, dark }) {
  return (
    <section
      className={classNames({
        section: true,
        "is-dark": dark,
      })}
    >
      <div className="container">{children}</div>
    </section>
  )
}

Section.propTypes = {
  dark: PropTypes.bool,
}

Section.defaultProps = {
  dark: false,
}
