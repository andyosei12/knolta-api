import express from 'express';
import {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
} from '../controller/appointment.js';
import validateAppointment from '../middleware/appointment.js';

const router = express.Router();

router.get('/', getAppointments);
router.post('/', validateAppointment, createAppointment);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

export default router;
