import React, { Component } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import "../../scss/ui/_logo.scss"

export default class Logo extends Component {
  render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 640 480"
        className="logo"
      >
        <path
          className={classNames({ selected: this.props.selected === 6 })}
          shapeRendering="geometricPrecision"
          d="M150.6,209.9h-128C10.1,209.9,0,199.7,0,187.3V59.3c0-12.5,10.1-22.6,22.6-22.6h128c12.5,0,22.6,10.1,22.6,22.6 v127.9C173.2,199.7,163,209.9,150.6,209.9 M22.6,41.9c-9.6,0-17.5,7.8-17.5,17.5v127.9c0,9.6,7.8,17.5,17.5,17.5h128 c9.6,0,17.5-7.8,17.5-17.5V59.3c0-9.6-7.8-17.5-17.5-17.5H22.6z"
        />
        <path
          className={classNames({ selected: this.props.selected === 5 })}
          shapeRendering="geometricPrecision"
          d="M150.6,443.3h-128C10.1,443.3,0,433.1,0,420.7V292.7c0-12.5,10.1-22.6,22.6-22.6h128 c12.5,0,22.6,10.1,22.6,22.6v127.9C173.2,433.1,163,443.3,150.6,443.3 M22.6,275.3c-9.6,0-17.5,7.8-17.5,17.5v127.9 c0,9.6,7.8,17.5,17.5,17.5h128c9.6,0,17.5-7.8,17.5-17.5V292.7c0-9.6-7.8-17.5-17.5-17.5H22.6z"
        />
        <path
          className={classNames({ selected: this.props.selected === 4 })}
          shapeRendering="geometricPrecision"
          d="M384,443.3H256c-12.5,0-22.6-10.1-22.6-22.6V292.7c0-12.5,10.1-22.6,22.6-22.6h128c12.5,0,22.6,10.1,22.6,22.6 v127.9C406.6,433.1,396.5,443.3,384,443.3 M256,275.3c-9.6,0-17.5,7.8-17.5,17.5v127.9c0,9.6,7.8,17.5,17.5,17.5h128 c9.6,0,17.5-7.8,17.5-17.5V292.7c0-9.6-7.8-17.5-17.5-17.5H256z"
        />
        <path
          className={classNames({ selected: this.props.selected === 3 })}
          shapeRendering="geometricPrecision"
          d="M384,209.9H256c-12.5,0-22.6-10.1-22.6-22.6V59.3c0-12.5,10.1-22.6,22.6-22.6h128c12.5,0,22.6,10.1,22.6,22.6 v127.9C406.6,199.7,396.5,209.9,384,209.9 M256,41.9c-9.6,0-17.5,7.8-17.5,17.5v127.9c0,9.6,7.8,17.5,17.5,17.5h128 c9.6,0,17.5-7.8,17.5-17.5V59.3c0-9.6-7.8-17.5-17.5-17.5H256z"
        />
        <path
          className={classNames({ selected: this.props.selected === 2 })}
          shapeRendering="geometricPrecision"
          d="M617.4,443.3h-128c-12.5,0-22.6-10.1-22.6-22.6V292.7c0-12.5,10.1-22.6,22.6-22.6h128 c12.5,0,22.6,10.1,22.6,22.6v127.9C640,433.1,629.9,443.3,617.4,443.3 M489.4,275.3c-9.6,0-17.5,7.8-17.5,17.5v127.9 c0,9.6,7.8,17.5,17.5,17.5h128c9.6,0,17.5-7.8,17.5-17.5V292.7c0-9.6-7.8-17.5-17.5-17.5H489.4z"
        />
        <path
          className={classNames({ selected: this.props.selected === 1 })}
          shapeRendering="geometricPrecision"
          d="M617.4,209.9h-128c-12.5,0-22.6-10.1-22.6-22.6V59.3c0-12.5,10.1-22.6,22.6-22.6h128 c12.5,0,22.6,10.1,22.6,22.6v127.9C640,199.7,629.9,209.9,617.4,209.9 M489.4,41.9c-9.6,0-17.5,7.8-17.5,17.5v127.9 c0,9.6,7.8,17.5,17.5,17.5h128c9.6,0,17.5-7.8,17.5-17.5V59.3c0-9.6-7.8-17.5-17.5-17.5H489.4z"
        />
      </svg>
    )
  }
}

Logo.propTypes = {
  selected: PropTypes.number
}

Logo.defaultProps = {
  selected: 1
}
