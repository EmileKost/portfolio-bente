import type { PropsWithChildren } from "react";

import classNames from "classnames";

type CONTAINER_SIZES = "WIDE" | "MEDIUM";

export const Container = ({
	children,
	size,
	className,
}: PropsWithChildren & { size: CONTAINER_SIZES; className?: string }) => {
	return (
		<div
			className={classNames(className, {
				"w-full h-full px-4 md:px-8": size === "WIDE",
				" md:max-w-[600px]": size === "MEDIUM",
			})}>
			{children}
		</div>
	);
};
