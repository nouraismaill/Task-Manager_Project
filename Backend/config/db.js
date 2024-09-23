import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectTimeout: 10000, 
      port: 3306
    });
    console.log("DB is connected");
    return connection;
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  }
}

connectDB();

