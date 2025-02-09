import classNames from "classnames";

export default function TitleTextBlock({
	title,
	text,
	label,
	size,
	className,
}: {
	title: string;
	text?: string;
	label?: string;
	className?: string;
	size: "small" | "medium" | "wide";
}) {
	return (
		<div
			className={classNames(
				"flex flex-col md:flex-row gap-4 w-full",
				size === "small" ? "md:max-w-[700px]" : "",
				size === "medium" ? "md:max-w-[80%]" : "",
				size === "wide" ? "md:max-w-full md:justify-between" : ""
			)}>
			<div className="flex flex-col md:flex-row gap-10">
				{label && <span className="uppercase text-base">{label}</span>}
				<h2 className="uppercase text-base md:text-2xl w-full">{title}</h2>
			</div>
			{text && (
				<p className={classNames("text-base w-full", className)}>{text}</p>
			)}
		</div>
	);
}
