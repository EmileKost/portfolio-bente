"use server";

// TODO: FIX WEIRD NEXT err
export async function getUsers() {
	const BASE_URL = "http://localhost:4500";
	const ENDPOINT = "/users";

	try {
		const response = await fetch(new URL(ENDPOINT, BASE_URL).toString(), {
			method: "GET",
			cache: "no-store",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const result = await response.json();
		console.log(result);

		if (!result.ok) {
			throw new Error("No users found");
		}

		return result.data.users;
	} catch (err) {
		console.log(err);
	}
}
