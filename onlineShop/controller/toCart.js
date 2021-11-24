const mongoose= require('mongoose')
const Cart= require('../model/cart')
const Product= require('../model/product')
const bodyParser = require('body-parser')//for read input node value
const express = require('express');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const toCart =async function(req, res) {
console.log(req.url)
console.log(req.body.name)
try {
    let addToCart=await Product.findOne({_id:req.body._id})//find the product 
    console.log(addToCart)
    if( await Cart.findOne({_id:addToCart})){
        res.redirect('/customerPage')
    }
   
    await Cart.insertMany(addToCart)
    console.log('successfully add product to cart')
    res.redirect('/customerPage')
} catch (error) {
    console.log(error)
}

}

module.exports ={toCart}