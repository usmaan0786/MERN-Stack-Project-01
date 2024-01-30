import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;

    const verfiyToken = jwt.verify(token, process.env.SECRETKEY);

    const rootUser = await User.findOne({
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
    console.error("Authentication error:", error);
    res
      .status(401)
      .json({ error: "Unauthorized: no token provided or invalid token" });
  }
};

export default authenticate;
