import { useState, useEffect } from "react";

// TODO: Fix initial 0
export function useBreakpointValue() {
	const [size, setSize] = useState<{ x: number; y: number }>({
		x: window.innerWidth,
		y: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			console.log(window.innerWidth);
			console.log(innerHeight);

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
