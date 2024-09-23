import cors from "cors";
import express from "express";
import authRoute from "./routes/auth.js";
import taskRoute from "./routes/task.js";
import userRoute from "./routes/user.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: 'https://taskmanagerapp-3gd9.onrender.com', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
}));


app.get("/", (req, res) => {
  res.send("API worked");
});
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/task", taskRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
