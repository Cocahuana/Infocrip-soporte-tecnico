import {Parallax} from "react-parallax";
import Nasa from "../assets/img/background__home.jpg";
import {Stack, Flex, Box, Text, Heading, Image} from "@chakra-ui/react";
import {useContext} from "react";
import {themeContext} from "../context/themeContext";
function ImageOne() {
	const myTheme = useContext(themeContext);
	const {accent1} = myTheme;
	return (
		<Parallax
			style={{heigth: "92vh", position: "relative"}}
			bgImage={Nasa}
			bgImageAlt='the cat'
			strength={800}>
			<Stack
				height={"92vh"}
				alignItems={"center"}
				justifyContent='center'
				width='100%'>
				<Flex
					color='white'
					bg='rgba(0, 0, 0 ,0.78)'
					width='full'
					h='full'>
					<Box
						flex='1'
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'>
						<Image src={Nasa} h='500px' w='500px' />
					</Box>
					<Box
						flex='1'
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'>
						<Heading
							as='h1'
							size='4xl'
							noOfLines={1}
							color={accent1}>
							Soy una frase o titulo
						</Heading>
						<Text>Box 3</Text>
						<Text>Box 3</Text>
						<Text>Box 3</Text>
					</Box>
				</Flex>
			</Stack>
		</Parallax>
	);
}

export default ImageOne;
