import express from "express";
import authenticate from "../auth/verifyToken.js";
import { getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/me", authenticate, getUser);

export default router;
