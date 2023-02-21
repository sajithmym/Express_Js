const express = require("express")
const { findByIdAndRemove } = require("../model/Product")
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

router.get("/:id", async (req, res, next) => {
    let Id = req.params.id
    let product = await Product.findById(Id)
    if (!product)
        return res.status(404).json({ message: "No Product Found" })
    res.status(200).json({ product }) 

})

router.patch("/:id", async (req, res, next) => {
    let Id = req.params.id
    let product = await Product.findByIdAndUpdate(Id, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        Image_Link: req.body.Image_Link,
        Quantity: req.body.Quantity,
        isFeatured: req.body.isFeatured
    })
    product = await product.save()
    if (!product)
        return res.status(500).json({ message: "Can't Save Product..." })
    res.status(200).json({ product })

})

router.delete("/:id", async (req, res, next) => {
    let Id = req.params.id
    let product = await Product.findByIdAndRemove(Id)
    if (!product)
        return res.status(500).json({ message: "Can't Delete..." })
    res.status(200).json({ message: "Deleted Successfully..." })
})

module.exports = router