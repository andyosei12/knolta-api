import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth";
import cors from "cors";

export const app = express();
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/auth", authRouter);
