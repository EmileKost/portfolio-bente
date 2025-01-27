import { useState, useEffect, RefObject } from "react";

export const useMouseMovement = (target: RefObject<HTMLDivElement>) => {
	const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const targetEl = target.current;

		const handleMousePosition = (e: MouseEvent) => {
			const { clientX, clientY } = e;

			setMousePosition({ x: clientX, y: clientY });
		};

		targetEl.addEventListener("mouseenter", (e) => {
			handleMousePosition(e);
		});
		targetEl.addEventListener("mousemove", handleMousePosition);

		return () => {
			targetEl.removeEventListener("mouseenter", handleMousePosition);
			targetEl.removeEventListener("mousemove", handleMousePosition);
		};
	});

	return { x: mousePosition.x, y: mousePosition.y };
};
