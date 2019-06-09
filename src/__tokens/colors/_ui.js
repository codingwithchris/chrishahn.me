import { coreColors, neutralColors, accentColors, systemColors } from './_palette'

export const uiColors = {

	typography: {

		// Neutral
		dark: neutralColors.lavastone.xdark,
		light: systemColors.white,

		// Core Colors
		lightBlue: coreColors.denim.light,
		mediumBlue: coreColors.zinc.light,
		darkBlue: coreColors.zinc.base,
		purple: coreColors.amethyst.light,

	},

	logo: {

		onLight: {

			pink: accentColors.cerise.base,
			dark: neutralColors.lavastone.dark,
			purple: coreColors.amethyst.base,
			lightBlue: coreColors.denim.base,
			darkBlue: coreColors.zinc.base,

		},

		onDark: {

			light: systemColors.white,
			purple: coreColors.amethyst.light,
			lightBlue: coreColors.denim.light,
			darkBlue: coreColors.zinc.light,

		},

	},

}
