import express from 'express';
import cors from 'cors'
import user from './model/mongoSchema.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})


app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await user.findOne({email:email})

        if(check){
            res.status(200).json('login successful');
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("fail")
    }

})

app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await user.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            await user.insertMany([data]);
            res.status(200).json("signup successful");
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(3690,()=>{
    console.log("port connected");
})