import express from 'express'
import aicontroller from '../controller/ai.controller.js'

const airoute=express.Router()

airoute.post("/get-responce",aicontroller)


export default airoute