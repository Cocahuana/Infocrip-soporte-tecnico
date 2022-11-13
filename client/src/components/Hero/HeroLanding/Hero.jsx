import { Parallax } from "react-parallax";
import { Stack, Flex } from "@chakra-ui/react";
import {
	testerBgImg,
	landingText,
	MobileHero,
	TabletHero,
	DesktopHero,
} from ".";
import { ViewMobile, ViewTablet, ViewDesktop } from "../../Breakpoints";
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
					<ViewDesktop>
						<DesktopHero title={title} subtitle={subtitle} />
					</ViewDesktop>
					<ViewTablet>
						<TabletHero title={title} subtitle={subtitle} />
					</ViewTablet>
					<ViewMobile>
						<MobileHero title={title} subtitle={subtitle} />
					</ViewMobile>
				</Flex>
			</Stack>
		</Parallax>
	);
}
