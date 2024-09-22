import cors from "cors";
import express from "express";
import authRoute from "./routes/auth.js";
import taskRoute from "./routes/task.js";
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
app.use("/api/task", taskRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
