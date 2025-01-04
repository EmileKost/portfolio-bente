import { useState, useEffect } from "react";

type Breakpoints = {
	width: number;
	height: number;
};

export const useBreakpointValues = () => {
	const [screen, setScreen] = useState<Breakpoints>({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setScreen({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return screen;
};
