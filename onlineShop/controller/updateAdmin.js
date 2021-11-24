const mongoose= require('mongoose')
const Product= require('../model/product')
const bodyParser = require('body-parser')//for read input node value
const express = require('express');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const updatePage=async (req, res) => {
    console.log(req.url)
    console.log(req.body)
    try {
        let itemUpdate=await Product.find( {_id:req.body._id} )
        console.log(itemUpdate)
        res.render('updateAdmin', { products: itemUpdate })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error" })
    }
    
    }
    module.exports = {updatePage}