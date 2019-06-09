import React from 'react'
import PropTypes from 'prop-types'

import { LinearGradient } from './LinearGradient'
import * as Styled from './SVGElement.styles'

/**
 * Component: Icon
 *
 * @description Displays a selected icon at the specified size and color.
 * @since 1.0.0
 */

const SVGElement = ({ path, viewBox, gradient, ...others }) => (

	<Styled.SVGElement path={path} viewBox={viewBox} {...others}>

		{
			// Render a gradient if one is set. Otherwise, do nothing
			gradient != null
			? <LinearGradient gradient={gradient} />
			: ''
		}

		{path}

	</Styled.SVGElement>

)

/**
 * ----------
 * Prop Types
 * ----------
 */
SVGElement.propTypes = {

	path: PropTypes.node.isRequired,
	viewBox: PropTypes.string.isRequired

};


/**
 * -------------
 * Default Props
 * -------------
 */

 export default SVGElement
