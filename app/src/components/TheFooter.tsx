import { Button } from "./Button";

import { footerContent } from "@/constants/footer";

export const TheFooter = () => {
	return (
		<footer className="w-full px-3 md:px-8 flex flex-col pt-6 pb-2">
			<div className="w-full flex justify-center items-center shrink-0">
				<h2>{footerContent.title}</h2>
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
				<div>
					{/* TODO: svg here!! */}
					<p>{footerContent.birds}</p>
				</div>
			</div>
		</footer>
	);
};
