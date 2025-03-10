"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClientServer } from "../../../../utils/auth/createServerClient";

export async function login(formData: FormData) {
	const supabase = await createClientServer();

	// type-casting here for convenience
	// in practice, you should validate your inputs
	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		// TODO: Add error handling
		throw new Error(error.message);
	}

	revalidatePath("/", "layout");
	redirect("/dashboard");
}

export async function logout() {
	const supabase = await createClientServer();

	const { error } = await supabase.auth.signOut();

	if (error) {
		throw new Error(error.message);
	}

	redirect("/");
}
