import { ExtendContentStyles } from "@/types/types.common";
import { Label } from "../Label";
import classNames from "classnames";

type TitleTextBlockProps = {
	title?: string;
	text?: Array<string>;
	label?: string;
	className?: ExtendContentStyles;
};

export const TitleTextBlock = ({
	title,
	text,
	label,
	className,
}: TitleTextBlockProps) => {
	return (
		<div
			className={classNames(
				"flex flex-col md:flex-row gap-4 w-full",
				className?.container
			)}>
			<div className="flex flex-col md:flex-row gap-8 md:gap-14">
				{label && <Label className="text-base">{label}</Label>}
				{title && (
					<h3
						className={classNames(
							"text-base md:text-2xl uppercase",
							className?.title
						)}>
						{title}
					</h3>
				)}
			</div>
			{text && text.length > 0 && (
				<div className="flex flex-col md:flex-row gap-4 md:flex-wrap">
					{text.map((content) => (
						<p
							key={content}
							className={classNames("text-base", className?.text)}>
							{content}
						</p>
					))}
				</div>
			)}
		</div>
	);
};
