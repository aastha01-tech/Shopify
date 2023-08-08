import express from 'express';
import {addProduct, getAllProduct,productID,updateProduct,deleteProduct} from '../controller/ProductController.js';

const router = express.Router();

router.post('/add_product', addProduct);
router.get('/products', getAllProduct);
router.get('/products/:id', productID);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
