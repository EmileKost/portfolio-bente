"use client";

import { useState } from "react";

export const Login = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<form action="">
			<div>
				<label htmlFor="email">Email</label>
				<input
					name="email"
					type="text"
					id=""
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type={showPassword ? "text" : "password"}
					name="password"
					id=""
				/>
				<span onClick={() => setShowPassword((prev) => !prev)}>CLICK MICK</span>
			</div>
		</form>
	);
};
