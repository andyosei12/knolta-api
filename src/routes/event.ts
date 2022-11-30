import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  findEventById,
  getEvents,
  updateEvent,
} from "../handlers/event";
import { protectRoute } from "../middlewares/auth";

const router = Router();

router.get("/", getEvents);
router.post("/", protectRoute, createEvent);
router.get("/:eventId", findEventById);
router.put("/:eventId", protectRoute, updateEvent);
router.delete("/:eventId", protectRoute, deleteEvent);

export default router;
