import React from 'react'
import PropTypes from 'prop-types'

const LinearGradient = ({ gradient, ...others }) => {


	// We are planning on passing all of the data needed for our gradient into
	// this component. It has no knowledge of how it is used, it just renders itself
	// from the data passed in. The parent component is responsible for passing
	// along this data.

	return (

		<defs>
			<linearGradient id={gradient.id} x1={gradient.angles.x1} y1={gradient.angles.y1} x2={gradient.angles.x2} y2={gradient.angles.y2} gradientUnits="userSpaceOnUse" {...others}>

				{gradient.colorStops.map( ( colorStop, index ) =>

					<stop key={`${gradient.id}__${colorStop}`} offset={index}  stopColor={colorStop} />

				)}

			</linearGradient>
		</defs>

	)

}

LinearGradient.propTypes = {

	gradient: PropTypes.object.isRequired

}

export default LinearGradient;
