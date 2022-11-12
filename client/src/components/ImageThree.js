import { Parallax } from 'react-parallax';
import Nasa from "../assets/img/Instalación.jpeg"
import { Stack, VStack, Text, Button, useBreakpointValue } from '@chakra-ui/react';
const ImageThree = () => (
    <Parallax style={ { heigth: "92vh", position: "relative" } } bgImage={ Nasa } bgImageAlt="the cat" strength={ 800 }>
        <Stack height={ "92vh" } alignItems={ "center" } justifyContent="center" width="100%">
            <VStack
                w={ "full" }
                justify={ "center" }
                px={ useBreakpointValue( { base: 4, md: 8 } ) }
                bg='rgba(0,0,0, 0.8)'
                py={ useBreakpointValue( { base: 4, md: 8 } ) }>
                <Stack maxW={ "2xl" } align={ "flex-start" } spacing={ 6 }>
                    <Text
                        color={ "white" }
                        fontWeight={ 700 }
                        lineHeight={ 1.2 }
                        fontSize={ useBreakpointValue( { base: "3xl", md: "4xl" } ) }>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                        do eiusmod tempor
                    </Text>
                    <Stack direction={ "row" }>
                        <Button
                            bg={ "blue.400" }
                            rounded={ "full" }
                            color={ "white" }
                            _hover={ { bg: "blue.500" } }>
                            Show me more
                        </Button>
                        <Button
                            bg={ "whiteAlpha.300" }
                            rounded={ "full" }
                            color={ "white" }
                            _hover={ { bg: "whiteAlpha.500" } }>
                            Show me more
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Stack>
    </Parallax>
);

export default ImageThree