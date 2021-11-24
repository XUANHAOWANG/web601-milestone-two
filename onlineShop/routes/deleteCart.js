const {deleteCart}=require('../controller/deleteCart')
const express = require('express');
const router= express.Router();

router.post('/deleteCart',deleteCart)

module.exports =router