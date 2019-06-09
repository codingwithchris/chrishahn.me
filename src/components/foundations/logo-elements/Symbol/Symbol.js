import React from 'react'
import PropTypes from 'prop-types'

import { symbolPaths } from './Symbol.manifest'
import { symbolColors, symbolSizes } from './Symbol.styles'
import * as Styled from './Symbol.styles'

/**
 * Component: Symbol
 *
 * @description Displays various versions of our brand symbol at various sizes.
 * @since 1.0.0
 */

const Symbol = ({ type, size, color }) => {

	return (

		<Styled.Symbol type={type} color={color} size={size}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${symbolSizes[size].width} ${symbolSizes[size].height}`} preserveAspectRatio="xMidYMid">
				{symbolPaths[type][size]}
			</svg>
		</Styled.Symbol>

	)

}

/**
 * ----------
 * Prop Types
 * ----------
 */

const SymbolSizes = Object.keys( symbolSizes );

const SymbolColorsOnLight = Object.keys( symbolColors.onLight );
const SymbolColorsOnDark = Object.keys( symbolColors.onDark );

Symbol.propTypes = {

	/** Type of Symbol to use: Options are 'onLight', 'onDark' based on what kind of background it is appearing against **/
	type: PropTypes.oneOf( ['onDark','onLight'] ),

	/** Size of the Symbol. Options are 'xs', s', 'm', 'l', 'xl' */
	size: PropTypes.oneOf( SymbolSizes ),

	/** Color to use for Symbol: Options are [ onLight: dark, pink, purple, lightBlue, darkBlue ][ onDark: light, purple, lightBlue, darkBlue ] */
	color: PropTypes.oneOf( SymbolColorsOnLight, SymbolColorsOnDark ),

}

/**
 * -------------
 * Default Props
 * -------------
 */

Symbol.defaultProps = {

	type: 'onLight',
	size: 'l',
	color: 'pink',

}

export default Symbol
