
const Admin = require('../model/admin')
const bodyParser = require('body-parser')//for read input node value
const express = require('express');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const adminLogin = async(req, res) =>{
    let checkAdmin= await req.body
    console.log(checkAdmin)
    console.log(req.url)
    try {
        await Admin.findOne(checkAdmin)
        .then(result=>{
            if(result){
                console.log('administer login successful')
                res.redirect('/adminPage')
            }else{
                console.log('login failed check your account')
            }
        })
        
    } catch (error) {
        console.log(error)
    }
}
module.exports = {adminLogin}