import { forwardRef, Ref } from "react";

import { Label } from "../Label";

import classNames from "classnames";

import type { ExtendContentStyles } from "@/types/types.common";

type HeroContextBlockProps = {
	title: string;
	label?: string;
	text?: string;
	className?: ExtendContentStyles;
};

export const LargeHeroContentBlock = forwardRef(function LargeHeroContentBlock(
	{ title, label, text, className }: HeroContextBlockProps,
	ref: Ref<HTMLDivElement>
) {
	return (
		<div
			ref={ref}
			className={classNames(
				"flex flex-col md:flex-row justify-between w-full gap-4 md:gap-20 py-2 md:py-[200px]",
				className?.container
			)}>
			<div className="flex flex-col md:flex-row gap-10 md:gap-8">
				{label && <Label>{label}</Label>}
				<h1
					className={classNames(
						"text-base md:text-2xl uppercase",
						className?.title
					)}>
					{title}
				</h1>
			</div>
			{text && (
				<p className={classNames("text-base", className?.text)}>{text}</p>
			)}
		</div>
	);
});
