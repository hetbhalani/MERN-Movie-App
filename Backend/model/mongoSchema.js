import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bhalanihet2006:login@login.izxtn.mongodb.net/Login?retryWrites=true&w=majority")
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