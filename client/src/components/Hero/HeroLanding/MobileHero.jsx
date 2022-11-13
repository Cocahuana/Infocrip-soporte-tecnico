import { Text, Heading, Box, Button, Image } from "@chakra-ui/react";
import { techSupport, themeContext, useContext, ArrowDownIcon } from ".";

const MobileHero = ({ title, subtitle }) => {
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
export default MobileHero;
