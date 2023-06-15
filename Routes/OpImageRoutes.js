import express  from "express"; 
import OpemApi from "../Controller/OpemApi.js";
const router = express.Router()
router.post("/create" ,OpemApi.create_image);  
export const OpImageRoutes = router