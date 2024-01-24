import mongoose from "mongoose";

import dotenv from "dotenv"
dotenv.config();

const DB = process.env.DATABASE

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successfull with MongoDB Atlas");
  })
  .catch((err) => {
    console.log(`Connection Failed Error = ${err}`);
  });