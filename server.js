import  express from 'express'
import  cors from 'cors'
const app = express()
const port = 5500 
app.use(express.json())
app.use(cors());


import { PaymentRoutes } from './Routes/PaymentRoutes.js'
app.use('/check',PaymentRoutes) 
import { StripeRoutes } from './Routes/StripeRoutes.js'
app.use('/stripe',StripeRoutes) 

app.listen(port,() =>{
    console.log(`app is listening on  ${port}` );
})