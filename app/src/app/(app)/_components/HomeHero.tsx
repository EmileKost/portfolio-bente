import { TitleTextBlock } from "@/components/blocks/TitleTextBlock";
import { Logo } from "./Logo";

export default function HomeHero() {
	return (
		<div className="min-h-screen w-full flex items-end justify-end">
			<div className="flex items-end w-full flex-col gap-0">
				<TitleTextBlock
					title="DIGITAL DESIGNER BASED IN AMSTERDAM"
					text={[
						"I'm Bente, a digital designer passionate about creating visually striking and user-friendly designs. ",
					]}
					className={{
						container: "w-fit",
						text: "md:max-w-[300px] uppercase",
						title: "md:max-w-[300px] uppercase",
					}}
				/>
				<Logo text="Roelofsen" />
			</div>
		</div>
	);
}
