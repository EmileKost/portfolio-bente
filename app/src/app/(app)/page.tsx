import HomeHero from "./_components/HomeHero";
import { ProjectSlider } from "./_components/ProjectSlider";

const projects = [
	{
		title: "The unwritten laws",
		projectType: "Ux/UI & visual design",
		image: "/images/project-1.png",
		url: "unwritten-laws",
	},
	{
		title: "The unwritten laws",
		projectType: "Ux/UI & visual design",
		image: "/images/project-1.png",
		url: "unwritten-laws",
	},
	{
		title: "The unwritten laws",
		projectType: "Ux/UI & visual design",
		image: "/images/project-1.png",
		url: "unwritten-laws",
	},
	{
		title: "The unwritten laws",
		projectType: "Ux/UI & visual design",
		image: "/images/project-1.png",
		url: "unwritten-laws",
	},
	{
		title: "The unwritten laws",
		projectType: "Ux/UI & visual design",
		image: "/images/project-1.png",
		url: "unwritten-laws",
	},
];

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<div className="py-4 md:py-52">
				<ProjectSlider projects={projects} />
			</div>
		</>
	);
}
