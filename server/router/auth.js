import express, { json } from "express";
import "../db/conn.js";
import User from "../model/userSchema.js";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to home page from router");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, confirmPassword } = req.body;

  if (!name || !email || !phone || !work || !password || !confirmPassword) {
    return res.status(422).json({ error: "plz fill the feilds properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      confirmPassword,
    });

    const userReg = await user.save();
    if (userReg) {
      res.status(201).json({ message: "User Registered Successfully" });
    } else {
      res.status(422).json({ error: "User Not Registered" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "plz fill the feilds properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      const isPasswordMatch = await bcrypt.compare(
        password,
        userExist.password
      );
      if (isPasswordMatch) {
        console.log("Login Successful");
        return res.status(200).json({ message: "Login Successful" });
      } else {
        console.log("Invalid password");
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
