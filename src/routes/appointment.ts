import { Router } from "express";
import { protectRoute } from "../middlewares/auth";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "get appointments" });
});

router.post("/", protectRoute, (req, res) => {
  res.json({ message: "will post" });
});

export default router;
