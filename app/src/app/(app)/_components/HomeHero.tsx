import TitleTextBlock from "@/components/TitleTextBlock";
import HomeTitle from "./HomeTitle";

import { homeHeroContent } from "@/constants/homeHero";

export default function HomeHero() {
	return (
		<div className="min-h-screen w-full flex items-end justify-end">
			<div className="flex flex-col gap-[120px]">
				<TitleTextBlock
					title={homeHeroContent.title}
					text={homeHeroContent.text}
					size="small"
					className="uppercase"
				/>
				<HomeTitle title={"Roelofsen"} />
			</div>
		</div>
	);
}
