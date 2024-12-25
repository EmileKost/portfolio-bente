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
	return (
		<html lang="en">
			<body className="w-full min-h-full bg-white-primary">{children}</body>
		</html>
	);
}
