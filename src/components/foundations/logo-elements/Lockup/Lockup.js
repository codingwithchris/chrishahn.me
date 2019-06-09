import React from 'react'
import PropTypes from 'prop-types'

import { lockupColors, lockupSizes } from './Lockup.styles';
import * as Styled from './Lockup.styles';

import { Symbol } from '../Symbol';
import { Logotype } from '../Logotype';

/**
 * Component: Lockup
 *
 * @description Displays a lockup of our brand logo ( symbol + logotype )
 * @uses Symbol  component
 * @uses Logotype component
 * @since 1.0.0
 */

const Lockup = ({ type, size, color }) => (

	<Styled.Lockup type={type} size={size} color={color}>

		<Symbol type={type} size={size} color={color} />
		<Logotype type={type} size={size} color={color} />

	</Styled.Lockup>

)

/**
 * ----------
 * Prop Types
 * ----------
 */
const LockupSizes = Object.keys( lockupSizes );

const LockupColorsOnLight = Object.keys( lockupColors.onLight );
const LockupColorsOnDark = Object.keys( lockupColors.onDark );

Lockup.propTypes = {

	/** Type of Lockup to use: Options are 'onLight', 'onDark' based on what kind of background it is appearing against **/
	type: PropTypes.oneOf( ['onDark','onLight'] ),

	/** Size of the Lockup. Options are 'm', 'l', 'xl' */
	size: PropTypes.oneOf( LockupSizes ),

	/** Color to use for Lockup: Options are [ onLight: dark, pink, purple, lightBlue, darkBlue ][ onDark: light, purple, lightBlue, darkBlue ] */
	color: PropTypes.oneOf( LockupColorsOnLight, LockupColorsOnDark ),

}

/**
 * -------------
 * Default Props
 * -------------
 */

Lockup.defaultProps = {

	type: 'onLight',
	size: 'l',
	color: 'pink',

}

export default Lockup
