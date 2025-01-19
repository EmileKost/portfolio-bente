import type { Metadata } from "next";
import "./globals.css";

import { getUsers } from "@/server/actions/getUsers";

export const metadata: Metadata = {
	title: "Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// PP neue Montreal
	// Dx Grafix

	getUsers();

	return (
		<html lang="en">
			<body className="w-full min-h-full bg-white-primary">{children}</body>
		</html>
	);
}
