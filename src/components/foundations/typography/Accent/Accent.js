import React from 'react';
import PropTypes from 'prop-types';

import { accentSizes, accentColors } from './Accent.styles';
import * as Styled from './Accent.styles';

/**
 * Component: Accent
 *
 * @description A text element that is used sparingly for things like footnotes.
 * @since 1.0.0
 */

const Accent = ({children, tag, color, size, ...others}) => (

	<Styled.Accent as={tag} color={color} size={size} {...others}>

		{children}

	</Styled.Accent>

)

/**
 * ----------
 * Prop Types
 * ----------
 */

const AccentSizes = Object.keys(accentSizes);
const AccentColors = Object.keys(accentColors);

Accent.propTypes = {

  children: PropTypes.node,

  /** Color of the Accent. Options are 'dark', 'light' */
  color: PropTypes.oneOf(AccentColors),

  /** Size of the Accent. Options are 'xs', 's' */
  size: PropTypes.oneOf(AccentSizes),

};


/**
 * -------------
 * Default Props
 * -------------
 */

Accent.defaultProps = {

    color: 'dark',
    size: 's',

};

export default Accent;
