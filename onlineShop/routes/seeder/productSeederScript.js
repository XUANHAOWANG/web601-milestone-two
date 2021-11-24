const mongoose= require('mongoose')
const Product= require('../model/product')
const productData= require('../data/products')
const connectDB= require('../config/db')
connectDB()
const importData=async()=>{
  
    try {
        await Product.deleteMany()
        await Product.insertMany(productData)
        console.log('import successful')
        process.exit()
        
    } catch (error) {
        console.error(
            error
        )
        process.exit(1)
    }
}
importData()

