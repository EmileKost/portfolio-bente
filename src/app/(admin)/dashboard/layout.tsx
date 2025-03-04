import { PropsWithChildren } from "react";
import { AuthHeader } from "@/app/(auth)/_components/AuthHeader";

export default async function DashboardRootLayout({
	children,
}: PropsWithChildren) {
	return (
		<>
			<AuthHeader />
			<main>{children}</main>
		</>
	);
}
