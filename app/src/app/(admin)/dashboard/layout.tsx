import { PropsWithChildren } from "react";

import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({
	children,
	session,
}: PropsWithChildren & { session: any }) {
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
