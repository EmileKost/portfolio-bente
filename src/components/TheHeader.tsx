import Link from "next/link";

export const TheHeader = () => {
	return (
		<header className="fixed top-0 left-0 w-full py-8 px-4 md:px-8 flex justify-between items-center">
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
