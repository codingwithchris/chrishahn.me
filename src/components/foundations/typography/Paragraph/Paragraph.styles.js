import styled from 'styled-components';

import typography from '../../../../__tokens/typography/_typography'
import colors from '../../../../__tokens/colors'

export const paragraphColors = {

	dark: colors.ui.typography.dark,
	light: colors.ui.typography.light,

}

export const paragraphSizes = {

	l: typography.paragraphRegular.Large,
	m: typography.paragraphRegular.Medium,
	s: typography.paragraphRegular.Small,
	xs: typography.paragraphRegular.XSmall,

}

export const Paragraph = styled.p`

	color: ${props => paragraphColors[props.color]};
	${ props => paragraphSizes[props.size] };
	margin: 0;

`;
