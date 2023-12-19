import express from 'express';
import {
  createProgram,
  deleteProgram,
  getAllPrograms,
  getProgram,
  updateProgram,
} from '../controller/program.js';
import { verifyUser } from '../middleware/user.js';
import validateProgramInput from '../middleware/program.js';

const router = express.Router();

router.get('/', getAllPrograms);
router.post('/', verifyUser, validateProgramInput, createProgram);
router.get('/:id', getProgram);
router.put('/:id', verifyUser, updateProgram);
router.delete('/:id', verifyUser, deleteProgram);

export default router;
