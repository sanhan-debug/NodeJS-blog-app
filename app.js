import express from "express";
import dotenv from 'dotenv'
import { appRouter } from "./Router/appRouter.js";
import mongoose from "mongoose";


const app = express();
dotenv.config()
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine","ejs")
const PORT = process.env.SERVER_PORT
const URI = process.env.CONNECTION_STRING


app.use('/',appRouter)





app.listen(PORT,()=>{
    console.log("server is up")

    mongoose.connect(URI).then(()=>{
        console.log("connected to the mongodb")
    })
})
