import React from 'react';
import PropTypes from 'prop-types';

import { headingSizes, headingColors } from './Heading.styles';
import * as Styled from './Heading.styles';


/**
 * Component: Heading
 *
 * @description Used for displaying various headings throughout our project.
 * @since 1.0.0
 */

const Heading = ({ children, tag, weight, size, color, ...others }) => (

	<Styled.Heading
		as={tag}
		color={color}
		weight={weight}
		size={size}
		{...others}
	>
		{children}
	</Styled.Heading>

)

/**
 * ----------
 * Prop Types
 * ----------
 */

const HeadingColors 		= Object.keys(headingColors);
const HeadingTags 		= ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

const HeadingSizesLight	= Object.keys(headingSizes.light);
const HeadingSizesBold	= Object.keys(headingSizes.bold);

Heading.propTypes = {

	children: PropTypes.node,

	/** Color of the Heading. Options are 'dark', light', 'lightBlue', 'mediumBlue', 'darkBlue', and 'purple' */
	color: PropTypes.oneOf(HeadingColors),

	/** Hierarchy level of the Heading (ex: h3) */
	level: PropTypes.oneOf(HeadingTags),

	/** Size of the Heading. Options are `s', 'm', 'l', 'xl', 'xxl', `xxxl` */
	size: PropTypes.oneOf(HeadingSizesLight, HeadingSizesBold),

}

/**
 * -------------
 * Default Props
 * -------------
 */

Heading.defaultProps = {

	color: 'dark',
	tag: 'span',
	weight: 'bold',
	size: 'm',

}

export default Heading
