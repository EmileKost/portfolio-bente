import { createClient as _createClient } from "@supabase/supabase-js";

export function createClient() {
	return _createClient(
		process.env.NEXT_PUBLIC_SUPABASE_UR!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
}
