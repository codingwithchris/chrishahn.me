import React from "react"

import { TemplateWrapper } from "../components"
import { SEO } from "../components"

const NotFoundPage = () => (

	<TemplateWrapper>

		<SEO title="404: Not found" description="We didn't find a thing" />

    	<h1>NOT FOUND</h1>
    	<p>You just hit a route that doesn&#39;t exist... the sadness.</p>

  	</TemplateWrapper>

)

export default NotFoundPage
