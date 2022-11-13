import { Text, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { techSupport, themeContext, useContext, ArrowDownIcon } from ".";

const TabletHero = ({ title, subtitle }) => {
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

export default TabletHero;
