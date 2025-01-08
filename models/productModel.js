import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name:{type:String},
    price:{type:String},
    description:{type:String}
}, {timestamps:true})

const ProductModel = mongoose.model('products', ProductSchema)

export default ProductModel