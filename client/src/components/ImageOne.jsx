import { Parallax } from "react-parallax";
import Nasa from "../assets/img/background__home.jpg";
import { Stack, Flex, Text, Heading, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { ArrowForwardIcon } from "@chakra-ui/icons";
const title = "Soy una frase o titulo";
const subtitle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare nulla quam, 
	bibendum pellentesque turpis porttitor ut. Etiam in risus augue. Pellentesque leo mi, commodo in lorem et, lacinia volutpat augue.`;
function ImageOne() {
	return (
		<Parallax
			style={{ heigth: "92vh", position: "relative" }}
			bgImage={Nasa}
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
							lg: "flex",
						}}
					>
						<DesktopHero />
					</Box>
				</Flex>
			</Stack>
		</Parallax>
	);
}

export default ImageOne;

const DesktopHero = () => {
	const myTheme = useContext(themeContext);
	const { accent1 } = myTheme;
	return (
		<>
			<Flex position='absolute' right='15%' top='15%'>
				<Heading as='h1' size='4xl' color={accent1} mb='10px'>
					{title}
				</Heading>
			</Flex>
			<Flex
				position='absolute'
				right='20%'
				top='30%'
				flexDirection='column'
				maxW='30%'
			>
				<Text lineHeight={"30px"} fontSize='20px' textAlign={"justify"}>
					{subtitle}
				</Text>
				<Text
					mt='10px'
					lineHeight={"30px"}
					fontSize='20px'
					letterSpacing='2px'
					textAlign={"justify"}
					fontWeight='800'
					color={accent1}
				>
					Ver más <ArrowForwardIcon color='white' />{" "}
				</Text>
			</Flex>
		</>
	);
};
