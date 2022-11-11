import { Parallax } from 'react-parallax';
import Nasa from "../assets/img/jesus.jpg"
import { Stack } from '@chakra-ui/react';
const ImageTwo = () => (
    <Parallax style={ { heigth: "92vh", position: "relative" } } bgImage={ Nasa } bgImageAlt="the cat" strength={ 800 }>
        <Stack height={ "92vh" } alignItems={ "center" } justifyContent="center" width="100%">
            <span style={ { color: "white" } }>Travel to space</span>
        </Stack>
    </Parallax>
);

export default ImageTwo