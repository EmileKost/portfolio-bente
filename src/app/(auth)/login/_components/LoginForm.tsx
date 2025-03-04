"use server";

import { login } from "../actions";

export const LoginForm = async () => {
	return (
		<form className="space-y-1">
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					className="border border-black"
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					className="border border-black"
				/>
			</div>
			<button
				type="submit"
				formAction={login}>
				Login
			</button>
		</form>
	);
};
