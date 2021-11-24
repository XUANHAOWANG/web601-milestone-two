const express = require('express');
const router = express.Router();
const {login}= require('../controller/loginController')

router.post('/login_user',login)


module.exports = router