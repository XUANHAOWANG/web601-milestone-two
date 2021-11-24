const mongoose = require('mongoose')
const connectDB= require('../config/db')
const adminModel=require('../model/admin')
const admin=require('../data/adminData')
connectDB()

const importAdmin= async function(){
    try {
        await adminModel.insertMany(admin)
        console.log('successfully import admin')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

importAdmin()