import express from 'express'
import dotenv from 'dotenv'
import airoute from './routes/ai.routes.js'
import cors from 'cors'

const app=express()

dotenv.config()
const corsOptions = {
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow cookies and credentials if needed
  };
  app.use(cors(corsOptions));
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("heelo")
})

app.use("/ai",airoute)


export default app;