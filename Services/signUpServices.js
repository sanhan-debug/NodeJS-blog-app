import { userModel } from "../Models/model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const signUpService = async(req,res) =>{
    const {username,password,email} = req.body;
    const user = await userModel.findOne({username});
    const secret_key = process.env.JWT_SECRET

    if(user){
        const match = await bcrypt.compare(password,user.password)
        if(match){
            const token = jwt.sign({
                username,
                password,
                exp: Math.floor(Date.now() / 1000) + 60,
            },secret_key)
            res.redirect(`/profile/${token}`)

            // res.send({
            //     username,
            //     token: token,
            //   });
        }else{
            res.send("password is incorrect")
        }
    }else{
        res.send("user not found")
    }


}