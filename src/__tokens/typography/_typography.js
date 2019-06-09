/**
 * Design Tokens » Typography » Typography
 *
 * Pulls together our fonts and font size tokens into an easy to implement
 * set of style definitions that drive all the typographic styles across the site.
 *
 * @uses fonts to pull in the desired fonts for each definition
 * @uses fontSizes to implement our type scale
 * @since 1.0.0
 */

import { css } from 'styled-components';

import fonts from './_fonts';
import fontSizes from './_fontSizes';

const typography = {

	// Heading » Light
	headingLight: {

		XXXLarge: css`
			${fonts.headingLight};
			${fontSizes.step9};
			line-height: 1.2;
		`,
		XXLarge: css`
			${fonts.headingLight};
			${fontSizes.step8};
			line-height: 1.2;
		`,
		XLarge: css`
			${fonts.headingLight};
			${fontSizes.step7};
			line-height: 1.2;
		`,
		Large: css`
			${fonts.headingLight};
			${fontSizes.step5};
			line-height: 1.3;
		`,
		Medium: css`
			${fonts.headingLight};
			${fontSizes.step4};
			line-height: 1.3;
		`,
		Small: css`
			${fonts.headingLight};
			${fontSizes.step3};
			line-height: 1.3;
		`,

	},

	// Heading » Bold
	headingBold: {

		XXXLarge: css`
			${fonts.headingBold};
			${fontSizes.step9};
			line-height: 1.2;
		`,
		XXLarge: css`
			${fonts.headingBold};
			${fontSizes.step8};
			line-height: 1.2;
		`,
		XLarge: css`
			${fonts.headingBold};
			${fontSizes.step7};
			line-height: 1.2;
		`,
		Large: css`
			${fonts.headingBold};
			${fontSizes.step5};
			line-height: 1.3;
		`,
		Medium: css`
			${fonts.headingBold};
			${fontSizes.step4};
			line-height: 1.3;
		`,
		Small: css`
			${fonts.headingBold};
			${fontSizes.step3};
			line-height: 1.3;
		`,
	},

	// Paragraph » Regular

	paragraphRegular: {

		Large: css`

			${fonts.bodyRegular};
			${fontSizes.step3};
			line-height: 1.5;
		`,

		Medium:css`

			${fonts.bodyRegular};
			${fontSizes.step2};
			line-height: 1.5;

		`,

		Small: css`

			${fonts.bodyRegular};
			${fontSizes.step1};
			line-height: 1.5;

		`,

		XSmall: css`

			${fonts.bodyRegular};
			${fontSizes.step0};
			line-height: 1.5;

		`,

	},

	// Accent » Light

	accentLight: {

		Small: css`

			${fonts.accentLight};
			${fontSizes.step1};
			line-height: 1.5;

		`,

		XSmall: css`

			${fonts.accentLight};
			${fontSizes.step0};
			line-height: 1.5;

		`,

	}
};

export default typography;
