import express from "express";
import authenticate from "../auth/verifyToken.js";
import {
  addTask,
  deleteTask,
  editTasks,
  getAllTasks,
  shareTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/add", authenticate, addTask);
router.get("/get", authenticate, getAllTasks);
router.put("/edit/:taskId", authenticate, editTasks);
router.delete("/delete/:taskId", authenticate, deleteTask);
router.post("/share", authenticate, shareTask);

export default router;
