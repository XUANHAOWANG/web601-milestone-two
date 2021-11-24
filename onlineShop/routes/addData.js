const express = require('express');
const router = express.Router();
const connectDB = require('../config/db')
const Product = require('../model/product')
const pug = require("pug")
const {add}= require('../controller/addDataController')

router.post('/addNewData',add)
module.exports = router