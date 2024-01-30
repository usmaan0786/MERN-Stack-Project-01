import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;

    const verfiyToken = jwt.verify(token, process.env.SECRETKEY);

    const rootUser = await User.find({
      _id: verfiyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User Not Found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    res.status(401).send("unAuthorized");
    console.log(error);
  }
};

export default authenticate;
