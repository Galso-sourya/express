const express=require("express");
const app=express();
//console.log(app)
app.use((req,res)=>{
    console.log("application running");
    res.send("hello from server");
})
//in terminal, run node index.js. then open browser and type localhost:8000 . as much time as you refresh, it will
//be printed
app.listen("8000",(req,res)=>{
    console.log("server is running at port 8000");
})