import  express from 'express'
import  cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 5500 
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());



import { PaymentRoutes } from './Routes/PaymentRoutes.js'
app.use('/check',PaymentRoutes) 
import { StripeRoutes } from './Routes/StripeRoutes.js'
app.use('/stripe',StripeRoutes) 

import { OpImageRoutes } from './Routes/OpImageRoutes.js'
app.use('/Open',OpImageRoutes) 


app.listen(port,() =>{
    console.log(`app is listening on  ${port}` );
})