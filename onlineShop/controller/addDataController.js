const mongoose = require('mongoose')
const Product = require('../model/product')
const bodyParser = require('body-parser')//for read input node value
const express = require('express');
const app = express()
const pug = require('pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//add new item
const add = async function (req, res) {
    var newProduct = await new Product({//get value from pug
        name: req.body.name,
        imageUrl: req.body.imgUrl,
        description: req.body.description,
        price:req.body.price,
        countInStock: req.body.countInStock,
    })
  
   console.log(newProduct)
    try {

        await Product.insertMany(newProduct )//add new item into mongodb
        console.log('add successful')
        res.redirect('/adminPage')


    } catch (error) {
        console.log(error)
    }

}

module.exports = { add }