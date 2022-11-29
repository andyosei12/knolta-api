import prisma from "../db";
import jwt from "jsonwebtoken";
import { compareUserPassword } from "../modules/auth";

export const validateAuthInputs = (req, res, next) => {
  const isEmail = req.body.email.includes("@");
  const isPasswordLength = req.body.password.length >= 8;

  if (!isEmail) {
    res.status(400);
    res.json({ message: "Please provide a valid email" });
    return;
  }

  if (req.url !== "/signin" && !isPasswordLength) {
    res.status(400);
    res.json({
      message: "Password length must be equal or greater than 8 characters",
    });
    return;
  }

  next();
};

export const findUser = async (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });
  if (!user) {
    res.status(401);
    res.json({
      message:
        "We couldn't find this user. Please check your email or password",
    });
    return;
  } else {
    const isPasswordValid = await compareUserPassword(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      res.status(401);
      res.json({
        message:
          "We couldn't find this user. Please check your email or password",
      });
      return;
    } else {
      req.user = user;
      next();
    }
  }
};

export const protectRoute = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }

  const [_, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    next();
    return;
  } catch (error) {
    console.log(error);
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }
};
