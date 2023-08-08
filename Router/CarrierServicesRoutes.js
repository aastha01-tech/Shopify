import express from 'express';
import { getAllServices, updateCarrier, carrierId } from '../controller/CarrierServicesController.js';

const router = express.Router();

router.get('/carrier_services', getAllServices);
router.get('/carrier_services/:id', carrierId);
router.put('/carrier_services/:id', updateCarrier);

export default router;
