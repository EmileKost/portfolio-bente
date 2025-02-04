import type { MousePosition } from "@/hooks/useMouseMovement";

import { motion, AnimatePresence } from "framer-motion";

import classNames from "classnames";

type CursorProps = {
	isVisible: boolean;
	position: MousePosition;
	className?: string;
	text?: string;
};

const variants = {
	initial: {
		scale: 0,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
	},
};

export const Cursor = ({
	isVisible,
	position,
	text,
	className,
}: CursorProps) => (
	<AnimatePresence>
		{isVisible && (
			<motion.div
				className={classNames(
					"absolute top-0 left-0 aspect-square rounded-full flex justify-center items-center z-30",
					className
				)}
				variants={variants}
				initial="initial"
				animate="animate"
				exit="initial"
				style={{
					y: `calc(${position.y}px - 50%)`,
					x: `calc(${position.x}px - 50%)`,
				}}>
				{text && <span>{text}</span>}
			</motion.div>
		)}
	</AnimatePresence>
);
