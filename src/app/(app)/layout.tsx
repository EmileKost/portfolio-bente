import { TheHeader } from "@/components/TheHeader";

export default function PortfolioLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="w-full min-h-screen bg-beige">
				<TheHeader />
				{children}
			</body>
		</html>
	);
}
