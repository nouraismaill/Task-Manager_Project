import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "../config/db.js";
export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "365d",
    }
  );
};
export const Signup = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !email || !password) {
    return res
      .status(401)
      .json({ message: "Please provide username, email, and password" });
  }

  try {
    const queryCheck = `SELECT * FROM users WHERE username = ? OR email = ?`;
    connectDB.query(queryCheck, [username, email], async (err, result) => {
      if (result.length > 0) {
        return res
          .status(400)
          .json({ message: "Username or Email already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const queryInsert = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
      connectDB.query(
        queryInsert,
        [username, hashedPassword, email],
        (err, result) => {
          if (err) {
            return res.status(500).json({ message: "Error creating user" });
          }
          res.status(201).json({ message: "User created successfully" });
        }
      );
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
export const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  try {
    const query = `SELECT * FROM users WHERE email = ?`;
    connectDB.query(query, [email], async (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error" });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      const user = result[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }
      const token = generateToken(user);
      res.json({ token, message: "Login successful.." });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
