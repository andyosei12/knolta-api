import { Router } from "express";
import { createUser, signInUser } from "../handlers/auth";
import { findUser, validateAuthInputs } from "../middlewares/auth";
const router = Router();

// Sign up user
router.post("/signup", validateAuthInputs, createUser);
router.post("/signin", validateAuthInputs, findUser, signInUser);

export default router;
