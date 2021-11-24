const express = require('express');
const router= express.Router();
const {toCart}= require('../controller/toCart')

router.post('/toCart',toCart)
module.exports=router//module export