import connectDB from "../config/db.js";
export const addTask = async (req, res) => {
  const { description, status } = req.body;
  const userId = req.user.id;

  try {
    const insertTaskQuery =
      "INSERT INTO task (user_id,description, status) VALUES (?, ?, ?)";
    const [result] = await connectDB
      .promise()
      .query(insertTaskQuery, [userId, description, status]);

    res
      .status(201)
      .json({ message: "Task added successfully", taskId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding task" });
  }
};
export const getAllTasks = async (req, res) => {
  const userId = req.user.id;
  try {
    const tasksQuery = "SELECT * FROM task WHERE user_id = ?";
    const [tasks] = await connectDB.promise().query(tasksQuery, [userId]);

    const sharedTaskQuery = ` SELECT t.* 
      FROM task t
      INNER JOIN task_shares ts ON t.id = ts.task_id
      WHERE ts.shared_with_user_id = ?`;
    const [sharedTasks] = await connectDB
      .promise()
      .query(sharedTaskQuery, [userId]);

    res.status(200).json({ allTasks: tasks, sharedTasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while fetching tasks" });
  }
};
export const editTasks = async (req, res) => {
  const { taskId } = req.params;
  const { description, status } = req.body;
  const userId = req.user.id;

  try {
    const updateTaskQuery =
      "UPDATE task SET  description = ?, status = ? WHERE id = ? AND user_id = ?";
    const [result] = await connectDB
      .promise()
      .query(updateTaskQuery, [description, status, taskId, userId]);

    if (result.affectedRows === 0)
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });

    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
};
export const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const userId = req.user.id;

  try {
    const deleteTaskQuery = "DELETE FROM task WHERE id = ? AND user_id = ?";
    const [result] = await connectDB
      .promise()
      .query(deleteTaskQuery, [taskId, userId]);

    if (result.affectedRows === 0)
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
export const shareTask = async (req, res) => {
  const { taskId, sharedWithUserId } = req.body;
  const userId = req.user.id;
  try {
    const sharedTaskQuery = "SELECT * FROM task WHERE id = ? AND user_id = ?";
    const [taskResult] = await connectDB
      .promise()
      .query(sharedTaskQuery, [taskId, userId]);

    if (taskResult.length === 0) {
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });
    }

    const checkShareQuery =
      "SELECT * FROM task_shares WHERE task_id = ? AND shared_with_user_id = ?";
    const [shareResult] = await connectDB
      .promise()
      .query(checkShareQuery, [taskId, sharedWithUserId]);

    if (shareResult.length > 0) {
      return res
        .status(400)
        .json({ message: "Task is already shared with this user" });
    }

    const shareTaskQuery =
      "INSERT INTO task_shares (task_id, shared_with_user_id) VALUES (?, ?)";
    await connectDB.promise().query(shareTaskQuery, [taskId, sharedWithUserId]);

    res.status(200).json({ message: "Task shared successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sharing task" });
  }
};
