import TitleTextBlock from "@/components/blocks/TitleTextBlock";
import { Logo } from "./Logo";

import { homeHeroContent } from "@/constants/homeHero";

export default function HomeHero() {
	return (
		<div className="min-h-screen w-full flex items-end justify-end snap-center">
			<div className="flex items-end w-full flex-col gap-0">
				<TitleTextBlock
					title={"DIGITAL DESIGNER BASED IN AMSTERDAM"}
					text={
						"I'm Bente, a digital designer passionate about creating visually striking and user-friendly designs."
					}
					size="small"
					className="uppercase"
				/>
				<Logo text="Roelofsen" />
			</div>
		</div>
	);
}
