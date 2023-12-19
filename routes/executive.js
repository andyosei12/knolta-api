import express from 'express';
import validateExecutiveInput from '../middleware/executive.js';
import {
  createExecutive,
  deleteExecutive,
  getAllExecutives,
  getExecutive,
  updateExecutive,
} from '../controller/executive.js';
import { verifyUser } from '../middleware/user.js';

const router = express.Router();

// Get all executives
router.get('/', getAllExecutives);

// create executive
router.post('/', verifyUser, validateExecutiveInput, createExecutive);

// Get an executive
router.get('/:id', getExecutive);

// Update an executive
router.put('/:id', verifyUser, updateExecutive);

// delete an executive
router.delete('/:id', verifyUser, deleteExecutive);

export default router;
