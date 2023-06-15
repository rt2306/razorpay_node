import "dotenv/config"
import crypto from 'crypto'
import Razorpay from "razorpay";
const {RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY} = process.env
 
const razorpayInstance = new Razorpay({
    key_id:RAZORPAY_ID_KEY,
    key_secret:RAZORPAY_SECRET_KEY
});

const createOrder = async(req,res)=>{
    try{ 
        const amount = req.body.amount*100
        const option={
            amount :amount,
            currency:'INR',
            receipt:'razorUser@gmail.com'
        }

        razorpayInstance.orders.create(option,function (err,order){
            if(err){
              return res.send({code:500,message:'server error'})
            }else{
               return res.send({code:200,message:'order created',
            success:true,
            amount:amount,
            key_id:RAZORPAY_ID_KEY,
            product_name:req.body.name,
            description:'static description',
            conatct:"709898989",
            name:"static name",
            email:"static@gmail.com"
            })
            }
        })

    }catch(error){
console.log(error,"errorrrr");
    }
}

const verify = async(req,res)=>{
   
    try{

console.log({hh:req.body.response})

let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

var expectedSignature = crypto.createHmac('sha256',RAZORPAY_SECRET_KEY).update(body.toString()).digest('hex'); 
console.log({expectedSignature})

if(expectedSignature === req.body.response.razorpay_signature){
    res.send({code:200,message:'done'})
}else{
    res.send({code:500,msg:'failed'})
}

    }catch(error){
console.log(error,"errorrrr");
    }
}

export default {
    createOrder,
    verify
}