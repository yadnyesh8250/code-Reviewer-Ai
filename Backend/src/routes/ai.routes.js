import express from 'express'
import aicontroller from '../controller/ai.controller.js'
import { getPerviousResponces } from '../controller/ai.controller.js'

const airoute=express.Router()

airoute.post("/get-responce",aicontroller)
airoute.get("/get-pervios-responce",getPerviousResponces);


export default airoute