import { ComponentProps, ElementType, ReactNode } from "react";

import { twMerge } from "tailwind-merge";

// TODO: How to render as=a as <Link> from Next
type ButtonBaseProps = {
	variant: "primary" | "link";
	className?: string;
	children: ReactNode;
};

type ButtonProps<E extends ElementType> = ButtonBaseProps & {
	as?: E;
} & Omit<ComponentProps<E>, keyof ButtonBaseProps>;

export function Button<E extends ElementType = "button">({
	as,
	variant,
	className,
	children,
	...props
}: ButtonProps<E>) {
	const Component = as || "button";
	console.log(variant);

	return (
		<Component
			{...props}
			className={twMerge("", className)}>
			{children}
		</Component>
	);
}
