import React from 'react'
import PropTypes from "prop-types";

import { RawIcon } from '../RawIcon'

import { iconColors } from './SimpleIcon.styles'
import * as Styled from './SimpleIcon.styles'

/**
 * Component • SimpleIcon
 *
* @description Renders a selected icon with color styles applied
 *
 * @since 1.0.0
 */
export const SimpleIcon = ({ name, size, color, colorTone, ...others}) => (

	<Styled.SimpleIcon color={color} colorTone={colorTone} {...others} >

		<RawIcon name={name} size={size} />

	</Styled.SimpleIcon>

)

/**
 * -------------
 * Prop Types
 * -------------
 */
const IconColors = Object.keys( iconColors );
const IconColorTones = [ 'base', 'light', 'dark', 'vibrant', 'xdark', 'xlight' ];

SimpleIcon.propTypes = {

	// TODO: Require proper colors from palette - throw error and fall back if a non existent color or tone is requested
	color: PropTypes.oneOf( IconColors ).isRequired,

	colorTone: PropTypes.oneOf( IconColorTones ).isRequired,

}

/**
 * -------------
 * Default Props
 * -------------
 */
SimpleIcon.defaultProps = {

	color: 'lavastone',
	colorTone: 'base',
	size: 'l',

}

export default SimpleIcon
