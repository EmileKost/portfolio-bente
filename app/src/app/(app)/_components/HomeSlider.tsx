import { forwardRef, useRef, useEffect } from "react";
import type { PropsWithChildren, ReactNode, Ref } from "react";

import Link from "next/link";

import HomeHero from "./HomeHero";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const HomeSlider = () => {
	const animateWindowRef = useRef<HTMLDivElement | null>(null);
	const railsRef = useRef<HTMLDivElement | null>(null);

	// Animate containers
	const verticalAnimationRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: animateWindowRef.current,
				start: "top top",
				pin: true,
				markers: true,
				scrub: 1,
			},
		});

		timeline
			.to(animateWindowRef.current, { duration: 1.5 }) // serves as delay
			.to("#logo", {
				skewY: 1,
				duration: 1,
				ease: "sine.in",
			})
			.to("#logo", {
				y: -30,
				duration: 1,
				delay: 0.2,
				ease: "sine.in",
			})
			.to(verticalAnimationRef.current, {
				y: "-100vh",
				duration: 8,
				ease: "power2.inOut",
			});
	});

	return (
		<AnimateWindow ref={animateWindowRef}>
			<Rails ref={railsRef}>
				<div
					ref={verticalAnimationRef}
					className="w-full h-screen">
					<HomeHero />
					<div className="w-full h-screen">
						<ProjectSlider></ProjectSlider>
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
		<div
			ref={ref}
			className="h-screen w-screen overflow-hidden px-3 md:px-8 flex items-center justify-center">
			<div className="flex flex-col md:flex-row gap-1 items-center">
				{children}
			</div>
		</div>
	);
});

export const SliderCard = ({ project }) => {
	return <Link href={project.href}></Link>;
};
