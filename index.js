import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port=process.env.PORT||5000;

const app=express();

app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    })
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
      console.log("server started");
})