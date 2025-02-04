const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const app = require("./app");

mongoose.connect(process.env.DB_URI);

app.listen(process.env.PORT, () => {
  console.log("Port listening: ", process.env.PORT);
});
