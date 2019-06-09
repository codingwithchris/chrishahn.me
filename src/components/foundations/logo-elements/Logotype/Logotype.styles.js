import styled from 'styled-components'

import colors from '../../../../__tokens/colors'
import { availableLogotypeSizes } from '../../../../__tokens/logo-elements/_logotype'

/**
 * Component: Logotype
 *
 * This file holds all styles for this component
 *
 * @since 1.0.0
 */

 // Sizes are extracted from global tokens
export const logotypeSizes = {

	...availableLogotypeSizes

}

// Colors are extracted from global tokens
export const logotypeColors = {

	...colors.ui.logo

}

/**
 * ----------------
 * Component Styles
 * ----------------
 */

export const Logotype = styled.div`

	fill: ${props => logotypeColors[props.type][props.color]};
	height: ${props => logotypeSizes[props.size].height}px;
	width: ${props => logotypeSizes[props.size].width}px;

	/* Different words might need a different color */
	> svg > .logotypeLetters--creative{

		fill: ${ props => props.color === 'pink' ? logotypeColors.onLight.dark : 'inherit' };

	}

`;
