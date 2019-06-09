const breakpoints = {

    xs2:  '414px',
    xs:   '560px',
    s:    '768px',
    m:    '960px',
    l:    '1040px',
    xl:   '1200px',
    xl2:  '1440px',
	xl3:  '1640px',

};

// This variable returns an object containing all available media query wrappers for use within styled components
//
// Example Usage:
//
// ${mediaQueries.sm} {
//   ...css rules
// }
//

const mediaQueries = Object.keys(breakpoints).reduce((acc, bp) => ({
	...acc,
	[bp]: `@media (min-width: ${breakpoints[bp]})`,
  }), {});

export default { breakpoints, mediaQueries };
