import express from "express";
import movieroutes from "./route/movies.route.js";
const app=express();
const port=6969;

app.get("/",(req,res)=>{
    res.json({msg:"hello students"});
});
app.use('/movies',movieroutes);
app.listen(port,()=>{
    console.log(`the server is running at http://localhost:${port}`);
})