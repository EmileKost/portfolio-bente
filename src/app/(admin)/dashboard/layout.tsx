import { PropsWithChildren } from "react";

export default async function DashboardRootLayout({
	children,
}: PropsWithChildren) {
	return (
		<>
			<main>{children}</main>
		</>
	);
}
