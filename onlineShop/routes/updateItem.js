const express = require('express');
const router= express.Router();
const {updateProduct}= require('../controller/updateProduct')

router.post('/updateData',updateProduct);


module.exports=router//module export