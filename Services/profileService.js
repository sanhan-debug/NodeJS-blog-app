import { categoryModel, userModel } from "../Models/model.js";

export const profileService = async(req, res) => {
  const {_id} = req.user
  const {token} = req.params
  const user = await userModel.findById(_id)
  const categories = await categoryModel.find()
  
  res.render('profile',{user,categories,token})
};