"use client";

import { Button } from "./Button";

import { useFullTextContent } from "@/app/(app)/_hooks/useFullTextContent";

type FooterButtonProps = {
	title: string;
	href: string;
};

export const FooterButton = ({ title, href }: FooterButtonProps) => {
	const titleArray = useFullTextContent(title, false, "sentence");

	return (
		<Button
			as="a"
			variant="link"
			href={href}
			className="w-full h-auto flex uppercase font-bold">
			<span className="hidden md:flex w-full justify-between text-[10vw]">
				<span className="sr-only">{title}</span>
				{titleArray.map((item, idx) => (
					<span key={`${item}${idx}`}>{item}</span>
				))}
			</span>
		</Button>
	);
};
