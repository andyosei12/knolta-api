import express from 'express';
import { createUser, loginUser } from '../controller/user.js';
import { validateUserCreation, validateUserLogin } from '../middleware/user.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get all users' });
});

// create a new user
router.post('/signup', validateUserCreation, createUser);
router.post('/login', validateUserLogin, loginUser);

export default router;
