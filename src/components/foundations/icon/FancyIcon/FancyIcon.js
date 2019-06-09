import React from 'react'
import PropTypes from "prop-types";

import { SVGElement } from '../../svg/SVGElement'
import { RawIcon } from '../RawIcon'

import { fancyIconBackgrounds as backgroundDefs } from './background-defs'
import { iconGradients, iconBackgroundColors  } from './FancyIcon.styles'
import * as Styled from './FancyIcon.styles'

/**
 * Component • FancyIcon
 *
 * @description Renders the selected icon with a background SVG shape and applies an approved gradient to the icon.
 *
 * @since 1.0.0
 */
export const FancyIcon = ({ name, size, bg, bgColor, gradient, ...others }) => (

	<Styled.FancyIcon gradient={gradient} bg={bg} {...others} >

		<RawIcon name={name} size={size} gradient={iconGradients[gradient]} />

		{/*
			Using our SVGElement, we are simply using the selected background path
			to render out our background SVG.
		 */
		}
		<Styled.Background bg={bg} bgColor={bgColor}>

			<SVGElement path={backgroundDefs[bg].path} viewBox={backgroundDefs[bg].viewBox} />

		</Styled.Background>

	</Styled.FancyIcon>

)

/**
 * ----------
 * Prop Types
 * ----------
 */
const IconGradients = Object.keys( iconGradients );
const IconBackgrounds = Object.keys( backgroundDefs );
const IconBackgroundColors = Object.keys( iconBackgroundColors );

FancyIcon.propTypes = {

	gradient: PropTypes.oneOf( IconGradients ),
	bg: PropTypes.oneOf( IconBackgrounds ),
	bgColor: PropTypes.oneOf( IconBackgroundColors ),

}

/**
 * -------------
 * Default Props
 * -------------
 */
FancyIcon.defaultProps = {

	gradient: 'default',
	size: '2xl',
	bg:  '1',
	bgColor: 'default',

}

export default FancyIcon
