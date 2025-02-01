import { PropsWithChildren } from "react";

import classNames from "classnames";

export const Label = ({
	className,
	children,
}: {
	className?: string;
} & PropsWithChildren) => (
	<span className={classNames("text-xs md:text-base", className)}>
		{children}
	</span>
);
