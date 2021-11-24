const express = require('express');
const connectDB = require('./config/db');
const bodyParser=require('body-parser')//import for req.body.value
const productRoutes = require('./routes/productRoutes')
const path = require('path');//library
const app = express();
const addProduct=require('./routes/addData')
const addUsers=require('./routes/addUsers')
const userLogin=require('./routes/userLogin')
const adminRender=require('./routes/adminPage')
const adminLogin=require('./routes/adminLogin')
const deleteProduct=require('./routes/delete')
const updateItem=require('./routes/updateItem')
const searchItem=require('./routes/searchItem');
const customerPage=require('./routes/customerPage')
const toCart=require('./routes/addToCart')
const cartPage=require('./routes/cartPage')
const deleteCart=require('./routes/deleteCart')
const searchResultCustomer=require('./routes/searchResultCustomer')
const updateAdmin=require('./routes/updatePage')
app.use(bodyParser.json())//for read req.body
app.use(bodyParser.urlencoded({ extended: true }))//for read req.body
connectDB ()
app.set('view engine', 'pug');//set render engine
app.set('views', path.join(__dirname + '/views'))//set render path
app.use('/', productRoutes)
app.get('/adminPage', adminRender)
app.use('/login', (req, res) => {
        res.render('login')
})
app.use('/register', (req, res) => {
    res.render('register')
})
app.use('/productDetail', (req, res) => {
    res.render('productDetail')
})
app.get('/cartPage',cartPage)

app.get('/customerPage',customerPage)


// app.use('/customer', (req, res) => {
//     res.render('customer')
// })

//require and response
app.post('/updateAdmin',updateAdmin)
app.post('/searchResultCustomer',searchResultCustomer)
app.post('/searchResultAdmin',searchItem)
app.post('/addNewData',addProduct)
app.post('/addNewUser',addUsers)
app.post('/login_user',userLogin)
app.post('/admin_login',adminLogin)
app.post('/deleteItem',deleteProduct)
app.post('/updateData',updateItem)
app.post('/toCart',toCart)
app.post('/deleteCart',deleteCart)
const PORT = 3500
app.listen(PORT, console.log(`server started on ${PORT}`))

