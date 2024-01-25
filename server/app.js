import express from "express";
import dotenv from "dotenv";

import authRouter from "./router/auth.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.json()); // Apply the body-parser middleware first

app.use('/', authRouter);

app.listen(port, () => {
  console.log(`Listening to port no ${port}`);
});
