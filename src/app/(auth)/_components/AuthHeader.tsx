import Link from "next/link";

export const AuthHeader = () => {
	return (
		<header className="w-full flex justify-between items-center p-4 bg-black">
			<h1 className=" text-white text-2xl md:text-4xl">Admin</h1>
			<Link
				href="/"
				className=" text-white text-base">
				Portfolio
			</Link>
		</header>
	);
};
