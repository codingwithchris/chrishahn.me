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
		<SimpleIcon name="brain" />
		<SimpleIcon name="brochure" />
		<SimpleIcon name="brochureStack" />
		<SimpleIcon name="businessCard" />
		<SimpleIcon name="calendar" />
		<SimpleIcon name="chatBubble" />
		<SimpleIcon name="chatBubbleAt" />
		<SimpleIcon name="chatBubbleQuotes" />
		<SimpleIcon name="check" />
		<SimpleIcon name="checklist" />
		<SimpleIcon name="clock" />
		<SimpleIcon name="crosshair" />
		<SimpleIcon name="desktopComputer" />
		<SimpleIcon name="dribble" />
		<SimpleIcon name="envelope" />
		<SimpleIcon name="exactoRuler" />
		<SimpleIcon name="facebook" />
		<SimpleIcon name="factoryBuildings" />
		<SimpleIcon name="fourPeople" />
		<SimpleIcon name="gears" />
		<SimpleIcon name="handPencil" />
		<SimpleIcon name="handShake" />
		<SimpleIcon name="hardDriveEBook" />
		<SimpleIcon name="hardDriveWrench" />
		<SimpleIcon name="heart" />
		<SimpleIcon name="info" />
		<SimpleIcon name="instagram" />
		<SimpleIcon name="lightbulb" />
		<SimpleIcon name="lineGraph" />
		<SimpleIcon name="link" />
		<SimpleIcon name="linkedIn" />
		<SimpleIcon name="magnifyingGlass" />
		<SimpleIcon name="magnifyingGlassKey" />
		<SimpleIcon name="magnifyingGlassPaper" />
		<SimpleIcon name="menu" />
		<SimpleIcon name="microscope" />
		<SimpleIcon name="paperPencil" />
		<SimpleIcon name="paperWriting" />
		<SimpleIcon name="penTip" />
		<SimpleIcon name="personQuestionMark" />
		<SimpleIcon name="phone" />
		<SimpleIcon name="plusSign" />
		<SimpleIcon name="poster" />
		<SimpleIcon name="questionMark" />
		<SimpleIcon name="quote" />
		<SimpleIcon name="ribbon" />
		<SimpleIcon name="smileyFace" />
		<SimpleIcon name="speedGauge" />
		<SimpleIcon name="swot" />
		<SimpleIcon name="threePeople" />
		<SimpleIcon name="thumbsUp" />
		<SimpleIcon name="twitter" />
		<SimpleIcon name="typeface" />
		<SimpleIcon name="warning" />
		<SimpleIcon name="website" />
		<SimpleIcon name="worksheets" />
		<SimpleIcon name="wrenchPencil" />
		<SimpleIcon name="wrenchScrewdriver" />
		<SimpleIcon name="x" />


		<FancyIcon name="brochureTriFold" />
		<FancyIcon name="lightbulb" bg="1" />
		<FancyIcon name="lineGraph" bg="3" />
		<FancyIcon name="penTip" bg="4"/>
		<FancyIcon name="speedGauge" bg="5"/>
		<FancyIcon name="website" />


	</TemplateWrapper>

)

export default StyleGuidePage
