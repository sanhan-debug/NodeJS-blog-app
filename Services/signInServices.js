import { userModel } from "../Models/model.js";
import bcrypt from "bcrypt";

export const signInService = async (req, res) => {
  const { username, name, surname, email, password } = req.body;
  const hasshedPass = bcrypt.hashSync(password, 10);

  if (username && name && surname && email && password) {
    const { filename } = req.file;

    const isExistUser = await userModel.findOne({ username });
    const isExistEmail = await userModel.findOne({ email });

    if (isExistUser) {
      res.send("username is already exist");
    } else if (isExistEmail) {
      res.send("email is already email");
    } else {
      userModel.create({
        username,
        name,
        surname,
        email,
        password: hasshedPass,
        photo: `/${filename}`,
      });

      res.redirect("/sign-up");
    }
  } else {
    res.send("datalarin hamisini yaz");
  }
};
