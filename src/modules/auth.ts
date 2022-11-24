import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

type User = {
  id: string;
  email: string;
};

export const createJWT = (user: User) => {
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET as string
  );
  return token;
};

export const hashPassword = (password: string) => bcrypt.hash(password, 5);
