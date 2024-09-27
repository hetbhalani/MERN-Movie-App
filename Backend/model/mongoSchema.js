import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log('failed');
})

const newSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const user = mongoose.model('user',newSchema)
export default user;