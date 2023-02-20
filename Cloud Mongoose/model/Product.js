const DB = require("mongoose")
const Schema = DB.Schema

const Product_Schema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Image_Link:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    isFeatured:{
        type:Boolean,
    },
})

module.exports = DB.model("Product",Product_Schema)
// it will save products in Database