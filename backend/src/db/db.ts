import mongoose from "mongoose";

export const database = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URI, {
			maxPoolSize: 250, // Set higher to handle large media files
		});

		console.log("Database is connected");
	} catch (err) {
		console.log(err);

		throw err;
	}
};
