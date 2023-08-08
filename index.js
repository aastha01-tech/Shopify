import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import OrderRoutes from './Router/OrderRoute.js';
import ProductRoutes from './Router/ProductRoutes.js'
import CarrierServices from './Router/CarrierServicesRoutes.js'
import AdminServices from './Router/AdminRoute.js'
import Connection from './database/db.js';
import { cancelOrder } from './controller/OrderController.js';

const app = express();
dotenv.config();

// api credentials of sipl's account
const apiKey = process.env.API_KEY;
const password = process.env.PASSWORD;
const shopUrl = process.env.SHOP_URL;


// common Shopify API endpoint 
export const endpoint = `https://${apiKey}:${password}@${shopUrl}/admin/api/2023-04`;


// To handle HTTP POST requests in Express.js version 4 and above, 
// you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send('welcome to shopify api');
})

app.use('/shopify/api', OrderRoutes);
app.use('/shopify/api', ProductRoutes);
app.use('/shopify/api', CarrierServices)
app.use('/shopify/api', AdminServices)

const PORT = '8080';

Connection()


 
app.listen(PORT, () => {console.log(`Server is running successfully on PORT ${PORT}`)});