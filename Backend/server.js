import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API worked");
});
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.get("/user", (req, res) => {
  const query = "SELECT * FROM users";

  // Execute the database query
  connectDB.query(query, (err, data) => {
    if (err) {
      console.error("Database query error:", err); // Log the error for debugging
      return res.status(500).json({ error: "Database query failed" }); // Send error response
    }

    // Only send the response if there was no error
    return res.json(data); // Send success response with the data
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
