import { Logo } from "./Logo";

export default function HomeHero() {
	return (
		<div className="min-h-screen w-full flex items-end justify-end">
			<div className="flex items-end w-full flex-col gap-0">
				<Logo text="Roelofsen" />
			</div>
		</div>
	);
}
