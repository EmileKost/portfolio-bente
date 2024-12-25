import { ReactNode } from "react";

import { TheHeader } from "@/components/TheHeader";

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<TheHeader />
			<main className="px-3 md:px-8">{children}</main>
		</>
	);
}
