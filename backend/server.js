import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
const app=express()
import { connectDB } from './config/db.js';
import product from './routes/product.route.js'
import path from 'path'


const __dirname=path.resolve();
const port=process.env.PORT
app.use(express.json())
app.use('/api/products',product)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,'/frontend/dist')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','dist','index.html'))
    })
}
app.get('/',(req,res)=>{
    res.send('Home Page')
})


app.listen(port,(req,res)=>{
  
    connectDB();
    console.log(`LISTENING ON PORT ${port}`)
})