import styled from 'styled-components'

import { availableIconSizes } from '../../../../__tokens/svg/_icons';

/**
 * Component: Icon
 *
 * This file holds all styles for our this component
 *
 * @since 1.0.0
 */

// Sizes are extracted from global tokens
export const globalIconSizes = {
	...availableIconSizes
}

export const RawIcon = styled.i`

	display: inline-block;
	line-height: 0;

	height: ${ props => props.size }px;
	width: ${ props => props.size }px;

`;
