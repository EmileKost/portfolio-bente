import { Button } from "../Button";
import { FooterLogo } from "./FooterLogo";

import { footerContent } from "@/constants/footer";

export const TheFooter = () => {
	return (
		<footer className="w-full px-3 md:px-8 flex flex-col gap-[250px] md:gap-12 pb-24 md:pb-8">
			<div className="w-full flex justify-center items-center shrink-0">
				<Button
					as="a"
					variant="link"
					href="mailto:emilekost00@gmail.com"
					className="w-full h-auto">
					<span className="sr-only">{footerContent.title}</span>
					<FooterLogo />
				</Button>
			</div>
			<div className="flex justify-between items-start">
				<p className="hidden md:block w-full md:max-w-[350px]">
					{footerContent.text}
				</p>
				<div className="flex flex-col">
					<Button
						as="a"
						variant="link"
						href={footerContent.linkedin.href}
						target="_blank"
						className="uppercase">
						{footerContent.linkedin.title}
					</Button>
					<p className="uppercase">{footerContent.tradeMark}</p>
				</div>
				<div className="w-full md:max-w-[200px] text-end">
					{/* TODO: svg here!! */}
					<p>{footerContent.birds}</p>
				</div>
			</div>
		</footer>
	);
};
