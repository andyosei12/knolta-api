import { Router } from "express";
import {
  createExecutive,
  deleteExecutive,
  findExecutiveById,
  getExecutives,
  updateExecutive,
} from "../handlers/executive";
import { protectRoute } from "../middlewares/auth";

const router = Router();

router.get("/", getExecutives);
router.post("/", protectRoute, createExecutive);
router.get("/:executiveId", findExecutiveById);
router.put("/:executiveId", protectRoute, updateExecutive);
router.delete("/:executiveId", protectRoute, deleteExecutive);

export default router;
