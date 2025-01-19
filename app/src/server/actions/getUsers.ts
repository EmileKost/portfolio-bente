"use server";

export async function getUsers() {
	console.log("TRYING TO EXECUTE");

	try {
		const response = await fetch("http://127.0.0.1:6000", {
			method: "GET",
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
