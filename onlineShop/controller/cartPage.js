const Cart= require('../model/cart')


const cartView=async(req,res)=>{
    console.log(req.url)
    try {
        let carts =await Cart.find({})
        res.render('cartPage',{carts:carts})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "server error" })
    }
}
module.exports ={cartView}