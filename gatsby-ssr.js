import React from "react"

export { wrapRootElement } from "./gatsby-browser"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({
    itemScope: true,
    itemType: "http://schema.org/WebPage",
  })

  const preconnect = [
    "https://www.gstatic.com",
    "https://www.google.com",
    "https://www.google-analytics.com",
  ]

  setHeadComponents(
    preconnect.map(domain => (
      <link
        key={domain}
        href={domain}
        rel="preconnect"
        crossOrigin="anonymous"
      />
    ))
  )
}
