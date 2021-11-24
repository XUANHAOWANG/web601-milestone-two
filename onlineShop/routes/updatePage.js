const express = require('express');
const router= express.Router();
const {updatePage}= require('../controller/updateAdmin')
const bodyParser = require('body-parser')//for read input node value
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


router.post('/updateAdmin',updatePage)
module.exports=router//module export