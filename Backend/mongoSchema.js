import mongoose from 'mongoose'

const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://bhalanihet2006:login@login.izxtn.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema);

module.exports = collection