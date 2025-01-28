import { forwardRef } from "react";
import type { ForwardedRef, RefObject } from "react";

import { motion } from "framer-motion";
import classNames from "classnames";

import { useMouseMovement } from "@/hooks/useMouseMovement";

type CursorProps = {
	text?: string;
	target: RefObject<HTMLDivElement>;
	className?: string;
	isVisible: boolean;
};

export const Cursor = forwardRef(function Cursor(
	{ text, target, className, isVisible }: CursorProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	const { x, y } = useMouseMovement(target);

	console.log(x, y);

	return (
		<motion.div
			ref={ref}
			aria-hidden="true"
			className={classNames(
				"block w-8 h-8 p-1 rounded-full bg-white absolute left-0 top-0 text-base uppercase",
				className
			)}
			animate={{
				x: x,
				y: y,
				opacity: isVisible ? 1 : 0,
			}}>
			{text && text}
		</motion.div>
	);
});
