//connect database to get data 

const Product = require('../model/product')//import product module
const getProducts = async (req, res) => {
    try { 
        const products = await Product.find({})
    
        res.render('index', { products: products })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error" })
    }
}




module.exports = { getProducts}