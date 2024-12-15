import { database } from "./db";

import User from "./schemas/User";
import "dotenv/config";

const intialUser = [
	{
		email: process.env.SEED_ADMIN_EMAIL,
		password: process.env.SEED_ADMIN_PASSWORD,
		permissions: ["admin", "maintenance"],
	},
	{
		email: process.env.SEED_ADMIN_EMAIL_BENTE,
		password: process.env.SEED_ADMIN_PASSWORD_BENTE,
		permissions: ["admin", "maintenance"],
	},
];

const seedDatabase = async () => {
	try {
		await database();

		for (const userData of intialUser) {
			const isExistingUser = await User.findOne({ email: userData.email });

			if (!isExistingUser) {
				await User.create(userData);
				console.log("Seeding user:", userData.email);
			}
		}
	} catch (err) {
		console.log(err);

		throw err;
	}
};

seedDatabase();
