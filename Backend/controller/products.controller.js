import Product from "../models/product.js";

export const getProducts = async (req, res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data:products});
    } catch (error) {
       console.log("erroe in featching the products:", error.message);
       res.status(500).json({success:false, message:"Server Error"}); 
    }
}

export const createProducts = async (req,res)=>{
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

};

export const updateProducts =  async (req,res)=>{
    const{id} = req.params;
    const product = req.body;

    try {
     const updateProduct =  await Product.findByIdAndUpdate(id, product,{new:true});
     res.status(200).json({success:true, data:updateProduct});
    } catch (error) {
      res.status(500).json({success:false, message:"Server Error"});  
    }
};

export const deleteProducts = async(req,res)=>{
    const {id} = req.params
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"product is deleted"});
    } catch (error ) {
        res.status(500).json({success:false, message:"Server Error"});
        
    }
};