import { Router } from "express";
import path from 'path'
import { customizedMulter } from "../multer.js";
import { signUpService } from "../Services/signUpServices.js";
import { signInService } from "../Services/signInServices.js";



export const appRouter = new Router()


appRouter.get('/',(req,res)=>{
    res.sendFile(path.resolve('./pages/index.html'))
})

appRouter.get('/sign-in',(req,res)=>{
    res.sendFile(path.resolve('./pages/sign-in.html'))
})

appRouter.get('/sign-up',(req,res)=>{
    res.sendFile(path.resolve('./pages/sign-up.html'))
})

// post

appRouter.post('/sign-in',customizedMulter.single('avatar'),signInService)
appRouter.post('/sign-up',signUpService)


