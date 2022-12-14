import {
	Flex,
	Text,
	Collapse,
	Icon,
	Link,
	Stack,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {useContext} from "react";
import {themeContext} from "../../context/themeContext";

export const MobileNavItem = ({label, children, href}) => {
	const {isOpen, onToggle} = useDisclosure();

	const myTheme = useContext(themeContext);
	const {text, accent1} = myTheme;
	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}>
				<Text
					fontWeight={700}
					color={useColorModeValue(text.secondary, text.base)}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse
				in={isOpen}
				animateOpacity
				style={{marginTop: "0!important"}}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue(accent1, "gray.700")}
					align={"start"}>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};
