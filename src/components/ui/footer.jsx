import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import classNames from "classnames"

import "../../scss/ui/_footer.scss"

import logoPositive from "../../images/logo-positive.svg"
import logoNegative from "../../images/logo-negative.svg"

export default function Footer({ dark }) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            organization {
              company
              address
              zipCode
              city
              province
              country
              email
              taxId
              vatId
              registryId
            }
          }
        }
        file: file(name: { eq: "124-04082017" }, ext: { eq: ".pdf" }) {
          publicURL
        }
      }
    `
  )

  const {
    company,
    address,
    zipCode,
    city,
    province,
    country,
    email,
    taxId,
    vatId,
    registryId,
  } = site.siteMetadata.organization
  let tax = ""

  if (taxId === vatId) {
    tax = <p>Codice Fiscale / Partita IVA {vatId}</p>
  } else {
    tax = (
      <>
        <p>Codice Fiscale {taxId}</p>
        <p>Partita IVA {vatId}</p>
      </>
    )
  }

  return (
    <footer
      className={classNames({
        footer: true,
        "is-dark": dark,
      })}
    >
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="logo-container">
              <img
                src={dark ? logoNegative : logoPositive}
                alt={company}
                className="logo"
              />
            </div>
          </div>
          <div className="column">
            <h4>{company}</h4>
            <div className="block">
              <p>{address}</p>
              <p>
                {zipCode} {city} ({province})
              </p>
              <p>{country}</p>
            </div>
            <div className="block">
              {tax}
              {registryId && <p>REA {registryId}</p>}
            </div>
            <div className="block">
              <p>
                <a href={email} title={email}>
                  {email}
                </a>
              </p>
            </div>
          </div>
          <div className="column">
            <ul>
              <li>
                <a href={file.publicURL}>
                  Obblighi informativi ai sensi della Legge n. 124 del
                  04/08/2017
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          © {new Date().getFullYear()}, {company} -{" "}
          <Link to="/privacy">Politica sulla Privacy</Link> -{" "}
          <Link to="/cookies">Politica sui Cookie</Link>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  dark: PropTypes.bool,
}

Footer.defaultProps = {
  dark: false,
}
