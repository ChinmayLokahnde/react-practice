import express from 'express';
import dotenv, { config } from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.js';
import productRoutes from "./routes/products.route.js";


dotenv.config();

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

app.listen(5000, ()=>{
    connectDB();
    console.log('you are listening to the server ');
});

