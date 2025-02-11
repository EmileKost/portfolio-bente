import { ReactNode } from "react";

import { TheHeader } from "@/components/TheHeader";
import { TheFooter } from "@/components/footer/TheFooter";

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<TheHeader />
			<main>{children}</main>
			<TheFooter />
		</>
	);
}
