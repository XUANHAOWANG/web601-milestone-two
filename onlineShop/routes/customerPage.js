const express = require('express');
const router= express.Router();
const {customerPage}= require('../controller/customerPage')
const Product= require('../model/product')

router.get('/customerPage',async(req, res)=>{
    try {
        console.log(req.url)
        const products = await Product.find({})
        res.render('customerPage', { products: products })//using pug  render 

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error" })
    }
})


module.exports =router