import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./router/auth.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/", authRouter);


app.listen(port, () => {
  console.log(`Listening to port no ${port}`);
});
