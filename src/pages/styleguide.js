import React from "react"

import { TemplateWrapper, SEO, Heading, Paragraph, Accent, Symbol, Lockup, SimpleIcon, FancyIcon } from '../components'

const StyleGuidePage = () => (

	<TemplateWrapper>

		<SEO title="Styleguide" description="" keywords={[`gatsby`, `application`, `react`]} />

		<Heading tag="h1" weight="bold" size="xl" color="dark">
			I Am a Heading
		</Heading>

		<Paragraph size="m">
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		</Paragraph>

		<Accent size="s">
		 — by Samantha Power
		</Accent>

		<Symbol type="onLight" color="purple" size="xl"/>

		<Lockup type="onLight" size="xl" />
		<Lockup type="onLight" size="l" />
		<Lockup type="onLight" size="m" />

		<SimpleIcon name="arrowUp" />

	</TemplateWrapper>

)

export default StyleGuidePage
