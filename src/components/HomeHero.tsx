import { Container } from "./containers/Container";
import { Logo } from "./Logo";

export const HomeHero = () => {
	return (
		<Container
			size="WIDE"
			className="h-screen flex flex-col justify-end gap-28 pb-4 md:pb-8">
			<Logo />
		</Container>
	);
};
