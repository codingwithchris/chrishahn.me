import { isValidElement } from "react";

/**
 * Look for the icon that matches the requested icon.
 *
 * If the requested icon is not found, warn the user that a default icon size was
 * automatically set for them based on what sizes were available,
 * and prompt them to select a size that truly exists.
 *
 * Note that we are also checking to make sure the path that was selected is actually
 * valid. If it is note, we are bailing and throwing a console error, letting the developer
 * know what's up!
 *
 * @param name
 * @param sizes
 * @param requestedSize
 * @param availableIconSizes
 *
 * @return object - A nice and clean icon object we can easily work with!
 */
export function getIconFromManifest( name, sizes, requestedSize, availableIconSizes ){

	const icon = sizes[requestedSize] ? sizes[requestedSize] : Object.values( sizes )[0];
	const iconSizeName = sizes[requestedSize] ? requestedSize : Object.keys( sizes )[0];
	const iconSize = availableIconSizes[ iconSizeName ];

	if( ! sizes[requestedSize] ){

		console.warn(
			`The requested icon, "${name}", is not available in size '${requestedSize}' and has defaulted to '${iconSizeName}'. Please select from [${Object.keys( sizes )}].`
		);

	}

	if( ! isValidElement( icon.path ) ){
		return console.error(
			`"The requested path for the icon "${name}" in size "${requestedSize}" was not valid. The retrieved path was ${icon.path}. The icon could not be rendered."`
		);
	}

	return {

		name: name,
		...icon,
		size: iconSize,
		sizeKey: iconSizeName,

	};

}

export function getIconViewBox( selectedIcon ){

	return selectedIcon.viewBox
		? selectedIcon.viewBox
		: `0 0 ${selectedIcon.size} ${selectedIcon.size}`;

}
