import { forwardRef, useRef, useEffect } from "react";
import type { PropsWithChildren, ReactNode, Ref } from "react";

import Link from "next/link";
import Image from "next/image";

import { HomeHero } from "./HomeHero";
import { Cursor } from "@/components/Cursor";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Project } from "@/types/types.common";

import { useMouseMovement } from "@/hooks/useMouseMovement";

gsap.registerPlugin(ScrollTrigger);

export const HomeSlider = ({ projects }: { projects: Array<Project> }) => {
	const animateWindowRef = useRef<HTMLDivElement | null>(null);
	const railsRef = useRef<HTMLDivElement | null>(null);

	// Animate containers
	const verticalAnimationRef = useRef<HTMLDivElement | null>(null);
	const projectSliderRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: animateWindowRef.current,
				start: "top top",
				pin: true,
				markers: true,
				scrub: 8,
			},
		});

		timeline
			.to("body", { duration: 1.5 }) // serves as delay
			.to("#logo", {
				skewY: 0.5,
				duration: 1,
				ease: "sine.in",
			})
			.to("#logo", {
				y: -30,
				duration: 5,
				delay: 0.2,
				ease: "sine.in",
			})
			// Hero to Slider
			.to(verticalAnimationRef.current, {
				y: "-100vh",
				duration: 80,
				ease: "power2.inOut",
			})
			// Slider
			.to(projectSliderRef.current, { duration: 28 })
			.to(projectSliderRef.current, {
				xPercent: -100,
				duration: 140,
				ease: "linear",
			})
			.to(projectSliderRef.current, { duration: 28 });
	});

	return (
		<AnimateWindow ref={animateWindowRef}>
			<Rails ref={railsRef}>
				<div
					ref={verticalAnimationRef}
					className="w-full h-screen">
					<HomeHero />
					<div className="w-full h-screen">
						{projects && projects.length > 0 && (
							<ProjectSlider ref={projectSliderRef}>
								{projects.map((project, idx) => (
									<SliderCard
										key={project.slug}
										project={project}
										relativeIndex={`${idx + 1}/${projects.length}`}
									/>
								))}
							</ProjectSlider>
						)}
					</div>
				</div>
			</Rails>
		</AnimateWindow>
	);
};

export const AnimateWindow = forwardRef(function AnimateWindow(
	{
		children,
	}: {
		children: ReactNode;
	},
	ref: Ref<HTMLDivElement> | undefined
) {
	return (
		<div
			ref={ref}
			className="w-screen h-screen overflow-hidden">
			{children}
		</div>
	);
});

export const Rails = forwardRef(function Rails(
	{
		children,
	}: {
		children: ReactNode;
	},
	ref: Ref<HTMLDivElement>
) {
	return (
		<div
			ref={ref}
			className="w-full h-screen overflow-hidden flex flex-col md:flex-row gap-1 items-center">
			{children}
		</div>
	);
});

export const ProjectSlider = forwardRef(function ProjectSlider(
	{ children }: PropsWithChildren,
	ref: Ref<HTMLDivElement>
) {
	return (
		<div className="h-screen w-screen overflow-hidden px-3 md:px-8 flex items-center justify-center">
			<div
				ref={ref}
				className="w-full h-full flex flex-col md:flex-row gap-1 items-center">
				{children}
			</div>
		</div>
	);
});

export const SliderCard = ({
	project,
	relativeIndex,
}: {
	project: Project;
	relativeIndex: string;
}) => {
	const cursorRef = useRef<HTMLAnchorElement | null>(null);
	const { isHovering, position } = useMouseMovement(cursorRef);

	return (
		<Link
			href={`/projects/${project.slug}`}
			ref={cursorRef}
			className="w-full md:w-[48vw] h-full max-h-[80vh] shrink-0 relative cursor-none overflow-hidden">
			<div className="w-full h-full relative flex items-end">
				<div className="w-full h-full -z-10 absolute top-0 left-0 flex justify-center items-center">
					<Image
						height={880}
						width={720}
						src={`/projects/project-1.png`}
						alt="Test"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="w-full flex justify-between items-center px-1.5 py-0.5 md:px-2 md:py-2">
					<span className="text-white-primary text-xxs md:text-base">
						{relativeIndex}
					</span>
					<div className="flex gap-0.5">
						<h4 className="text-white-primary text-xxs md:text-base">
							{project.title}
						</h4>
						<span className="text-white-primary/80 hidden md:inline-block text-xxs md:text-base">
							{project.profession}
						</span>
					</div>
				</div>
			</div>

			<Cursor
				isVisible={isHovering}
				position={position}
				className="bg-white-primary mix-blend-difference">
				<span className="text-xxs md:text-xs flex items-center justify-center p-2 rounded-full aspect-square">
					{project.cursor}
				</span>
			</Cursor>
		</Link>
	);
};
