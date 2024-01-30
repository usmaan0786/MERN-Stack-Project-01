import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./router/auth.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);

app.listen(port, () => {
  console.log(`Listening to port no ${port}`);
});
