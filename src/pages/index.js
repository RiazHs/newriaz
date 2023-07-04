import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button, Image, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0 80px 0" quarkly-title="Hero-16">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				justify-content="space-around"
				lg-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="50%"
					lg-width="100%"
					display="flex"
					flex-direction="column"
					justify-content="center"
					padding="0px 80px 0px 0px"
					lg-padding="0px 0 0px 0px"
					lg-margin="0px 0px 50px 0px"
					align-items="flex-start"
				>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						padding="7px 20px 7px 20px"
						margin="0px 0px 30px 0px"
						border-radius="25px"
						border-width="1px"
						border-style="solid"
						border-color="--color-lightD2"
						sm-flex-direction="column"
					>
						<Text
							margin="0px 10px 0px 0px"
							color="#3f24d8"
							font="normal 400 16px/1.5 --fontFamily-sans"
							sm-margin="0px 0 5px 0px"
							border-width="0 1px 0 0"
							border-style="solid"
							padding="0px 10px 0px 0px"
							border-color="#c9d0d7"
							sm-border-width={0}
						>
							CloudifyPro is a SaaS company
						</Text>
						<Link href="#" color="#8b9197" font="normal 400 16px/1.5 --fontFamily-sans" text-decoration-line="initial">
							Read more
						</Link>
					</Box>
					<Text margin="0px 0px 20px 0px" font="normal 700 56px/1.2 --fontFamily-sans" sm-font="normal 700 42px/1.2 --fontFamily-sans">
						CloudifyPro is a SaaS company
					</Text>
					<Text margin="0px 0px 50px 0px" font="--lead" color="#8b9197">
						Our platform offers a range of tools and services, including project management, collaboration, communication, and data analytics. With Cloudify Pro, businesses can streamline their workflows, reduce costs, and improve overall efficiency.
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						sm-flex-direction="column"
						sm-align-self="stretch"
					>
						<Button
							margin="0px 15px 0px 0px"
							padding="12px 28px 12px 28px"
							background="#3f24d8"
							border-radius="8px"
							font="normal 400 17px/1.5 --fontFamily-sans"
							sm-margin="0px 0 15px 0px"
							transition="background-color 0.2s ease 0s"
							border-width="2px"
							border-style="solid"
							border-color="#3f24d8"
							hover-color="--darkL1"
							hover-background="rgba(63, 36, 216, 0)"
							sm-width="100%"
						>
							Get Started
						</Button>
						<Button
							margin="0px 0 0px 0px"
							padding="12px 28px 12px 28px"
							background="rgba(0, 119, 204, 0)"
							color="--darkL1"
							font="normal 400 17px/1.5 --fontFamily-sans"
							sm-width="100%"
						>
							Live Demo
						</Button>
					</Box>
				</Box>
				<Image
					src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/17677318_5864081.jpg?v=2023-05-26T18:53:12.481Z"
					display="block"
					width="50%"
					object-fit="cover"
					height="100%"
					lg-width="100%"
					lg-height="700px"
					sm-height="500px"
				/>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"64a41f92032e8d001886aa80"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});