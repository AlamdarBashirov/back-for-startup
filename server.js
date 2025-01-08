import express from 'express'
import Dotenv from 'dotenv'
import connectDB from './config/config..js'
// import { connect } from 'mongoose'
import ProductRouter from './router/productRoutes.js'

Dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB()

app.use('/', ProductRouter)

app.listen(5500, () => {
    console.log("backend running");
})

app.get('/', (req,res) => {
    res.json({message:"okay"})
})