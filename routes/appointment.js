import express from 'express';
import {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
} from '../controller/appointment.js';
import validateAppointment from '../middleware/appointment.js';
import { verifyUser } from '../middleware/user.js';

const router = express.Router();

router.get('/', getAppointments);
router.post('/', verifyUser, validateAppointment, createAppointment);
router.put('/:id', verifyUser, updateAppointment);
router.delete('/:id', verifyUser, deleteAppointment);

export default router;
