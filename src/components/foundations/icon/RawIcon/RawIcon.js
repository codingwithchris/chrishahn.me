import React from 'react'
import PropTypes from "prop-types";

import { SVGElement } from '../../svg/SVGElement'
import { globalIconSizes } from './RawIcon.styles'
import * as Styled from './RawIcon.styles'

// Get all of our icons from the manifest
import * as availableIcons from '../_manifest'
import * as util from '../_utilities';

/**
 * Component: RawIcon
 *
 * @description Displays a selected icon at the specified size, with no other styles associated to it.
 *
 * @since 1.0.0
 */

export const RawIcon = ( props ) => {

	// Throw a console error and bail if the requested icon name does not exist
	if( availableIcons[props.name] == null ){
		return console.error(
			`"${props.name}" is not a valid icon choice. Please check the value for the prop @name.`
		);
	}

	/**
	 * Handle setting our final icon path, size, and viewBox properties
	 */
	const requestedIcon = availableIcons[props.name] || null;
	const requestedSize = props.size;

	const selectedIcon = util.getIconFromManifest( props.name, requestedIcon.sizes, requestedSize, globalIconSizes );
	const iconViewBox = util.getIconViewBox( selectedIcon );

	return (

		<Styled.RawIcon name={props.name} size={selectedIcon.size} {...props.others}>

			<SVGElement path={selectedIcon.path} viewBox={iconViewBox} gradient={props.gradient} />

		</Styled.RawIcon>

	)

}

/**
 * ----------
 * Prop Types
 * ----------
 */

const IconSizes = Object.keys( globalIconSizes );

RawIcon.propTypes = {

	// not taken from pre-populated array since there could be a ton of icons available
	name: PropTypes.string.isRequired,

	size: PropTypes.oneOf( IconSizes ).isRequired,

	gradient: PropTypes.object

  };


/**
 * -------------
 * Default Props
 * -------------
 */
RawIcon.defaultProps = {

	size: '',
	path: '',
	viewBox: '',
	gradient: null,

};

 export default RawIcon
