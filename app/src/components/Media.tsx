// Used for media items that can both be an video or video
// - With classname you should set aspect ratio yourself if needed.
import type { Ref } from "react";
import { forwardRef, ReactNode } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import classNames from "classnames";
import { Media as MediaType } from "@/types/types.common";

type MediaProps = {
	className?: string;
	image: {
		url: string;
		alt: string;
	};
	video?: MediaType | undefined;
	isPlaying: boolean;
	cursor?: ReactNode | undefined;
};

export const Media = forwardRef(function Media(
	{ className, image, video, isPlaying = false, cursor }: MediaProps,
	ref: Ref<HTMLDivElement> | undefined
) {
	return (
		<div
			ref={ref}
			className={classNames(
				"w-full relative overflow-hidden bg-black-primary cursor-none",
				className
			)}>
			<div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
				<motion.div className="w-full h-full">
					<Image
						width={1447}
						height={960}
						src={image.url}
						alt={image.alt}
						className="w-full h-full object-cover z-20"
					/>
				</motion.div>

				{video && (
					<div className="w-full h-full">
						<video
							className="object-cover w-full"
							autoPlay={isPlaying}
							muted
							src={video.src}
							controls={false}>
							<p className="absolute left-2 bottom-2 text-white font-light text-base">
								Video failed to load...
							</p>
						</video>
					</div>
				)}
			</div>
			{cursor && cursor}
		</div>
	);
});
