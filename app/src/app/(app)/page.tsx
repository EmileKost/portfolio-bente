import HomeHero from "./_components/HomeHero";
import { ProjectSlider } from "./_components/ProjectSlider";

const projects = [
	{
		title: "The unwritten laws",
		projectType: "Ux/UI & visual design",
		image: "./images/project-1.png",
	},
	{
		title: "The unwritten laws",
		projectType: "Ux/UI & visual design",
		image: "./images/project-1.png",
	},
	{
		title: "The unwritten laws",
		projectType: "Ux/UI & visual design",
		image: "./images/project-1.png",
	},
];

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<div className="py-4 md:py-24">
				<ProjectSlider projects={projects} />
			</div>
		</>
	);
}
