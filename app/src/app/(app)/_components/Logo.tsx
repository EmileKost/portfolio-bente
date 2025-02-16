"use client";

import { useFullTextContent } from "../_hooks/useFullTextContent";

export const Logo = ({ text }: { text: string }) => {
	const logoContent = useFullTextContent(text);

	return (
		<h1
			id="logo"
			className="uppercase font-bold flex justify-between text-[30vw] md:text-[16vw] w-full">
			{logoContent.map((item, idx) => (
				<span key={`${item}${idx}`}>{item}</span>
			))}
		</h1>
	);
};
