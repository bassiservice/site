import React, { Component } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "../../scss/ui/_section.scss"

export default class Section extends Component {
  render() {
    return (
      <section
        className={classNames({
          section: true,
          "is-dark": this.props.dark,
        })}
      >
        <div className="container">{this.props.children}</div>
      </section>
    )
  }
}

Section.propTypes = {
  dark: PropTypes.bool,
}

Section.defaultProps = {
  dark: false,
}
