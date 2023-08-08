import express from 'express';
import { getRegister } from '../controller/AdminController.js';

const router = express.Router();

router.post('/admin_register', getRegister);

export default router;
