import { useState } from "react";

import Image from "next/image";

import { twMerge } from "tailwind-merge";

import type { ProjectCard as ProjectCardType } from "@/types/project";

export const ProjectCard = ({
	title,
	image,
	video,
	projectType,
	index,
	length,
	className,
}: ProjectCardType) => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	return (
		<div
			className={twMerge(
				"aspect-[3/4] w-full h-auto md:max-w-[700px] relative",
				className
			)}>
			<div className="w-full h-full">
				<Image
					src={image}
					alt={title}
					height={900}
					width={700}
					className={twMerge(
						"object-cover h-full w-full",
						video && "absolute top-0 bottom-0",
						isPlaying ? "opacity-0" : "opacity-100"
					)}
				/>
				{video && (
					<video
						src={video}
						autoPlay={isPlaying}
						muted
						className="w-full h-full object-cover absolute top-0 left-0"></video>
				)}
			</div>
			<div className="z-20 absolute bottom-0 left-0 w-full px-2 pb-1 flex justify-between text-base text-white-primary">
				<span>
					{index + 1}/{length + 1}
				</span>
				<div className="flex gap-3 uppercase !text-white-primary">
					<h3>{title}</h3>
					<span className="opacity-80">{projectType}</span>
				</div>
			</div>
		</div>
	);
};
