import styled from 'styled-components'

import { neutralColors } from '../../../../__tokens/colors/_palette';
import { gradients } from '../../../../__tokens/_gradients';
import { zIndex } from '../../../../__tokens/_z-index';
import { RawIcon } from '../RawIcon/RawIcon.styles'
import { fancyIconBackgrounds as backgroundDefs } from './background-defs'

/**
 * Define available gradients
 */
export const iconGradients = {

	default: {

		id: gradients.defs.g1.id,
		angles: gradients.angles.topRight.svg,
		colorStops: gradients.defs.g1.svgStops,
		fallback: gradients.defs.g1.fallback

	}

}

/**
 * Define acceptable background colors
 */
export const iconBackgroundColors = {

	default: neutralColors.lavastone.xlight

}

/**
 * Define the background styles
 */
export const Background = styled.div`

	height: 100%;
	position: absolute;
	width: 100%;
	z-index: ${ zIndex.base };

	path {
		fill: ${ props => iconBackgroundColors[props.bgColor] };
	}

`;

/**
 * Styles for our FancyIcon
 */
export const FancyIcon = styled.div`

	align-items: center;
	display: inline-flex;
	height: ${ props => backgroundDefs[props.bg].height }px;
	justify-content: center;
	position: relative;
	width: ${ props => backgroundDefs[props.bg].width }px;

	/* Styles for the icon itself */
	${RawIcon}{

		z-index: ${zIndex.baseAbove};

		path {
			fill: url( #${ props => iconGradients[ props.gradient ].id } );
		}

	}

`;
