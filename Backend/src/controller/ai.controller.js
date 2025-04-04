import gemini from "../utlis/ai.services.js";

const aicontroller = async(req,res)=>{
const code=req.body.code;
   if(!code)
   {
    return res.status(200).send("Prompt is required")
   }
   const responce =await gemini(code)

  return res.send(responce);
  }

  export default aicontroller