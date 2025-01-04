import { motion, AnimatePresence } from "framer-motion";

import { twMerge } from "tailwind-merge";

const animation = {
	hidden: {
		opacity: 0,
		scale: 0.7,
	},
	visible: {
		opacity: 1,
		scale: 1,
		// handle cool transition here
	},
};

type CursorProps = {
	isHovering: boolean;
	content: string;
	className?: string;
	position: {
		x: number;
		y: number;
	};
};

// TODO: Adjust styling, transiton based on BEnte's feedback
// also thinkg of custom hook for reusabillity
export const Cursor = ({
	isHovering,
	content,
	className,
	position,
}: CursorProps) => {
	return (
		<AnimatePresence>
			{isHovering && (
				<motion.div
					variants={animation}
					initial={"hidden"}
					animate="visible"
					exit={"hidden"}
					style={{
						left: position.x,
						top: position.y,
					}}
					className={twMerge("absolute top-0 left-0", className)}>
					{content}
				</motion.div>
			)}
		</AnimatePresence>
	);
};
