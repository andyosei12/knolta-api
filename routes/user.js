import express from 'express';
import { createUser } from '../controller/user.js';
import { validateUserCreation } from '../middleware/user.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get all users' });
});

// create a new user
router.post('/', validateUserCreation, createUser);

export default router;
