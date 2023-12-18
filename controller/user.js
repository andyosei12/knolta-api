import UserModel from '../models/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const createUser = async (req, res) => {
  const userData = req.body;
  try {
    //   check if the user already exists
    const userExists = await UserModel.findOne({
      user_name: userData.user_name,
    });
    if (userExists) {
      return res
        .status(409)
        .json({ message: 'User already exists', error: true });
    }

    //   create a new user
    const user = await UserModel.create(userData);

    // create json token
    const token = jwt.sign(
      { user_name: user.user_name, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'User created', token, user });
  } catch (err) {
    return res.status(500).json({
      message: 'An error occured',
      err: err.message,
    });
  }
};

// login user
export const loginUser = async (req, res) => {
  const user_name = req.body.user_name;
  const passwordInput = req.body.password;

  try {
    const user = await UserModel.findOne({ user_name });
    if (!user) {
      return res.status(404).json({
        error: true,
        message: 'User does not exist. Try signing up',
      });
    }

    const validPassword = await user.isValidPassword(passwordInput);
    if (!validPassword) {
      return res.status(401).json({
        message: 'Username or password is not correct',
        error: true,
      });
    }
    const token = jwt.sign(
      { user_name: user.user_name, id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      message: 'Login successfully',
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'An error occured',
      error: error.message,
    });
  }
};
