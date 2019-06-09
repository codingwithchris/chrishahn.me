import styled from 'styled-components';

import typography from '../../../../__tokens/typography/_typography'
import colors from '../../../../__tokens/colors'

/**
 * Component: Heading
 *
 * This file holds all styles for our component
 *
 * @since 1.0.0
 */

// Define heading sizes available to the component
export const headingSizes = {

	light: {

		xxxl: typography.headingLight.XXXLarge,
		xxl: typography.headingLight.XXLarge,
		xl: typography.headingLight.XLarge,
		l: typography.headingLight.Large,
		m: typography.headingLight.Medium,
		s: typography.headingLight.Small,

	},

	bold: {

		xxxl: typography.headingBold.XXXLarge,
		xxl: typography.headingBold.XXLarge,
		xl: typography.headingBold.XLarge,
		l: typography.headingBold.Large,
		m: typography.headingBold.Medium,
		s: typography.headingBold.Small,

	}

};

// Define colors we are allowed to use for this component
export const headingColors = {

	dark: colors.ui.typography.dark,
	light: colors.ui.typography.light,
	lightBlue: colors.ui.typography.lightBlue,
	mediumBlue: colors.ui.typography.mediumBlue,
	darkBlue: colors.ui.typography.darkBlue,
	purple: colors.ui.typography.purple,

};

/**
 * ----------------
 * Component Styles
 * ----------------
 */

export const Heading = styled.div`

	color: ${props => headingColors[props.color]};
	${ props => headingSizes[props.weight][props.size] };
	margin: 0;

`;
