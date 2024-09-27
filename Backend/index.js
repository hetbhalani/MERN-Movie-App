import express from 'express';
import cors from 'cors'
import user from './model/mongoSchema.js';
import list from './model/mongoSchemaWatchList.js'

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

app.post('/watchlist',async(req,res)=>{
    try {
        const {imdbID, Poster, Title, Year } = req.body;
        const newItem = new list({ imdbID, Poster, Title, Year });
        await newItem.save();
        res.status(200).json({ message: 'Added to watchlist successfully' });
    } catch (error) {
        console.log(error);
        res.status(200).json({ message: 'error' });

    }   
})

app.get('/watchlist', async(req,res)=>{
    try{
        const watchlist = await list.find();
        res.status(200).json(watchlist);
    }
    catch(error){
        console.error( error);
        res.status(500).json({ message: 'Failed to fetch watchlist' });
    }
})

app.delete('/watchlist/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        await list.findOneAndDelete({imdbID:id});
        res.status(200).json({ message:'deleted'});
    } catch (error) {
        console.log(error);
    }
})

app.listen(3690,()=>{
    console.log("port connected");
})