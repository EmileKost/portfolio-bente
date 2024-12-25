"use client";

import { useBreakpointValue } from "@/hooks/useBreakpointValue";
import { removeVowels } from "@/utils/removeVowels";

import { WINDOW_SIZES } from "@/constants/windowSizes";
import { twMerge } from "tailwind-merge";

// TODO: Think of better way of setting font to full width
export default function HomeTitle({ title }: { title: string }) {
	const { width } = useBreakpointValue();

	return (
		<div className="w-full">
			<h1
				className={twMerge(
					"uppercase text-start md:text-end font-bold text-nowrap text-[16.5vw]"
				)}>
				{width > WINDOW_SIZES.MD ? title : removeVowels(title)}
			</h1>
		</div>
	);
}
