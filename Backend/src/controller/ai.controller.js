import gemini from "../utlis/ai.services.js";
import { Responce } from "../models/responce.model.js";
import mongoose from "mongoose";
const aicontroller = async(req,res)=>{
   
const code=req.body.code;
   if(!code)
   {
    return res.status(200).send("Prompt is required")
   }
   
   
   const responce =await gemini(code)
   Responce.create(
      {
         code:code,
         response:responce
      }
   )

  return res.send(responce);
  }

  export default aicontroller