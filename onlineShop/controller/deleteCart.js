const mongoose= require('mongoose')
const Cart= require('../model/cart')
const bodyParser = require('body-parser')//for read input node value
const express = require('express');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const deleteCart =async function(req, res) {
console.log(req.url)
console.log(req.body)
try {
    let itemCart=await Cart.findOne({_id:req.body._id})//find the product 
    await Cart.deleteMany(itemCart)//delete the product
    console.log('successfully deleted product')
    res.redirect('/cartPage')
} catch (error) {
    console.log(error)
}

}

module.exports ={deleteCart }