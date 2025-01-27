"use client";

import { useEffect } from "react";

import Link from "next/link";
import Menu from "./Menu";

export const TheHeader = () => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://127.0.0.1:6000/users", {
					method: "GET",
				});
				const result = await response.json();
				console.log(result);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	return (
		<header className="w-full fixed top-0 left-0 flex justify-between px-3 md:px-8 pt-12">
			<Link
				href="/"
				className="text-base md:text-lg uppercase">
				Bente Roelofsen
			</Link>
			<Menu />
		</header>
	);
};
