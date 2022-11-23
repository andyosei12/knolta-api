import { Router } from "express";
const router = Router();

// Sign up user
router.post("/signup", (req, res) => {
  res.json({ message: "Will sign up" });
});

export default router;
