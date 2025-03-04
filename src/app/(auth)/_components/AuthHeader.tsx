import Link from "next/link";
import { logout } from "../login/actions";

export const AuthHeader = () => {
	return (
		<header className="w-full flex justify-between items-center p-4 bg-black">
			<h1 className=" text-white text-2xl md:text-4xl">Admin</h1>
			<div>
				<Link
					href="/"
					className=" text-white text-base">
					Portfolio
				</Link>
				<button
					className="text-3xl text-white"
					onClick={logout}>
					Logout
				</button>
			</div>
		</header>
	);
};
