import { useState, useEffect, RefObject } from "react";
import { useReducedMotion } from "framer-motion";

export type MousePosition = { x: number; y: number };

export const useMouseMovement = (target: RefObject<HTMLElement | null>) => {
	const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState<boolean>(false);

	const prefersReducedMotion = useReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		if (target.current) {
			const targetEl = target.current;
			const rect = targetEl.getBoundingClientRect();

			function handleMouseMovement(e: MouseEvent) {
				setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
				setIsHovering(true);
			}

			targetEl.addEventListener("mousemove", handleMouseMovement);
			targetEl.addEventListener("mouseleave", () => setIsHovering(false));

			return () => {
				targetEl.removeEventListener("mousemove", handleMouseMovement);
				targetEl.removeEventListener("mouseleave", () => setIsHovering(false));
			};
		}
	});

	return { position, isHovering };
};
