"use client";

import { useRef } from "react";

import type { Media as MediaType } from "@/types/types.common";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { useInView } from "framer-motion";
import { Cursor } from "./Cursor";
import { Media } from "./Media";
import { useMouseMovement } from "@/hooks/useMouseMovement";

type SliderCardProps = {
	slug: string;
	title: string;
	profession: string;
	image: MediaType;
	video?: MediaType;
	cursor?: string;
};

type HomeSliderProps = {
	projects: Array<SliderCardProps>; // fix type later
};

export const HomeSlider = ({ projects }: HomeSliderProps) => {
	const sliderContainerRef = useRef<HTMLDivElement | null>(null);
	const sliderInView = useInView(sliderContainerRef, { once: true, amount: 1 });

	return (
		<div
			ref={sliderContainerRef}
			className="w-full md:h-screen overflow-hidden flex justify-center items-center">
			<SliderRails>
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
	);
};

export const SliderRails = ({ children }: PropsWithChildren) => {
	return (
		<div className="w-full h-full py-2 md:py-9 flex justify-center items-center flex-row overflow-y-hidden overflow-x-scroll flex-shrink-0">
			<div className="w-full h-fit flex flex-col gap-1 md:flex-row md:gap-2">
				{children}
			</div>
		</div>
	);
};

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
			className="w-full md:max-w-[720px] h-fit relative aspect-[3/4] flex justify-center items-center shrink-0 overflow-hidden bg-black-primary">
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
