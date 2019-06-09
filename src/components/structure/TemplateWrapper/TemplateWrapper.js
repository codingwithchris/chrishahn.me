/**
 * TemplateWrapper component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Header } from '../Header'
import { Footer } from '../Footer'

const TemplateWrapper = ({ children, type = 'default' }) => (

  <div className={`f-site t-${type}`}>

    <Header />

		<main className="f-main">
			{children}
		</main>

    <Footer />

  </div>

)

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TemplateWrapper
