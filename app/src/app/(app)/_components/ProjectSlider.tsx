"use client";

import { ProjectCard } from "./ProjectCard";

type ProjectSliderProps = {
	projects: Array<{
		title: string;
		projectType: string;
		image: string;
		video?: string;
	}>;
};

export const ProjectSlider = ({ projects }: ProjectSliderProps) => {
	return (
		<div className="w-full flex flex-col overflow-auto md:overflow-scroll md:flex-row gap-2 no-scrollbar">
			{projects &&
				projects.length > 0 &&
				projects.map((project, idx) => (
					<ProjectCard
						key={`${project.title}${idx}`}
						title={project.title}
						projectType={project.projectType}
						image={project.image}
						index={idx}
						length={projects.length}
					/>
				))}
		</div>
	);
};
