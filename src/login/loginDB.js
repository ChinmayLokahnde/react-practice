import mongoose, { Schema, model } from "mongoose";

mongoose.connect('mongodb+srv://chinmaylokhande30:chinmay123@cluster0.pw4pyt2.mongodb.net/login')
const userSchema = new  Schema({
    username:String,
    password:String
});

export default model('User', userSchema);