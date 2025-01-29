"use client";

import { forwardRef, useRef } from "react";
import Image from "next/image";

import type { ForwardedRef } from "react";

import type { Media } from "@/types/types.common";

import { motion } from "framer-motion";
import classNames from "classnames";

import { useMouseMovement } from "@/hooks/useMouseMovement";

import { Cursor } from "../Cursor";

type MediaBlockProps = {
	labels?: Array<string>;
	thumbnail: Media;
	video?: Media;
	displayCursor?: boolean;
	cursorText?: string;
	autoPlay?: boolean;
	className?: string;
};

export const MediaBlock = forwardRef(function MediaBlock(
	{
		labels,
		thumbnail,
		video,
		displayCursor = true,
		cursorText,
		autoPlay = false,
		className,
	}: MediaBlockProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	const mediaRef = useRef<HTMLDivElement>(null);

	const { position, isHovering } = useMouseMovement(mediaRef);

	return (
		<div
			className={classNames("w-full flex flex-col gap-3", className)}
			ref={ref}>
			{labels && labels.length > 0 && (
				<ul className="flex justify-between items-center w-full">
					{labels.map((label, idx) => (
						<li
							key={label}
							className={classNames(
								"text-base font-light max-w-[75%] md:max-w-[280px] uppercase",
								idx > 0 && "hidden md:inline-block"
							)}>
							{label}
						</li>
					))}
				</ul>
			)}
			<div
				ref={mediaRef}
				className="w-full relative overflow-hidden bg-black-primary aspect-[1/2] md:aspect-[16/9] cursor-none">
				<div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
					<motion.div className="w-full h-full">
						<Image
							width={1447}
							height={960}
							src={thumbnail.url}
							alt={thumbnail.alt}
							className="w-full h-full object-cover z-20"
						/>
					</motion.div>

					{video && (
						<div className="w-full h-full">
							<video
								className="object-cover w-full"
								autoPlay={autoPlay}
								muted
								src={video.url}
								controls={false}>
								<p className="absolute left-2 bottom-2 text-white font-light text-base">
									Video failed to load...
								</p>
							</video>
						</div>
					)}
				</div>

				{displayCursor && (
					<Cursor
						text={cursorText}
						isVisible={isHovering}
						position={position}
						className="p-2 rounded-full bg-transparent bg-red-600 mix-blend-difference text-white"
					/>
				)}
			</div>
		</div>
	);
});
