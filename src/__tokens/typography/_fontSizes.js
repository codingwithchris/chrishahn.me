/**
 * Design Token » Font Sizes
 *
 * The core ideas in this file are pulled from a system called Ether by the talented
 * folks over at The Scenery.
 *
 * https://github.com/wearethescenery/ether-system-react/blob/master/src/base/typography/fontSizes.js
 *
 * Note that the linked file is modified in our implementation to suit preference.
 *
 * @since 1.0.0
 */

import { css } from 'styled-components';

/**
 * The base font size for our entire project is in `rem`s, and we set the
 * default unit-less value here.
 *
 * @since 1.0.0
 */
const baseFontSizeRem	= 1;

/**
 * These typographic scale values control typography sizing
 * across the entire site.
 *
 * Scale values are pulled from https://type-scale.com/ and are
 * ultimately chosen via designer/developer collaboration.
 *
 * @since 1.0.0
 */
// const desktopTypeScale = 1.200; // Desktop scale modifier
const mobileTypeScale = 1.200; // Mobile scale modifier

/**
 * Define the font sizes used on smaller "mobile" devices
 *
 * @uses Math.pow to "climb" the typographic scale and produce unified fnt sizing
 * @since 1.0.0
 */
const fontSizeScale = {

	step0: 	( baseFontSizeRem / mobileTypeScale ), // Gives us 1 step below the base
	step1: 	baseFontSizeRem, // Our BASE mobile font size
	step2: 	Math.pow( mobileTypeScale , 1 ),
	step3: 	Math.pow( mobileTypeScale , 2 ),
	step4:	Math.pow( mobileTypeScale , 3 ),
	step5: 	Math.pow( mobileTypeScale , 4 ),
	step6: 	Math.pow( mobileTypeScale , 5 ),
	step7: 	Math.pow( mobileTypeScale , 6 ),
	step8: 	Math.pow( mobileTypeScale , 7 ),
	step9: 	Math.pow( mobileTypeScale , 8 ),

}

/**
 * Create our final font sizing styles based on the type scale values above.
 * Media queries are rolled into the style definitions by default to make dev life easier.
 *
 * @since 1.0.0
 */
const fontSizes = {

	step0: css`
		font-size: ${fontSizeScale.step0}rem;
	`,

	step1: css`
		font-size: ${fontSizeScale.step1}rem;
	`,
	step2: css`
		font-size: ${fontSizeScale.step2}rem;
	`,
	step3: css`
		font-size: ${fontSizeScale.step3}rem;
	`,
	step4: css`
		font-size: ${fontSizeScale.step4}rem;
	`,
	step5: css`
		font-size: ${fontSizeScale.step5}rem;
	`,
	step6: css`
		font-size: ${fontSizeScale.step6}rem;
	`,
	step7: css`
		font-size: ${fontSizeScale.step7}rem;
	`,
	step8: css`
		font-size: ${fontSizeScale.step8}rem;
	`,
	step9: css`
		font-size: ${fontSizeScale.step9}rem;
	`,
}

export default fontSizes;
