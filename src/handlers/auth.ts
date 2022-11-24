import prisma from "../db";
import { compareUserPassword, createJWT, hashPassword } from "../modules/auth";

export const createUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      password: await hashPassword(req.body.password),
    },
  });
  const token = createJWT(user);
  res.status(200);
  res.json({ data: token });
};

export const signInUser = async (req, res) => {
  const token = createJWT(req.user);
  res.status(200);
  res.json({ data: token });
};
