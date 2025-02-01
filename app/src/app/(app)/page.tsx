import HomeHero from "./_components/HomeHero";

import { MediaBlock } from "@/components/blocks/MediaSingleBlock";

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<MediaBlock
				labels={[
					"Animated lyric video -- Ocean Drive",
					"Univeristy of Europe for applied sciences, Berlin",
					"JUN 2022",
					"Motion Design",
				]}
				image={{ url: "/images/image-1.png", alt: "test" }}
				displayCursor
				cursorText="Watch me"
			/>
		</>
	);
}
