import Link from "next/link";
import { Button } from "./Button";

export const TheHeader = () => {
	return (
		<header className="flex justify-between px-3 md:px-8 pt-12">
			<Link
				href="/"
				className="text-base md:text-lg uppercase">
				Bente Roelofsen
			</Link>
			<Button
				as="button"
				variant="primary"
				className="text-base md:text-lg uppercase"
				onClick={() => console.log("HIHIH")}>
				Menu
			</Button>
		</header>
	);
};
