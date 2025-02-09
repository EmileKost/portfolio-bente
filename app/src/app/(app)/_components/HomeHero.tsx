import TitleTextBlock from "@/components/blocks/TitleTextBlock";
import { Logo } from "./Logo";

import { homeHeroContent } from "@/constants/homeHero";

export default function HomeHero() {
	return (
		<div className="min-h-screen w-full flex items-end justify-end">
			<div className="flex items-end w-full flex-col gap-0">
				<TitleTextBlock
					title={homeHeroContent.title}
					text={homeHeroContent.text}
					size="small"
					className="uppercase"
				/>
				<Logo text="Roelofsen" />
			</div>
		</div>
	);
}
