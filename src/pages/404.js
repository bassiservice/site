import React, { Component } from "react"

import CornestoneLayout from "../layouts/cornerstone"

export default class NotFoundPage extends Component {
  render() {
    return (
      <CornestoneLayout location={this.props.location.pathname}>
        <h1>NOT FOUND</h1>
      </CornestoneLayout>
    )
  }
}
