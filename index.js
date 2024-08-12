const express=require('express')
const cors = require('cors');

const app=express();
app.use(cors());

const mongoose=require('mongoose')
const productsRoutes= require('./routes/Routes')
mongoose.connect(
    // "mongodb+srv://mahalakshmi:maha2606@e-commerce-cluster.84ydkya.mongodb.net/e-commerse"
    "mongodb://localhost:27017/e-commerse"

).then(()=>
{
    console.log("connected to database")
})
app.use(express.json())

app.use('/',productsRoutes)
app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})