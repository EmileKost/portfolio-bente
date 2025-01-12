"use client";

import { useRef, useEffect, useState } from "react";

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

	const [lockBody, setLockBody] = useState<boolean>(false);
	const [scrollVelocity, setScrollVelocity] = useState<number>(0);

	const projectSliderRef = useRef<HTMLDivElement | null>(null);

	const sliderIsInView = useInView(projectSliderRef, {
		amount: 1,
	});

	useEffect(() => {
		const gsapInit = () => {
			gsap.to(projectSliderRef.current, {
				scrollTrigger: {
					trigger: projectSliderRef.current,
					// pin: true,
					onUpdate: (self) => {
						// setScrollVelocity(self.getVelocity());
					},
				},
				// x: -scrollVelocity,
			});
		};

		const handleWheelEvent = (e: WheelEvent) => {
			console.log(e.deltaY);
			setScrollVelocity(e.deltaY);
		};

		if (sliderIsInView) {
			gsapInit();

			document.addEventListener("wheel", handleWheelEvent);
		}

		return () => {
			if (!sliderIsInView) {
				document.removeEventListener("wheel", handleWheelEvent);
			}
		};
	}, [scrollVelocity, sliderIsInView]);

	return (
		<div className="w-full flex flex-col overflow-auto md:overflow-scroll md:flex-row gap-2 no-scrollbar my-8 md:my-24 cursor-none">
			<div
				ref={projectSliderRef}
				className="w-full flex flex-col md:flex-row gap-2">
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
		</div>
	);
};

// PSUEDO
// - When scroll slider ref in view -> lock screen
// - Measure scroll velocity and save in state.
// - Animate X: with scrollVelocity being relative to width container
// - Make it with
