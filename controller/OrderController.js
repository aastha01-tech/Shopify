import ShopifyOrders from '../model/Order.js';
import axios from 'axios'
import { endpoint } from '../index.js'






// Save data of the user in database
export const getAllOrders = async (req, res) => {
        try{
        const orderRes = await axios.get(`${endpoint}/orders.json?status=any`);
        const countRes = await axios.get(`${endpoint}/orders/count.json`)

        const OrderResponse=orderRes.data
        const CountResponse = countRes.data.count;
        // const newOrder =  ShopifyOrders({orders:OrderResponse,orderCount:CountResponse});


        //     await newOrder.save();
            res.status(201).json(OrderResponse)
        } 
        catch (error){
            res.status(409).json({ message: error.message});     
        }
    };

    // Save data of the user in database
    export const cancelOrder = async (req, res) => {
        const id = req.body.id;
        console.log(id);
        try {
            const response = await axios.post(`${endpoint}/orders/${id}/cancel.json`)
            let cancelOrderRes = response.data.order
            res.status(200).json(cancelOrderRes);
        } catch (error) {
            console.log(error);
        }
    };


