// This scroll rails is used to set up animation for the homepage scroll.
"use client";

import { useEffect, useRef } from "react";

import HomeHero from "./HomeHero";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const ScrollRails = ({ projects }) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const sliderRef = useRef<HTMLDivElement>(null);

	// TODO:
	// - Think how we can get correct start -> end
	// - Think of time line solution
	// - We need to calculate the perfect end for the slider

	useEffect(() => {
		ScrollTrigger.create({
			trigger: containerRef.current,
			end: () => `${containerRef?.current?.scrollHeight}px`, // Set dynamic end
			pin: true,
			scrub: 1.5,
			pinSpacing: true,
			markers: true,
			onUpdate: ({ progress }) =>
				gsap.to(sliderRef.current, {
					x: -(progress * 350),
					duration: 1,
					ease: "easeOut",
				}),
		});
	});

	return (
		<div className="w-full h-screen overflow-hidden">
			<div
				ref={containerRef}
				className="w-full h-[500vh] overflow-hidden relative">
				<div
					ref={sliderRef}
					className="absolute w-[300vw] h-screen overflow-hidden">
					<div className="w-screen h-screen overflow-hidden px-3 md:px-8">
						<HomeHero />
					</div>
				</div>
			</div>
		</div>
	);
};
