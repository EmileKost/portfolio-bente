import Link from "next/link";
import Menu from "./Menu";

export const TheHeader = () => {
	return (
		<header className="w-full fixed top-0 left-0 flex justify-between px-3 md:px-8 pt-12 z-50">
			<Link
				href="/"
				className="text-base md:text-lg uppercase">
				Bente Roelofsen
			</Link>
			<Menu />
		</header>
	);
};
