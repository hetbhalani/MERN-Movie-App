import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("watch-list db connected");
})
.catch(()=>{
    console.log('failed!');
})


const watchlistSchema = mongoose.Schema({
    imdbID: String,
    Poster: String,
    Title:String,
    Year: String
})

const list = mongoose.model('list',watchlistSchema)
export default list;