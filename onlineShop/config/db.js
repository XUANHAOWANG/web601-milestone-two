const mongoose = require('mongoose')
const connectDB = async () => {


    try {
        await mongoose.connect('mongodb+srv://wang:wang@cluster0.vp0q1.mongodb.net/shop?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
            })
        console.log('mongo connected')

    } catch (error) {
        
        console.error('Mongo connection failed')
        process.exit()

    }
}


module.exports=connectDB