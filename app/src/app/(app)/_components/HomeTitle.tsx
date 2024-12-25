"use client";

import { useBreakpointValue } from "@/hooks/useBreakpointValue";
import { removeVowels } from "@/utils/removeVowels";

import { WINDOW_SIZES } from "@/constants/windowSizes";

export default function HomeTitle({ title }: { title: string }) {
	const { width } = useBreakpointValue();

	return (
		<div className="w-full">
			<h1>{width > WINDOW_SIZES.MD ? removeVowels(title) : title}</h1>
		</div>
	);
}
