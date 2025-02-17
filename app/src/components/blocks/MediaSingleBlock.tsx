"use client";

import { forwardRef, useRef } from "react";

import type { ForwardedRef } from "react";

import type { Media as MediaType } from "@/types/types.common";

import { Media } from "../Media";

import classNames from "classnames";

import { useMouseMovement } from "@/hooks/useMouseMovement";

import { Cursor } from "../Cursor";

type MediaBlockProps = {
	labels?: Array<string>;
	image: MediaType;
	video?: MediaType;
	displayCursor?: boolean;
	cursorText?: string;
	isPlaying?: boolean;
	className?: string;
};

export const MediaBlock = forwardRef(function MediaBlock(
	{
		labels,
		image,
		video,
		displayCursor = true,
		cursorText,
		isPlaying = false,
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
			<Media
				ref={mediaRef}
				image={image}
				isPlaying={isPlaying}
				video={video ?? undefined}
				className="aspect-[1/2] md:aspect-[16/9]"
				cursor={
					displayCursor ? (
						<Cursor
							isVisible={isHovering}
							position={position}>
							<span className="p-2 rounded-full bg-red-600 mix-blend-difference">
								{cursorText}
							</span>
						</Cursor>
					) : undefined
				}
			/>
		</div>
	);
});
