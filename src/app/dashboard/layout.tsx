import type { PropsWithChildren } from "react";

export async function DashboardRootLayout({ children }: PropsWithChildren) {
	return (
		<>
			<main>{children}</main>
		</>
	);
}
