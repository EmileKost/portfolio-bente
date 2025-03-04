import Link from "next/link";
import Logo from "@/assets/logo-large.svg";

export const TheHeader = () => {
	return (
		<header className="fixed top-0 left-0 w-full py-8 px-4 flex justify-between items-center">
			<Logo />
			<Link
				href={"/"}
				className="uppercase text-black-primary text-base md:text-lg">
				Bente Roelofsen
			</Link>
			{/* TODO: Make dynamic component of BTN */}
			<button className="uppercase text-black-primary text-base md:text-lg">
				Menu
			</button>
		</header>
	);
};
