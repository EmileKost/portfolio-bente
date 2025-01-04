import { Button } from "../Button";

import { footerContent } from "@/constants/footer";
import { FooterButton } from "../FooterButton";

export const TheFooter = () => {
	return (
		<footer className="w-full px-3 md:px-8 flex flex-col gap-[250px] md:gap-12 pb-24 md:pb-8 text-black-primary">
			<div className="w-full flex justify-center items-center shrink-0">
				<FooterButton
					title={footerContent.title}
					href="mailto:emilekost00@gmail.com"
				/>
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
					<p className="uppercase">&#169;{footerContent.tradeMark}</p>
				</div>
				<div className="w-full max-w-[200px] text-end">
					{/* TODO: svg here!! */}
					<p>{footerContent.birds}</p>
				</div>
			</div>
		</footer>
	);
};
