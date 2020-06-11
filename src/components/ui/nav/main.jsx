import React, { Component } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import PropTypes from "prop-types"

import Logo from "../logo"
import NavLink from "./nav-link"

import "../../../scss/ui/nav/_main.scss"

export default class MainNavigation extends Component {
  state = {
    active: false
  }

  handleClick = (e) => {
    e.preventDefault()

    this.setState(state => ({ active: !state.active }))

    return false
  }

  render() {
    const { location, position, fixed } = this.props

    return (
      <nav
        className={classNames({
          navbar: true,
          "is-fixed-top": fixed
        })}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <Logo selected={position} />
          </Link>
          <Link
            to="/"
            onClick={this.handleClick}
            role="button"
            className={classNames({
              "navbar-burger": true,
              "burger": true,
              "is-active": this.state.active
            })}
            aria-label="menu"
            aria-expanded={this.state.active ? "true" : "false"}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
        <div className={classNames({
          "navbar-menu": true,
          "is-active": this.state.active
        })}>
          <div className="navbar-start">
            <NavLink location={location} to="/about">
              Chi Siamo
            </NavLink>
            <NavLink location={location} to="/services">
              Servizi
            </NavLink>
            <NavLink location={location} to="/history">
              Storia
            </NavLink>
            <NavLink location={location} to="/mission">
              Mission
            </NavLink>
            <NavLink location={location} to="/values">
              Valori
            </NavLink>
            <NavLink location={location} to="/contact">
              Contatti
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

MainNavigation.propTypes = {
  fixed: PropTypes.bool
}

MainNavigation.defaultProps = {
  fixed: true
}
