const express = require("express");
const allroutes =express.Router();
oi08i
allroutes.get('/',(req,res)=>{
    console.log('in all routes');
    res.send("Welcome to backend service")
})
allroutes.get('/houses/:id',(req,res)=>{
    console.log('in all routes');
    res.send("Welcome to houses with id");
})
allroutes.post('/login',(req,res)=>{
    console.log('in all routes/login');
    res.send("Welcome to login");
})
allroutes.post('/signup',(req,res)=>{
    console.log('in all routes/signup');
    res.send("Welcome to singup");
})
module.exports = allroutes;