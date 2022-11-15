import { Button } from "@chakra-ui/react";
import { themeContext, useContext, ArrowDownIcon } from "../Hero/HeroLanding";

function BtnVerMas({ rounded, size, fontWeight, px }) {
	// Props must be chakra props as bg, rounded, etc
	const myTheme = useContext(themeContext);
	const { accent1, accent1_active } = myTheme;
	const text = "Ver más";
	return (
		<Button
			bg={accent1}
			rounded={rounded}
			size={size}
			fontWeight={fontWeight}
			px={px}
			_hover={{ bg: accent1_active }}
		>
			{text} <ArrowDownIcon color='white' />
		</Button>
	);
}

export default BtnVerMas;
