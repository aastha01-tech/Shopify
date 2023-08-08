import mongoose from 'mongoose';


// how our document look like
const orderSchema=new mongoose.Schema({
  // order:Object,
  orders:[]
},{strict:false});


// we need to turn it into a model
const ShopifyOrders=mongoose.model("ShopifyOrders",orderSchema);

export default ShopifyOrders;