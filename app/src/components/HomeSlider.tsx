"use client";

import { forwardRef, useRef, useEffect } from "react";
import type { Ref } from "react";

import type { Media as MediaType } from "@/types/types.common";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { Cursor } from "./Cursor";
import { Media } from "./Media";
import { useMouseMovement } from "@/hooks/useMouseMovement";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SliderCardProps = {
	slug: string;
	title: string;
	profession: string;
	image: MediaType;
	video?: MediaType;
	cursor?: string;
};

type HomeSliderProps = {
	projects: Array<SliderCardProps>;
};

export const HomeSlider = ({ projects }: HomeSliderProps) => {
	const sliderContainerRef = useRef<HTMLDivElement>(null);
	const sliderRailsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function amountToScroll(): number {
			if (sliderRailsRef.current) {
				return -sliderRailsRef.current.offsetWidth - window.innerWidth;
			}

			return 0;
		}

		if (sliderContainerRef.current && sliderRailsRef.current) {
			const sliderAnimation = gsap.to(sliderRailsRef.current, {
				x: amountToScroll,
			});

			// TODO:
			// - Fix smoother end
			// - Why not ending on width end?

			ScrollTrigger.create({
				trigger: sliderContainerRef.current,
				pin: true,
				start: "top 0%",
				end: "+=" + amountToScroll() * -1,
				scrub: 1.75,
				markers: true,
				pinSpacing: true,
				invalidateOnRefresh: true,
				animation: sliderAnimation,
			});
		}

		return;
	});

	return (
		<>
			<div
				ref={sliderContainerRef}
				id="test"
				className="w-full md:h-screen overflow-hidden flex flex-col justify-center items-center">
				<div className="w-full h-full py-2 md:py-9 flex justify-center items-center flex-row overflow-hidden flex-shrink-0">
					<SliderRails ref={sliderRailsRef}>
						{projects.length > 0 &&
							projects.map((project, idx) => (
								<SliderCard
									key={project.title}
									project={project}
									index={idx}
									length={projects.length}
								/>
							))}
					</SliderRails>
				</div>
			</div>
		</>
	);
};

export const SliderRails = forwardRef(function SliderRails(
	{ children }: PropsWithChildren,
	ref: Ref<HTMLDivElement>
) {
	return (
		<div
			ref={ref}
			className="w-auto h-full flex flex-col gap-1 md:flex-row md:gap-2 bg-black-primary">
			<>{children}</>
		</div>
	);
});

const SliderCard = ({
	project,
	index,
	length,
}: {
	project: SliderCardProps;
	index: number;
	length: number;
}) => {
	const cursorRef = useRef(null);

	const { isHovering, position } = useMouseMovement(cursorRef);

	return (
		<Link
			ref={cursorRef}
			href={`/projects/${project.slug}`}
			className="slider-item relative w-full md:w-auto h-auto md:max-h-[80vh] aspect-[3/4] flex justify-center items-center shrink-0 overflow-hidden bg-black-primary">
			<Media
				image={{
					src: project.image.src,
					alt: "image",
				}}
				video={project.video}
				className="aspect-[3/4]"
				cursor={
					<Cursor
						isVisible={isHovering}
						position={position}
						text={project.cursor ?? "See project"}
						className={{
							text: "text-white-primary text-xxs font-light",
							container: "bg-red-500 bg-opacity-80 mix-blend-difference",
						}}
					/>
				}
			/>
			<div className="absolute w-full bottom-0 left-0 p-2 md:p-4 flex justify-between">
				<div>
					<h5 className="text-white-primary text-xxs md:text-base">{`${
						index + 1
					}/${length}`}</h5>
				</div>
				<div className="flex space-x-3 text-xxs md:text-base">
					<h4 className="text-white-primary">{project.title}</h4>
					<h4 className="hidden md:inline-block font-light text-white-primary">
						{project.profession}
					</h4>
				</div>
			</div>
		</Link>
	);
};
