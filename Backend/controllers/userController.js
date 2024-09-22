import connectDB from "../config/db.js";

export const getUser = async (req, res) => {
  const userId = req.user.id;

  try {
    const userQuery = "SELECT username FROM users WHERE id=?";

    const [result] = await connectDB.promise().query(userQuery, [userId]);

    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result[0];
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
