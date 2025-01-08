import ProductModel from "../models/productModel.js"

const getProduct = async (req, res) => {
    const products = await ProductModel.find()

    res.json(products)
}

const createProduct = async (req,res) => {
    const {name, price, description} = req.body

    let newProduct = {name, price, description}

    await ProductModel.create(newProduct)

    res.json(newProduct)
}

const deleteProduct = async (req,res) => {
    const {id} = req.params

    await ProductModel.findByIDAndDelete(id)

    res.json("product deleted")
}

export {getProduct, deleteProduct, createProduct}