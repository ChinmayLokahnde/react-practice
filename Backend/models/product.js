import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
   },
   {
    timestamps: true, 
   }
);

const Product = mongoose.model('Product',ProductSchema);
export default Product;