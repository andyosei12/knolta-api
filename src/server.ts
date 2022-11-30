import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth";
import appointmentRouter from "./routes/appointment";
import eventRouter from "./routes/event";
import executiveRouter from "./routes/executive";
import cors from "cors";

export const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authRouter);
app.use("/api/appointment", appointmentRouter);
app.use("/api/event", eventRouter);
app.use("/api/executive", executiveRouter);
