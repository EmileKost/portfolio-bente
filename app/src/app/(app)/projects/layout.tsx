import { ReactNode } from "react";

export default async function ProjectsLayout({
	children,
}: {
	children: ReactNode;
}) {
	return <div>{children}</div>;
}
