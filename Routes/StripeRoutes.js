import express  from "express"; 
import StripeController from "../Controller/StripeController.js";
const router = express.Router()

  
router.post("/checkout" ,StripeController.payment); 






export const StripeRoutes = router