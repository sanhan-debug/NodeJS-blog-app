import { userModel } from "../Models/model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const signUpService = async(req,res) =>{
    const {username,password} = req.body;
    const user = await userModel.findOne({username});
    const token = jwt.sign({user})

    if(user){
        const match = await bcrypt.compare(password,user.password)
        if(match){
            res.redirect('/profile')
        }else{
            res.send("password is incorrect")
        }
    }else{
        res.send("user not found")
    }


}