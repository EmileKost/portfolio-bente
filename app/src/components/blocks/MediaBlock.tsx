"use client";

import { forwardRef, useRef, useState } from "react";
import Image from "next/image";

import type { ForwardedRef, RefObject } from "react";

import type { Media } from "@/types/types.common";

import { motion } from "framer-motion";
import classNames from "classnames";

import { Cursor } from "../Cursor";

export const MediaBlock = forwardRef(function MediaBlock(
	{
		labels,
		thumbnail, // will serve as image if no video provided
		video,
		displayCursor = true,
		cursorText,
		autoPlay = false,
		className,
	}: {
		labels?: Array<string>;
		thumbnail: Media;
		video?: Media;
		displayCursor?: boolean;
		cursorText?: string;
		autoPlay?: boolean;
		className?: string;
	},
	ref: ForwardedRef<HTMLDivElement>
) {
	const [isPlaying] = useState<boolean>(autoPlay);
	const [isHovering, setIsHovering] = useState<boolean>(false);

	const cursorRef = useRef<HTMLDivElement | null>(null);

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
				ref={cursorRef}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				className="w-full relative overflow-hidden bg-black-primary aspect-[3/2]">
				<div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
					<motion.div className="w-full h-full">
						<Image
							width={1447}
							height={960}
							src={thumbnail.url}
							alt={thumbnail.alt}
							className="w-full h-auto object-cover z-20"
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

				{/* TODO: Fix ugly type here */}
				{displayCursor && (
					<Cursor
						target={cursorRef as RefObject<HTMLDivElement>}
						content={cursorText as string}
						isHovering={isHovering}
					/>
				)}
			</div>
		</div>
	);
});
