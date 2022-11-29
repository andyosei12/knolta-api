import { Router } from "express";
import prisma from "../db";
import {
  createAppointment,
  deleteAppointment,
  findAppointmentById,
  getAllAppointments,
  updateAppointment,
} from "../handlers/appointment";
import { protectRoute } from "../middlewares/auth";

const router = Router();

router.get("/", getAllAppointments);

router.post("/", protectRoute, createAppointment);

router.get("/:appointmentId", findAppointmentById);

router.put("/:appointmentId", protectRoute, updateAppointment);

router.delete("/:appointmentId", protectRoute, deleteAppointment);

export default router;
