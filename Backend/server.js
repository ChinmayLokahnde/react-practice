import express from 'express';
import dotenv, { config } from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.js';

dotenv.config();
const app = express();
app.use(express.json());

app.post("/Products", async (req,res)=>{
    const product =  req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({
            success:false, msg: "please provide an output"
        });}
        const newProduct = Product(product);
        try{
            await newProduct.save();
            res.status(201).json({success:true, data: newProduct});
        } catch(error){
            console.error("Error is there in product:", error.message);
            res.status(500).json({success:false, message :"server Error"});
        }

}); 

app.delete("/products/:id", async(req,res)=>{
    const {id} = req.params
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"product is deleted"});
    } catch (error ) {
        res.status(404).json({success:false, message:"Product not found"});
        
    }
});

app.listen(5000, ()=>{
    connectDB();
    console.log('you are listening to the server ');
});

