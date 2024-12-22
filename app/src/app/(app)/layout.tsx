import { ReactNode } from "react";

import { TheHeader } from "@/components/TheHeader";

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<TheHeader />
			{children}
		</>
	);
}
