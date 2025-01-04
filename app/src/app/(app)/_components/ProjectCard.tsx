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
			className={twMerge("h-full w-full md:max-w-[700px] relative", className)}>
			<div className="w-full h-full">
				<Image
					src={image}
					alt={title}
					height={900}
					width={700}
					className={twMerge("object-cover h-full w-full")}
				/>
				{/* TODO: Handle video */}
			</div>
			<div className="absolute bottom-0 left-0 w-full px-2 pb-1 flex justify-between">
				<span>
					{index}/{length}
				</span>
				<div className="flex gap-2">
					<h3>{title}</h3>
					<span>{projectType}</span>
				</div>
			</div>
		</div>
	);
};
