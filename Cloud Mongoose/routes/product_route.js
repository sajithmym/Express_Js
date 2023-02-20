const express = require("express")
const Product = require("../model/Product")
const router = express.Router()

router.get("/", async (req, res, next) => {
    let products = await Product.find()
    if (!products)
        return res.status(404).json({ message: "No Products Found..." })
    res.status(200).json({ products })
})

router.post("/", async (req, res, next) => {
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        Image_Link: req.body.Image_Link,
        Quantity: req.body.Quantity,
        isFeatured: req.body.isFeatured
    })

    product = await product.save()

    if (!product) {
        return res.status(500).json({ message: "can't add product..." })
        next()
    }
    res.status(201).json({ product })
})

module.exports = router