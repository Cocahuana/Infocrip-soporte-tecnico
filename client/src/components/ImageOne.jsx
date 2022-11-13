import { Parallax } from "react-parallax";
import Nasa from "../assets/img/background__home.jpg";
import {
	Stack,
	Flex,
	Text,
	Heading,
	Box,
	Button,
	Image,
} from "@chakra-ui/react";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
import techSupport from "./techSupport.svg";
const title = "Soporte Técnico";
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
							md: "none",
							lg: "flex",
						}}
						justifyContent='center'
					>
						<DesktopHero />
					</Box>
					<Box
						display={{
							base: "none",
							md: "flex",
							lg: "none",
						}}
					>
						<TabletHero />
					</Box>
					<Box
						display={{
							base: "flex",
							md: "none",
							lg: "none",
						}}
					>
						<MobileHero />
					</Box>
				</Flex>
			</Stack>
		</Parallax>
	);
}

export default ImageOne;

const DesktopHero = () => {
	const myTheme = useContext(themeContext);
	const { accent1, accent1_active } = myTheme;
	return (
		<>
			<Flex flexDirection='column' w='60%' h='100vh'>
				<Box
					display='flex'
					h='30vh'
					w='100%'
					alignItems='end'
					justifyContent='center'
				>
					<Heading as='h1' size='4xl' color={accent1}>
						{title}
					</Heading>
				</Box>
				<Box display='flex' flexDirection='row' h='50vh'>
					<Flex
						flex='1'
						p='10px'
						alignItems='center'
						justifyContent={"center"}
						flexDirection='column'
					>
						<Image
							src={techSupport}
							alt='SVG tech support'
							h='400px'
							w='400px'
						/>
					</Flex>
					<Flex
						flex='1'
						p='10px'
						alignItems='center'
						justifyContent='center'
						flexDirection='column'
					>
						<Box>
							<Text
								lineHeight={"25px"}
								fontSize='md'
								textAlign={"justify"}
							>
								{subtitle}
							</Text>
						</Box>
					</Flex>
				</Box>
				<Flex h='10vh' justifyContent='center' alignItems='center'>
					<Button
						bg={accent1}
						rounded={"full"}
						size={"lg"}
						fontWeight={"normal"}
						px={6}
						_hover={{ bg: accent1_active }}
					>
						Ver más
						<ArrowDownIcon color='white' />
					</Button>
				</Flex>
			</Flex>
		</>
	);
};

const TabletHero = () => {
	const myTheme = useContext(themeContext);
	const { accent1, accent1_active } = myTheme;
	return (
		<>
			<Flex flexDirection='column'>
				<Box
					display='flex'
					h='30vh'
					w='100%'
					alignItems='end'
					justifyContent='center'
				>
					<Heading as='h1' size='4xl' color={accent1}>
						{title}
					</Heading>
				</Box>
				<Box display='flex' flexDirection='row' h='50vh'>
					<Flex
						flex='1'
						p='10px'
						alignItems='center'
						justifyContent={"center"}
						flexDirection='column'
					>
						<Image
							src={techSupport}
							alt='SVG tech support'
							h='400px'
							w='400px'
						/>
					</Flex>
					<Flex
						flex='1'
						p='10px'
						alignItems='center'
						justifyContent='center'
						flexDirection='column'
					>
						<Box>
							<Text
								lineHeight={"25px"}
								fontSize='md'
								textAlign={"justify"}
							>
								{subtitle}
							</Text>
						</Box>
					</Flex>
				</Box>
				<Flex h='10vh' justifyContent='center' alignItems='center'>
					<Button
						bg={accent1}
						rounded={"full"}
						size={"lg"}
						fontWeight={"normal"}
						px={6}
						_hover={{ bg: accent1_active }}
					>
						Ver más
						<ArrowDownIcon color='white' />
					</Button>
				</Flex>
			</Flex>
		</>
	);
};

const MobileHero = () => {
	const myTheme = useContext(themeContext);
	const { accent1, accent1_active } = myTheme;
	return (
		<>
			<Box
				display='flex'
				flexDirection='column'
				h='100vh'
				px='20px'
				alignContent='center'
				justifyContent='space-evenly'
			>
				<Heading as='h1' size='4xl' color={accent1}>
					{title}
				</Heading>
				<Text lineHeight={"25px"} fontSize='md' textAlign={"justify"}>
					{subtitle}
				</Text>
				<Button
					bg={accent1}
					rounded={"full"}
					size={"lg"}
					fontWeight={"normal"}
					px={6}
					_hover={{ bg: accent1_active }}
					mx='10px'
				>
					Ver más
					<ArrowDownIcon color='white' />
				</Button>
				<Image
					src={techSupport}
					alt='SVG tech support'
					w='full'
					h='300px'
				/>
			</Box>
		</>
	);
};
