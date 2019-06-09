/**
 * We have to require dotenv so we can access our runtime environment variables
 * https://www.gatsbyjs.org/docs/environment-variables/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {

  siteMetadata: {
    title: `Chris Hahn » Dreamer`,
    description: `A Personal website for Chris Hahn`,
    author: `@codingwithchris`,
  },
  plugins: [

	`gatsby-plugin-react-helmet`,

	/**
	 * React Styled Components
	 */
	{
		resolve: `gatsby-plugin-styled-components`,
		options: {

		  // Add any options here

		},
	},

	/**
	 * Handle Font Loading via Web Font Loader
	 *
	 * Gatsby Plugin: https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/
	 * Repo: https://github.com/typekit/webfontloader
	 */
	{
		resolve: 'gatsby-plugin-web-font-loader',

		options: {

			// Custom, Self-Hosted Font Loading
			google: {
				families: ['Open Sans', 'Georgia']
			  }
		},

	},

    // Define important asset locations
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },

    /**
     * Image Handling
     * https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
     * https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    /**
     * Aids in making our sites more in line with Progressive Web Application standards
     * https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chris Hahn`,
        short_name: `CHahn`,
        start_url: `/`,
        background_color: '#DE0D61',
        theme_color: '#DE0D61',
        display: `minimal-ui`,
        icon: `static/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',

    /**
     * Get data from Contentful
     */
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `r4fa5pwyc0ut`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
