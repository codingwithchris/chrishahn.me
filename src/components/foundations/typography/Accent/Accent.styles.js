import styled from 'styled-components';

import typography from '../../../../__tokens/typography/_typography'
import colors from '../../../../__tokens/colors'

/**
 * Component: Accent
 *
 * This file holds all styles for our component
 *
 * @since 1.0.0
 */


export const accentColors = {

	dark: colors.ui.typography.dark,
	light: colors.ui.typography.light,

}

export const accentSizes = {

	s: typography.accentLight.Small,
    xs: typography.accentLight.XSmall,

}

export const Accent = styled.span`

	color: ${props => accentColors[props.color]};
	${ props => accentSizes[props.size] };
	margin: 0;

`;
