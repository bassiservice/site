import React, { Component } from "react"
import { SEO } from "@pittica/gatsby-plugin-seo"

import MainNavBar from "../components/ui/nav/main"
import Footer from "../components/ui/footer"

import "../scss/layouts/_cornerstone-layout.scss"

export default class CornerstoneLayout extends Component {
  _mounted = false

  constructor(props) {
    super(props)

    this.state = { section: 1 }
    this.mainContainer = null
    this.setMainContainerRef = element => {
      this.mainContainer = element
    }
  }

  componentDidMount() {
    this._mounted = true

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      window.addEventListener("scroll", (e) => {
        if (this._mounted) {
          let found = false

          if (this.mainContainer) {
            let bounds = document.body.getBoundingClientRect()
            const position = this.mainContainer.offsetTop
            const top = position - bounds.top

            this.mainContainer.childNodes.forEach((element, i) => {
              if (top >= element.offsetTop && top < element.offsetTop + element.offsetHeight + position) {
                this.setState({ section: i + 1 })
                found = true
              }
            })
          }

          if (!found) {
            this.setState({ section: 1 })
          }
        }
      })
    }
  }

  componentWillUnmount() {
    this._mounted = false
  }

  render() {
    return (
      <div className="cornerstone-layout has-navbar-fixed-top">
        <SEO path={this.props.location.pathname} />
        <MainNavBar location={this.props.location} position={this.state.section} />
        <main ref={this.setMainContainerRef}>{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}
