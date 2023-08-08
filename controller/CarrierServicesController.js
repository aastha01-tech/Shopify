import axios from 'axios';
import { endpoint } from '../index.js';

export const getAllServices = async (req, res) => {
    try {
        const carrierRes = await axios.get(`${endpoint}/carrier_services.json`);

        const carrierResponse = carrierRes.data;
        res.status(200).json(carrierResponse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const carrierId = async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await axios.get(`${endpoint}/carrier_services/${userId}.json`);
        const carrierService = response.data.carrier_service;
        res.status(200).json(carrierService);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};


export const updateCarrier = async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await axios.put(`${endpoint}/carrier_services/${userId}.json`, req.body);
        const updatedCarrierService = response.data.carrier_service;
        res.status(200).json(updatedCarrierService);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

