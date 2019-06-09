import styled from 'styled-components'

import { availableLockupSizes } from '../../../../__tokens/logo-elements/_lockup';
import colors from '../../../../__tokens/colors'
import {Symbol} from '../Symbol/Symbol.styles'

/**
 * Component: Lockup
 *
 * This file holds all styles for this component
 *
 * @since 1.0.0
 */

// Sizes are extracted from global tokens
export const lockupSizes = {
	...availableLockupSizes
}

export const lockupColors = {
	...colors.ui.logo
}

/**
 * ----------------
 * Component Styles
 * ----------------
 */

export const Lockup = styled.div`

	display: flex;

	/**
	 * Context Style: We need to modify the space between elements depending on the Lockup size.
	 */
	> ${Symbol}{
		margin-right: ${props => lockupSizes[props.size].spaceBetweenLogoElements};
	}

`;
