import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "../../scss/ui/_hero.scss"

export default function Hero({ title, subtitle, dark, centered }) {
  return (
    <section
      className={classNames({
        hero: true,
        "is-dark": dark,
      })}
    >
      <div className="hero-body">
        <div className="container">
          {title && (
            <h1
              className={classNames({
                title: true,
                "has-text-centered": centered,
              })}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <h2
              className={classNames({
                subtitle: true,
                "has-text-centered": centered,
              })}
            >
              {subtitle}
            </h2>
          )}
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  centered: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  dark: PropTypes.bool,
}

Hero.defaultProps = {
  dark: false,
  centered: true,
}
