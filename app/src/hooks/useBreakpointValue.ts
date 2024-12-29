import { useState, useEffect } from "react";

export function useBreakpointValue() {
	const [size, setSize] = useState<{ x: number; y: number }>({
		x: window.innerWidth,
		y: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({
				x: window.innerWidth,
				y: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);
	}, []);

	return {
		width: size.x,
		height: size.y,
	};
}
