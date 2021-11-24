const express = require('express');
const router= express.Router();
const {searchItemCustomer}= require('../controller/searchResultCustomer')
const bodyParser = require('body-parser')//for read input node value
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


router.post('/searchResultCustomer',searchItemCustomer)
module.exports=router//module export