import { useState, useRef } from "react";

import { Media } from "@/components/Media";
import { Cursor } from "@/components/Cursor";

import Link from "next/link";

import { handleMousePosition } from "@/utils/handleMousePosition";

import { twMerge } from "tailwind-merge";

import type { ProjectCard as ProjectCardType } from "@/types/project";

export const ProjectCard = ({
	title,
	url,
	image,
	video,
	projectType,
	index,
	length,
	className,
}: ProjectCardType) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState<boolean>(false);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const containerRef = useRef<HTMLAnchorElement>(null);

	return (
		<Link
			ref={containerRef}
			href={`/projects/${url}`}
			onMouseMove={(e) => {
				handleMousePosition(e, containerRef, setPosition);
				setIsHovering(true);
			}}
			onMouseLeave={() => setIsHovering(false)}
			className={twMerge(
				"aspect-[3/4] shrink-0 w-full h-auto md:max-w-[550px] relative",
				className
			)}>
			<Media
				image={image}
				video={video}
				title={title}
				isPlaying={isPlaying}
			/>
			<div className="z-20 absolute bottom-0 left-0 w-full px-2 pb-1 flex justify-between text-base text-white-primary">
				<span>
					{index + 1}/{length}
				</span>
				<div className="flex gap-3 uppercase !text-white-primary">
					<h3>{title}</h3>
					<span className="opacity-80">{projectType}</span>
				</div>
			</div>
			<Cursor
				isHovering={isHovering}
				className="bg-black-dark text-white-primary"
				content="View"
				position={position}
			/>
		</Link>
	);
};
