import {
	Box,
	Flex,
	Text,
	Stack,
	Icon,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {useContext} from "react";
import {themeContext} from "../../context/themeContext";
export const DesktopSubNav = ({label, href, subLabel}) => {
	const myTheme = useContext(themeContext);
	const {accent1} = myTheme;
	return (
		<Link
			href={href}
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{bg: useColorModeValue("pink.50", "gray.900")}}>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{color: accent1}}
						fontWeight={500}>
						{label}
					</Text>
					<Text fontSize={"sm"}>{subLabel}</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{opacity: "100%", transform: "translateX(0)"}}
					justify={"flex-end"}
					align={"center"}
					flex={1}>
					<Icon color={accent1} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};
