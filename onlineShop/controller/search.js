const mongoose= require('mongoose')
const Product= require('../model/product')
const bodyParser = require('body-parser')//for read input node value
const express = require('express');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const searchItem=async (req, res) => {
    console.log(req.url)
    console.log(req.body)
    try {
        let resultItem=await Product.find( {name:req.body.name} )
        console.log(resultItem)
        res.render('searchResultAdmin', { products: resultItem })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error" })
    }
    
    }
    module.exports = {searchItem}
