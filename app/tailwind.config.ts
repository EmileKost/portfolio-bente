import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white: {
					primary: "#FBFBEF",
				},
				black: {
					primary: "#2A2A2A",
					dark: "#000000",
				},
				orange: {
					primary: "#FF673D",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
