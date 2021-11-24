
const User = require('../model/user')
const bodyParser = require('body-parser')//for read input node value
const express = require('express');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const Product=require('../model/product')
const login = async(req, res) =>{
    let checkUser= await req.body
    console.log(checkUser)
    console.log(req.url)
    try {
        await User.findOne(checkUser)
        .then(async result=>{
            if(result){
                console.log('login successful')
                res.redirect('/customerPage')
            }else{
                console.log('login failed check your account')
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {login}