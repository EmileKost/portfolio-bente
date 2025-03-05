import { Container } from "./containers/Container";
import { Logo } from "./Logo";
import { TitleTextBanner } from "./TitleTextBanner";

export const HomeHero = () => {
	return (
		<Container
			size="WIDE"
			className="h-screen flex flex-col justify-end gap-28 pb-4 md:pb-8">
			<TitleTextBanner
				title="DIGITAL DESIGNER BASED IN AMSTERDAM"
				description="I'm Bente, a digital designer passionate about creating visually striking and user-friendly designs. "
			/>
			<Logo />
		</Container>
	);
};
