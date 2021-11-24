const express = require('express');
const router= express.Router();
const {adminLogin}= require('../controller/adminLogin')

router.post('/admin_login',adminLogin)
module.exports=router//module export