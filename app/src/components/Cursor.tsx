import { useMouseMovement } from "@/hooks/useMouseMovement";
import { motion, AnimatePresence } from "framer-motion";

import { twMerge } from "tailwind-merge";

const animation = {
	hidden: {
		opacity: 0,
		scale: 0.3,
	},
	visible: {
		opacity: 1,
		scale: 1,
		// handle cool transition here
	},
};

type CursorProps = {
	target;
	isHovering: boolean;
	content: string;
	className?: string;
	position: {
		x: number;
		y: number;
	};
};

export const Cursor = ({
	target,
	isHovering,
	content,
	className,
}: CursorProps) => {
	const { x, y } = useMouseMovement(target);

	return (
		<AnimatePresence>
			{isHovering && (
				<motion.div
					variants={animation}
					initial={"hidden"}
					animate="visible"
					exit={"hidden"}
					style={{
						left: x,
						top: y,
					}}
					className={twMerge(
						"absolute text-xs uppercase font-light p-3 aspect-square rounded-full flex justify-center items-center z-40",
						className
					)}>
					{content}
				</motion.div>
			)}
		</AnimatePresence>
	);
};
