const mongoose= require('mongoose')
const Product= require('../model/product')
const bodyParser = require('body-parser')//for read input node value
const express = require('express');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const deleteProduct =async function(req, res) {
console.log(req.url)
console.log(req.body.name)
try {
    let deleteData=await Product.findOne({name:req.body.name})//find the product 
    await Product.deleteMany(deleteData)//delete the product
    console.log('successfully deleted product')
    res.redirect('/adminPage')
} catch (error) {
    console.log(error)
}

}

module.exports ={deleteProduct}