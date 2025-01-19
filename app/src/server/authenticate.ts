"use server";

import type { User } from "next-auth";

export function authenticate(email: string, password: string): User | null {}
