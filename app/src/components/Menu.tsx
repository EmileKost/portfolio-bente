"use client";

import { useState } from "react";

import { Button } from "./buttons/Button";

export default function Menu() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<Button
				as="button"
				variant="primary"
				className="text-base md:text-lg uppercase"
				onClick={() => setOpen(true)}>
				Menu
			</Button>
		</>
	);
}
