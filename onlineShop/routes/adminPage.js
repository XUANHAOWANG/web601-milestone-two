const express = require('express');
const router= express.Router();
const {adminPage}= require('../controller/adminPageController')

router.get('/adminPage',adminPage)
module.exports=router//module export