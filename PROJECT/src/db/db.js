const mongoose = require('mongoose');



async function connectDB() {

    await mongoose.connect("mongodb+srv://Youtube:YDva1u7BYWiYXrsD@cluster0.7b3wchd.mongodb.net/Project-01")

    console.log ("Connected to DB")
}


module.exports = connectDB;

