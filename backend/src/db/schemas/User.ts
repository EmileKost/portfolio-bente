import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	mailToAddress: {
		type: String,
		required: false, // Will take regular email if not present
	},
	password: {
		type: String,
		required: true,
		select: false, // By setting this we will not return the password field in the query
	},
	permissions: {
		type: [String],
		enum: ["admin", "maintenance"],
		required: true,
	},
});

const User = mongoose.model("User", UserSchema);

export default User;

// Notes:
// - We must encrypt the user password
// - We will fetch this data on the server in FE to keep it save
