import type { NextRequest } from "next/server";
import { updateSession } from "../utils/auth/middleware";

export async function middleware(request: NextRequest) {
	console.log("executing middleware");
	return await updateSession(request);
}

export const config = {
	matcher: ["/dashboard"],
};
