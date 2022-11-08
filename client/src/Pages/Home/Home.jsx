import {Grid, GridItem, Box} from "@chakra-ui/react";

function Home() {
	return (
		<>
			<Grid
				templateAreas={`
					"nav"
					"header"
					"main"
					"footer"
					`}
				gridTemplateRows={"10vh 90vh auto 7vh"}
				gridTemplateColumns={"1fr"}
				h='200px'
				color='blackAlpha.700'
				fontWeight='bold'>
				<GridItem bg='orange.300' area={"header"}>
					Header
				</GridItem>
				<GridItem bg='pink.300' area={"nav"}>
					Nav
				</GridItem>
				<GridItem bg='green.300' area={"main"}>
					Main
				</GridItem>
				<GridItem bg='blue.300' area={"footer"}>
					Footer
				</GridItem>
			</Grid>
		</>
	);
}

export default Home;
