import mongoose from 'mongoose';


const carrierSchema = mongoose.Schema({
    "name": String,
    "active": Boolean,
    "service_discovery": Boolean,
    "carrier_service_type": String,
    "admin_graphql_api_id": String,
    "format": String
})

const carrierServices = mongoose.model("carrier", carrierSchema);

export default carrierServices;