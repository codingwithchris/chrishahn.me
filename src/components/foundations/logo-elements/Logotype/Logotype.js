import React from 'react'
import PropTypes from 'prop-types'

import { logotypePaths } from './Logotype.manifest'
import { logotypeColors, logotypeSizes } from './Logotype.styles'
import * as Styled from './Logotype.styles'

/**
 * Component: Logotype
 *
 * @description Displays just the logotype of our brand logo lockup.
 * @since 1.0.0
 */

const Logotype = ({ type, size, color }) => (

	<Styled.Logotype type={type} color={color} size={size}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${logotypeSizes[size].width} ${logotypeSizes[size].height}`} preserveAspectRatio="xMidYMid">
			{logotypePaths[size]}
		</svg>
	</Styled.Logotype>

)


/**
 * ----------
 * Prop Types
 * ----------
 */

const LogotypeSizes = Object.keys( logotypeSizes );

const LogotypeColorsOnLight = Object.keys( logotypeColors.onLight );
const LogotypeColorsOnDark = Object.keys( logotypeColors.onDark );

Logotype.propTypes = {

	/** Type of Logotype to use: Options are 'onLight', 'onDark' based on what kind of background it is appearing against **/
	type: PropTypes.oneOf( ['onDark','onLight'] ),

	/** Sizes available for Logotype: Options are 'm', 'l', 'xl' */
	size: PropTypes.oneOf( LogotypeSizes ),

	/** Color to use for Logotype: Options are [ onLight: dark, pink, purple, lightBlue, darkBlue ][ onDark: light, purple, lightBlue, darkBlue ] */
	color: PropTypes.oneOf( LogotypeColorsOnLight, LogotypeColorsOnDark ),

}

/**
 * -------------
 * Default Props
 * -------------
 */

Logotype.defaultProps = {

	type: 'onLight',
	size: 'm',
	color: 'pink',

}

export default Logotype
