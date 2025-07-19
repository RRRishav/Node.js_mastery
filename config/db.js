const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('dotenv').config()

const DB = async () =>{
    await mongoose.connect(process.env.MONGO_URI).then(() => console.log('✅🔌💾 Database connected successfully! 🎉🚀'));

}


module.exports = DB

