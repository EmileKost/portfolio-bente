import type { Metadata } from "next";
import "./globals.css";

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
	// TODO: Think of large monitors what to do then
	return (
		<html lang="en">
			<body className="w-full min-h-full bg-white-primary">{children}</body>
		</html>
	);
}
