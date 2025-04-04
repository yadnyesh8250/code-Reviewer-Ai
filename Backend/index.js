import app from "./src/app.js"


app.listen(3000,()=>{
  console.log("server is listening on the port number 3000",process.env.PORT);
  
})