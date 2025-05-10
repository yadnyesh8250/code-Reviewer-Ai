import { response } from "express";
import mongoose from "mongoose";

const ResponceSchema=new mongoose.Schema({
code:{
  type:String,
  required:true,
  default:""
},
response:{
  type:String,
  required:true,
  default:""
}
});

export const Responce=mongoose.model("Responce",ResponceSchema);