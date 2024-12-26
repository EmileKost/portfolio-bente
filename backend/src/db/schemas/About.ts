import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	name: {
		firstName: {
			type: String,
			required: true,
		},
		middleName: {
			type: String,
			required: false,
		},
		lastName: {
			type: String,
			required: true,
		},
		randomFact: {
			type: [String],
			required: true,
		},
		image: String, // replace with S3 logic later
	},
});
