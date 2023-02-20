const express = require("express")
const Product = require("../model/Product")
const router = express.Router()

router.get("",async(req,res,next)=>{
    let products = Product.find()
    if (products)
        return res.status(200).json(products)
    else
        return res.status(404).json({message:"No Products Found..."})
})

module.exports = router