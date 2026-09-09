import express from 'express'
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import path from 'path';
import {fileURLToPath} from 'url';

// configure env
dotenv.config();

// database config
connectDB();

// esnodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// rest object
const app= express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

// static files
app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// rest api
app.get('/',(req,res)=>{
    res.send("<h1>welcome to ecommerce app</h1>")
});

// port
const port = process.env.PORT || 8081;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});