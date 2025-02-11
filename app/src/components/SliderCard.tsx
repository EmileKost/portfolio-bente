"use client";

import { useRef, useEffect } from "react";

import type { Media as MediaType } from "@/types/types.common";
import Image from "next/image";
import Link from "next/link";

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

export const SliderCard = ({
	project,
	index,
	length,
}: {
	project: SliderCardProps;
	index: number;
	length: number;
}) => {
	const cursorRef = useRef(null);

	// Add cursor
	const { isHovering, position } = useMouseMovement(cursorRef);

	return (
		<Link
			ref={cursorRef}
			href={`/projects/${project.slug}`}
			className="w-full aspect-[3/4] md:max-w-[750px] h-auto relative shrink-0 flex items-end overflow-hidden">
			<div className="w-full flex justify-between z-30 px-2 pb-3 bg-gradient-to-t from-black-primary/80 to-transparent">
				<h4 className="text-xxs md:text-base text-white-primary">{`${
					index + 1
				}/${length}`}</h4>
				<div className="flex gap-2">
					<h2 className="text-xxs md:text-base flex text-white-primary">
						{project.title}
					</h2>
					<h4 className="text-xxs md:text-base flex text-white-primary">
						{project.profession}
					</h4>
				</div>
			</div>
			<div className="w-full h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden">
				<Image
					width={520}
					height={680}
					alt={project.image.alt}
					src={project.image.src}
					className="w-full h-full object-cover"
				/>
			</div>
		</Link>
	);
};
