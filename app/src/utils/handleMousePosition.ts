import type { Dispatch, RefObject, SetStateAction } from "react";

export const handleMousePosition = (
	e: React.MouseEvent<HTMLDivElement>,
	container: RefObject<HTMLDivElement | null>,
	setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>
) => {
	if (container.current) {
		const rect = container.current.getBoundingClientRect();

		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		setPosition({ x, y });
	}

	return;
};
