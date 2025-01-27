import { forwardRef, useState } from "react";
import type { ForwardedRef, RefObject } from "react";

import { motion } from "framer-motion";
import classNames from "classnames";

import { useMouseMovement } from "@/hooks/useMouseMovement";

type CursorProps = {
	text?: string;
	target: RefObject<HTMLDivElement>;
	className?: string;
};

export const Cursor = forwardRef(function Cursor(
	{ text, target, className }: CursorProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	const { x, y } = useMouseMovement(target);

	return (
		<motion.div
			ref={ref}
			aria-hidden="true"
			className={classNames("w-8 h-8 p-1 rounded-full bg-white", className)}
			style={{
				position: "absolute",
				left: 0,
				top: 0,
				opacity: 0,
			}}>
			{text && text}
		</motion.div>
	);
});

// We should include cursor styling in the project itself so Bente can go completely freely in
// customizing this
