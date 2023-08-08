import express from 'express';
import { getAllOrders } from '../controller/OrderController.js';
import { cancelOrder } from '../controller/OrderController.js';


const router = express.Router();

// router.get('/', orders);
router.get('/orders', getAllOrders);
router.post('/cancel',cancelOrder);


export default router;