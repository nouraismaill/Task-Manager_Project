import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const connectDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log("Attempting to connect to MySQL database...");

connectDB.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message, err.stack);
    return;
  }
  console.log("DB is connected");
});

export default connectDB;
