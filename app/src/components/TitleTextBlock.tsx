import { twMerge } from "tailwind-merge";

export default function TitleTextBlock({
	title,
	text,
	label,
	size,
	className, // for the text block
}: {
	title: string;
	text?: string;
	label?: string;
	className?: string;
	size: "small" | "medium" | "wide";
}) {
	return (
		<div
			className={twMerge(
				// TODO: Find better library that lets us apply dynamic style other then ternary
				"flex flex-col md:flex-row gap-4 w-full",
				size === "small" ? "md:max-w-[700px]" : "",
				size === "medium" ? "md:max-w-[80%]" : "",
				size === "wide" ? "md:max-w-full md:justify-between" : ""
			)}>
			<div className="flex flex-col md:flex-row gap-10">
				{label && <span className="uppercase text-base">{label}</span>}
				<h2 className="uppercase text-base md:text-2xl w-full">{title}</h2>
			</div>
			{text && <p className={twMerge("text-base w-full", className)}>{text}</p>}
		</div>
	);
}
