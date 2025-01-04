import { twMerge } from "tailwind-merge";
import Image from "next/image";

type MediaProps = {
	image: string;
	video?: string;
	title: string;
	placeholder?: string;
	isPlaying: boolean;
	className?: string;
};

export const Media = ({
	image,
	video,
	title,
	placeholder,
	isPlaying,
	className,
}: MediaProps) => (
	<div className={twMerge("w-full h-full", className)}>
		<Image
			src={placeholder ?? image}
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
);
