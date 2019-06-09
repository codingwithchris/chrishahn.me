/**
 * Design Tokens » Typography » Fonts
 *
 * Define the fonts to use across our project.
 *
 * @since 1.0.0
 */

import { css } from 'styled-components';

const fonts = {

  headingLight: css`
	font-family: "Proxima Nova", Corbel, Arial, sans-serif;
	font-style: normal;
	font-weight: 300;
  `,

  headingBold: css`
    font-family: "Proxima Nova", Corbel, Arial, sans-serif;
    font-style: normal;
    font-weight: 700;
  `,

  bodyRegular: css`
    font-family: "Proxima Nova", Corbel, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
  `,

  accentLight: css`
    font-family: "Merriweather", Georgia, serif;
    font-style: normal;
    font-weight: 300;
  `,

};

export default fonts;
