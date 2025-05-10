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

  const getPerviousResponces=async(req,res)=>{
   const responce =await Responce.find().sort({ _id: -1 }).limit(10);
   if(!responce)
   {
      return res.status(200).send("No responce found")
   }

   return res.status(200).json(
      responce
   )
  }

  export default aicontroller;

   export {getPerviousResponces}
   