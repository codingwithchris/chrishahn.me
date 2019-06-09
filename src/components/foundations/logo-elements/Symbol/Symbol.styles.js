import styled from 'styled-components'

import colors from '../../../../__tokens/colors'
import { availableSymbolSizes } from '../../../../__tokens/logo-elements/_symbol'

/**
 * Component: Symbol
 *
 * This file holds all styles for this component
 *
 * @since 1.0.0
 */

// Colors are extracted from global tokens
export const symbolColors = {
	...colors.ui.logo
}

// Sizes are extracted from global tokens
export const symbolSizes = {
	...availableSymbolSizes
}

/**
 * ----------------
 * Component Styles
 * ----------------
 */

export const Symbol= styled.div`

	fill: ${props => symbolColors[props.type][props.color]};
	height: ${props => symbolSizes[props.size].height}px;
	width: ${props => symbolSizes[props.size].width}px;

`;
