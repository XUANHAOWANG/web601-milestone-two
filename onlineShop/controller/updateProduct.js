
const bodyParser = require('body-parser')//for read input node value
const express = require('express');
const app = express()
const Product= require('../model/product')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const updateProduct=async (req, res) =>{
console.log(req.url)
console.log(req.body)
try {
    let productUpdate=await Product.findOne({_id:req.body._id})//get item
    console.log(productUpdate)
    await productUpdate.updateOne(req.body)//update new value 
    res.redirect('/adminPage')
} catch (error) {
    console.log(error)
}

}
module.exports = {updateProduct}