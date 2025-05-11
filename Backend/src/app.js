import express from 'express'
import dotenv from 'dotenv'
import airoute from './routes/ai.routes.js'
import cors from 'cors'
import ConnectDB from './database/index.js'

const app=express()
ConnectDB()

dotenv.config()
const corsOptions = {
    origin: 'https://code-reviewer-ai-32o8.vercel.app' ,// Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow cookies and credentials if needed
  };
  app.use(cors(corsOptions));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("heelo")
})

app.use("/ai",airoute)


export default app;