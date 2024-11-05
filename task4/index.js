const express = require("express");
const app =express();
const allr = require('./allroutes');
app.get('/',(req,res)=>{
    res.send("Reached root");
    console.log("reached root");
})
app.use('/allroutes',allr);
app.listen(4000,()=>{
    console.log("server is up at port 4000");
})
