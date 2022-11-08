import {Stack, useColorModeValue} from "@chakra-ui/react";
import {MobileNavItem} from "./MovileNavItem";
export const MobileNav = (props) => {
	const {NAV_ITEMS} = props;
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			p={4}
			display={{md: "none"}}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};
