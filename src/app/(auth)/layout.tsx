import { PropsWithChildren } from "react";
import { AuthHeader } from "./_components/AuthHeader";

export default async function AuthLayout({ children }: PropsWithChildren) {
	return (
		<>
			<AuthHeader />
			<main>{children}</main>
		</>
	);
}
