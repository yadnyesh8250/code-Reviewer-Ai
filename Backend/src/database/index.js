import mongoose from "mongoose";

const ConnectDB= async()=>{
  try{
     const conn =await mongoose.connect(process.env.MONGODB_CON_STRING)
      console.log(`MongoDB connected: ${conn.connection.host}`);
  }
  catch(err){
    console.log("Error in connecting to database",err);
  }
}

export default ConnectDB;