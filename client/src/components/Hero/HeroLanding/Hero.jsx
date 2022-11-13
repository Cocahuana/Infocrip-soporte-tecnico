import { Parallax } from "react-parallax";
import { Stack, Flex, Box } from "@chakra-ui/react";
import {
	testerBgImg,
	landingText,
	MobileHero,
	TabletHero,
	DesktopHero,
} from ".";
export default function Hero() {
	const { title, subtitle } = landingText;
	return (
		<Parallax
			style={{ heigth: "92vh", position: "relative" }}
			bgImage={testerBgImg}
			bgImageAlt='the cat'
			strength={800}
		>
			<Stack
				height={"92vh"}
				alignItems={"center"}
				justifyContent='center'
				width='100%'
			>
				<Flex
					color='white'
					bg='rgba(0, 0, 0 ,0.85)'
					width='full'
					h='full'
					flexDirection='column'
				>
					<Box
						display={{
							base: "none",
							md: "none",
							lg: "flex",
						}}
						justifyContent='center'
					>
						<DesktopHero title={title} subtitle={subtitle} />
					</Box>
					<Box
						display={{
							base: "none",
							md: "flex",
							lg: "none",
						}}
					>
						<TabletHero title={title} subtitle={subtitle} />
					</Box>
					<Box
						display={{
							base: "flex",
							md: "none",
							lg: "none",
						}}
					>
						<MobileHero title={title} subtitle={subtitle} />
					</Box>
				</Flex>
			</Stack>
		</Parallax>
	);
}
