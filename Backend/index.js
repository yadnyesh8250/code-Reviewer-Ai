import app from "./src/app.js"
import dotenv from "dotenv"



dotenv.config();

app.listen(process.env.PORT,()=>{
  console.log("server is listening on the port number 3000",process.env.PORT);
  
})