import React from "react"

import { TemplateWrapper } from "../components"
import { SEO } from "../components"

const HomePage = () => (

	<TemplateWrapper>

		<SEO title="Home" description="" keywords={[`gatsby`, `application`, `react`]} />

    	<h1>Hi people</h1>
    	<p>Welcome to your new Gatsby site.</p>
    	<p>Now go build something great.</p>

	</TemplateWrapper>

)

export default HomePage
