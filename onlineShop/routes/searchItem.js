const express = require('express');
const router= express.Router();
const {searchItem}= require('../controller/search')
const bodyParser = require('body-parser')//for read input node value
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


router.post('/searchResultAdmin',searchItem)
module.exports=router//module export