import express from "express";
import authenticate from "../auth/verifyToken.js"; // Ensure this is the correct import
import { getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/me", authenticate, getUser); // 'verifyToken' should be 'authenticate'

export default router;
