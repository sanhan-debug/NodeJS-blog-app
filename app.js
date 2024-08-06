import express from "express";
import dotenv from 'dotenv'


const app = express();
dotenv.config()
const PORT = process.env.SERVER_PORT

app.get('/',(req,res)=>{
    res.send("ok")
})

app.listen(PORT,()=>{
    console.log("server is up")
})
