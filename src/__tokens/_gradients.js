import { gradientColors } from './colors/_palette';

const gradientAngles = {

	topRight:{

		deg: '190',
		svg: {

			x1: "92",
			y1: "19",
			x2: "82",
			y2: "75",

		},

	},

	topLeft:{

		deg: '130',
		svg: {

			x1: "92",
			y1: "19",
			x2: "82",
			y2: "75",

		},

	},

}

const gradientDefs = {

	g1:{
		id: 'gradient-1',
		fallback: gradientColors.g1.color1,
		background: {
			c1: gradientColors.g1.color1,
			c2: gradientColors.g1.color2,
		},
		svgStops: [
			gradientColors.g1.color1,
			gradientColors.g1.color2,
		]

	},

	g2:{

		id: 'gradient-2',
		fallback: gradientColors.g2.color1,
		background: {
			c1: gradientColors.g2.color1,
			c2: gradientColors.g2.color2,
		},
		svgStops: [
			gradientColors.g2.color1,
			gradientColors.g2.color2,
		],

	}

}

export const gradients = {

	defs: {
		...gradientDefs,
	},

	angles: {
		...gradientAngles,
	}

}

export default gradients;
