import { Container } from "./containers/Container";

import classNames from "classnames";

type TitleTextBannerProps = {
	title: string;
	description: string;
	className?: string;
};

export const TitleTextBanner = ({
	title,
	description,
	className,
}: TitleTextBannerProps) => {
	return (
		<div className="w-full flex justify-end">
			<Container
				size="MEDIUM"
				className={classNames(
					"flex flex-col md:flex-row gap-4 uppercase justify-end",
					className
				)}>
				<h1 className="text-base md:text-2xl text-black-primary">{title}</h1>
				<p className="text-base text-black-secondary">{description}</p>
			</Container>
		</div>
	);
};
