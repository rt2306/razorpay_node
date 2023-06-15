import "dotenv/config"
import { Stripe } from "stripe";

const { SECRETE_KEY } = process.env
const stripe = new Stripe(SECRETE_KEY)

// const payment = async (req, res) => { 
//     console.log(req.body.lineItems);
//     try {
//        const session =  await stripe.checkout.sessions.create({
//            line_items:req.body.lineItems,
//            mode:'payment',
//            payment_method_types:['card'],
//            success_url:'https://google.com',
//            cancel_url:'https://facebook.com'
//         })
//         return res.status(201).json(session) 
//     }
//     catch(error){
//         console.log(error.message,"==-=-=-=-");
//     }
// }


const payment = async (req, res) => { 
       let error ,status

       try{
        const { product ,token} = req.body
const customer = await stripe.customers.create({
    email:token.email,
    source:token.id
})

const key = uuid()

const charge = await stripe.charges.create({
    amount:product.rpice *100,
    currency:"INR",
    customer:customer.id,
    description:`Purchased ${product.name}`,
    shipping:{
        name:token.card.name,
        address:{
            line1:token.card.address_line1,
            line2:token.card.address_line2,
            city:token.card.address_city,
            country:token.card.address_country,
            postal_code:token.card.address_zip
        },

    },

},{
    key,
}
);
console.log("charge",{charge});
status="success";

    }
    catch(error){
        console.log(error);
        status="failure";

    }
    res.json({error,status})
    }
    

export default {
    payment
}