"use client";

import { useRef, useEffect } from "react";

import { useInView } from "framer-motion";

import { ProjectCard } from "./ProjectCard";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ProjectSliderProps = {
	projects: Array<{
		title: string;
		url: string;
		projectType: string;
		image: string;
		video?: string;
	}>;
};

export const ProjectSlider = ({ projects }: ProjectSliderProps) => {
	gsap.registerPlugin(ScrollTrigger);
	const projectSliderRef = useRef<HTMLDivElement | null>(null);
	const inView = useInView(projectSliderRef, {
		amount: 1,
	});

	useEffect(() => {
		console.log(inView);
	}, [inView]);

	return (
		<div
			ref={projectSliderRef}
			className="w-full flex flex-col overflow-auto md:overflow-scroll md:flex-row gap-2 no-scrollbar my-8 md:my-52 cursor-none">
			{projects &&
				projects.length > 0 &&
				projects.map((project, idx) => (
					<ProjectCard
						key={`${project.title}${idx}`}
						title={project.title}
						url={project.url}
						projectType={project.projectType}
						image={project.image}
						index={idx}
						length={projects.length}
					/>
				))}
		</div>
	);
};

// PSUEDO
// Have a state for setProjectIndex
// when container in view lock scroll
// Measure scrolling with the wheelEvent and deltaY
// on + x-amount of deltaY setProjectIndex + 1
