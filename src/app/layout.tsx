import "./globals.css";

import localFont from "next/font/local";

const neueMontreal = localFont({
	src: [
		{
			path: "../assets/fonts/neue-montreal/NeueMontreal-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/neue-montreal/NeueMontreal-Medium.otf",
			weight: "500",
			style: "medium",
		},
		{
			path: "../assets/fonts/neue-montreal/NeueMontreal-Bold.otf",
			weight: "700",
			style: "bold",
		},
	],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${neueMontreal.className} font-sans`}>
			{children}
		</html>
	);
}
