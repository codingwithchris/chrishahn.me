import { coreColors, accentColors, neutralColors, gradientColors, systemColors } from './_palette'
import { uiColors } from './_ui'

const colors = {

    palette: {
        ...coreColors,
        ...accentColors,
		...neutralColors,
		...gradientColors,
        ...systemColors,
    },

    ui: {
        ...uiColors,
    },

}

export default colors;
