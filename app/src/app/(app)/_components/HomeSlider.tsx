"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { SliderCard } from "@/components/SliderCard";

gsap.registerPlugin(ScrollTrigger);

export const HomeSlider = ({ projects }: { projects: any }) => {
	const triggerRef = useRef<HTMLDivElement>(null);
	const animatorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// const tl = gsap.timeline({});
		const animator = animatorRef.current;

		if (animator) {
			ScrollTrigger.create({
				trigger: triggerRef.current,
				start: "top top",
				markers: true,
				pin: true,
				end: () => "+=" + (animator.scrollWidth + animator.clientWidth),
				scrub: 2,
				onUpdate: ({ progress }) => {
					console.log(progress);
					gsap.to(animatorRef.current, {
						x: -animator.scrollWidth * progress, // adjust later
						ease: "power2.out",
						duration: 0.75,
					});
				},
			});
		}

		return () => ScrollTrigger.killAll();
	});

	return (
		<div
			ref={triggerRef}
			className="w-full h-screen overflow-hidden relative flex items-center snap-center">
			{projects.length > 0 && (
				<div
					ref={animatorRef}
					className="w-full h-screen absolute top-0 left-0 flex flex-col md:flex-row items-center gap-1">
					{projects.map((project, idx) => (
						<SliderCard
							project={project}
							key={project.title}
							length={projects.length}
							index={idx}
						/>
					))}
				</div>
			)}
		</div>
	);
};
