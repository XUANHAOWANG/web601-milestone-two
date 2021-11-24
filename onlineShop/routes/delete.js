const express = require('express');
const router= express.Router();
const {deleteProduct}= require('../controller/deleteItem')

router.post('/deleteItem',deleteProduct)
module.exports=router//module export