import axios from 'axios';
import { endpoint } from '../index.js';

export const addProduct = async (req, res) => {
    try {
      const productData = req.body
      console.log(productData)

     const response = await axios.post(`${endpoint}/products.json`,JSON.stringify(productData),{
        headers:{
            "Content-Type":"application/json"
        }
     })
     const productResponse = response.data;
     res.status(200).json(productResponse);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  };

export const getAllProduct = async (req, res) => {
    try {
        const productRes = await axios.get(`${endpoint}/products.json`);

        const productResponse = productRes.data;
        res.status(200).json(productResponse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const productID = async (req, res) => {
    try {
      const userId = req.params.id;
      const response = await axios.get(`${endpoint}/products/${userId}.json`);
      const product = response.data;
      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };


  export const updateProduct = async (req, res) => {
    try {
      const userId = req.params.id;
      const response = await axios.put(`${endpoint}/products/${userId}.json`, req.body);
      const updatedProduct = response.data;
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };


  export const deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      await axios.delete(`${endpoint}/products/${productId}.json`);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  
  


