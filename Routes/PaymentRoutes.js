import express  from "express"; 
import PaymentController from "../Controller/PaymentController.js";
const router = express.Router()
router.post("/orders" ,PaymentController.createOrder); 
router.post("/verify" ,PaymentController.verify); 
export const PaymentRoutes = router