import mongoose from "mongoose";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  tokens: [
    // for token we are making array of an object because it is generating again and again
    {
      token: { type: String, required: true },
    },
  ],
});

// middleware
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
  }
  next();
});

// userschema is a instance
userSchema.methods.generateAuthToken = async function () {
  try {
    // for assiging jwt token
    let myToken = jwt.sign({ _id: this._id }, process.env.SECRETKEY);

    this.tokens = this.tokens.concat({ token: myToken });

    await this.save();
    return myToken;

  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);

export default User;
