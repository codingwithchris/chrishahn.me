import React from 'react';
import PropTypes from 'prop-types';

import { paragraphSizes, paragraphColors } from './Paragraph.styles';
import * as Styled from './Paragraph.styles';

/**
 * Component: Paragraph
 *
 * @description Used for displaying default "paragraph" or "body" text.
 * @since 1.0.0
 */

const Paragraph = ({ children, tag, size, color, ...others }) => (

	<Styled.Paragraph
		as={tag}
		color={color}
		size={size}
		{...others}
	>

		{children}

	</Styled.Paragraph>

)

/**
 * ----------
 * Prop Types
 * ----------
 */

const ParagraphSizes = Object.keys(paragraphSizes);
const ParagraphColors = Object.keys(paragraphColors);

Paragraph.propTypes = {

	children: PropTypes.node,

	/** Color of the Paragraph. Options are 'dark', 'light' */
	color: PropTypes.oneOf(ParagraphColors),

	/** Size of the Paragraph. Options are 'xs', 's', 'm', and 'l' */
	size: PropTypes.oneOf(ParagraphSizes),

};


/**
 * -------------
 * Default Props
 * -------------
 */

Paragraph.defaultProps = {
  	color: 'dark',
  	size: 's',
};

export default Paragraph
