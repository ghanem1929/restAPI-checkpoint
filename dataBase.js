const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const db = process.env.mongoURI;
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("mongoo is connected");
  } catch (err) {
    console.error("could not connect to mongoo", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
