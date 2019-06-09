import styled from 'styled-components'

import { coreColors, neutralColors, accentColors } from '../../../../__tokens/colors/_palette';
import { RawIcon } from '../RawIcon/RawIcon.styles'

export const iconColors = {
	...coreColors,
	...neutralColors,
	...accentColors,
}

export const SimpleIcon = styled.div`

	display: inline-block;
	line-height: 0;

	${RawIcon} {

		path {
			fill: ${ props => iconColors[props.color][props.colorTone] };
		}

	}

`;
