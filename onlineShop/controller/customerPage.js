//connect database to get data 

const Product = require('../model/product')//import product module
const customerPage = async (req, res) => {
    try {
        console.log(req.url)
        const products = await Product.find({})
        res.render('customerPage', { products: products })//using pug  render 

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error" })
    }
}




module.exports = { customerPage}