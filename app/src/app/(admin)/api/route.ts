import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Portfolio Bente",
			async authorize(credentials, req) {
				const user = {};

				if (user) return user;

				return null;
			},
		}),
	],
	session: {
		strategy: "database",
		maxAge: 1 * 24 * 60 * 60,
	},
	pages: {
		signIn: "/(admin)/login",
		error: "/not-allowed",
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log(user);
			return true;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},
	},
});

export { handler as GET, handler as POST };
