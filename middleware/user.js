import Joi from 'joi';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const validateUserCreation = async (req, res, next) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    user_name: Joi.string().min(4).required(),
    password: Joi.string().min(8).required(),
  });

  try {
    await schema.validateAsync(req.body, { abortEarly: true });
    next();
  } catch (err) {
    return res.status(422).json({
      message: err.message,
    });
  }
};

export const validateUserLogin = async (req, res, next) => {
  const schema = Joi.object({
    user_name: Joi.string().min(4).required(),
    password: Joi.string().min(8).required(),
  });

  try {
    await schema.validateAsync(req.body, { abortEarly: true });
    next();
  } catch (err) {
    return res.status(422).json({
      message: err.message,
    });
  }
};

export const verifyUser = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: true,
      message: 'Authorization header required',
    });
  }
  const [_, token] = req.headers.authorization.split(' ');

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    // check for jwt expiration
    if (user.exp * 1000 < Date.now()) {
      return res.status(401).json({
        error: true,
        message: 'Token expired',
      });
    }

    req.userId = user.id;
    next();
  } catch (error) {
    return res.status(401).json({
      error: true,
      message: 'Invalid token',
    });
  }
};
