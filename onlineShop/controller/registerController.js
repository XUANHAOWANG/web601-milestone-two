const mongoose = require('mongoose')
const User = require('../model/user')
const bodyParser = require('body-parser')//for read input node value
const express = require('express');
const app = express()
const pug = require('pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const register=async function(req,res){
    var newUser=await new User({
        name:req.body.name,
        password:req.body.password,
    });
    console.log(newUser);
    console.log(req.url)
    try {
       await User.insertMany(newUser)
        res.redirect('/login')
        
    } catch (error) {
        console.error(error)
    }
}
module.exports ={register}