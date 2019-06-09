import React from "react"

import { Heading, TemplateWrapper } from "../components"
import { SEO } from "../components"

const HomePage = () => (

	<TemplateWrapper>

		<SEO title="Chris Hahn • Storyteller|Dreamer" description="" keywords={[`gatsby`, `application`, `react`]} />

    	<Heading tag="h1" weight="bold" size="xl" color="dark">My New Site is Coming Soon :)</Heading>

	</TemplateWrapper>

)

export default HomePage
