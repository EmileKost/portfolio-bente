"use client";

import type { ProjectCard as ProjectCardType } from "@/types/project";

import { ProjectCard } from "./ProjectCard";

type ProjectSliderProps = {
	projects: Array<ProjectCardType>;
};

export const ProjectSlider = ({ projects }: ProjectSliderProps) => {
	return (
		<div className="w-full flex flex-col overflow-hidden md:flex-row gap-2">
			{projects &&
				projects.length > 0 &&
				projects.map((project, idx) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						text={project.text}
						projectType={project.projectType}
						image={project.image}
						index={idx}
						length={projects.length}
					/>
				))}
		</div>
	);
};
