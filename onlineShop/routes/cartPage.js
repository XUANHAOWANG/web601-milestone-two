const express = require('express');
const router= express.Router();
const {cartView}=require('../controller/cartPage')


router.get('/cartPage',cartView)

module.exports =router