import { Router } from "express";
import { createUser } from "../handlers/auth";
import validateAuthInputs from "../middlewares/validateAuthInputs";
const router = Router();

// Sign up user
router.post("/signup", validateAuthInputs, createUser);

export default router;
