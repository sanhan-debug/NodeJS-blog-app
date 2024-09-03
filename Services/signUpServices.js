import { userModel } from "../Models/model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signUpService = async (req, res) => {
  const { username, password, email } = req.body;
  const user = await userModel.findOne({ username });
  const secret_key = process.env.JWT_SECRET;

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({user},secret_key)
      res.redirect(`/profile/${user._id}/${token}`)
    } else {
      res.send("password is incorrect");
    }
  } else {
    res.send("user not found");
  }
};
