import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';

function Home() {
	return (
		<div>
			<Grid
				templateAreas={`
					"nav"
					"header"
					"main"
					"footer"
					`}
				gridTemplateRows={'10vh 90vh auto 7vh'}
				gridTemplateColumns={'1fr'}
				h='200px'
				color='blackAlpha.700'
				fontWeight='bold'>
				<GridItem pl='2' bg='orange.300' area={'header'}>
					Header
				</GridItem>
				<GridItem pl='2' bg='pink.300' area={'nav'}>
					Nav
				</GridItem>
				<GridItem pl='2' bg='green.300' area={'main'}>
					Main
				</GridItem>
				<GridItem pl='2' bg='blue.300' area={'footer'}>
					Footer
				</GridItem>
			</Grid>
		</div>
	);
}

export default Home;
