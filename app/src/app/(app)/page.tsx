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
			<div className="h-screen flex justify-center">
				<ProjectSlider projects={projects} />
			</div>
		</>
	);
}
