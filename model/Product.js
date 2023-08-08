import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    vendor: {
        type: String,
        trim: true
    },
    product_type: {
        type: String,
        trim: true
    },
    created_at: {
        type: String,
        trim: true
    },
    handle: {
        type: String,
        trim: true
    },
    updated_at: {
        type: String,
        trim: true
    },
    published_at: {
        type: String,
        trim: true
    },
    template_suffix: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        trim: true
    },
    published_scope: {
        type: String,
        trim: true
    },
    tags: {
        type: String,
        trim: true
    },
    admin_graphql_api_id: {
        type: String,
        trim: true
    },
    variants: [
        {
            title: {
                type: String,
                trim: true
            },
            price: {
                type: String,
                trim: true
            },
            sku: {
                type: String,
                trim: true
            },
            position: {
                type: String,
                trim: true
            },
            inventory_policy: {
                type: String,
                trim: true
            },
            compare_at_price: {
                type: String,
                trim: true
            },
            fulfillment_service: {
                type: String,
                trim: true
            },
            option1: {
                type: String,
                trim: true
            },
            option2: {
                type: String,
                trim: true
            },
            option3: {
                type: String,
                trim: true
            },
            created_at: {
                type: String,
                trim: true
            },
            updated_at: {
                type: String,
                trim: true
            },
            taxable: {
                type: String,
                trim: true
            },
            barcode: {
                type: String,
                trim: true
            },
            grams: {
                type: String,
                trim: true
            },
            weight_unit: {
                type: String,
                trim: true
            },
            inventory_item_id: {
                type: String,
                trim: true
            },
            old_inventory_quantity: {
                type: String,
                trim: true
            },
            requires_shipping: {
                type: String,
                trim: true
            },
            admin_graphql_api_id: {
                type: String,
                trim: true
            },
            inventory_quantity: {
                type: String,
                trim: true
            }
        }
    ],
    options: [
        {
            product_id: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            position: {
                type: String,
                trim: true
            },
            values: {
                type: String,
                trim: true
            }
        }
    ],
    image: {
        type: String,
        trim: true
    },
    image1: {
        type: String,
        trim: true
    }
});

const Product = mongoose.model("Product", productSchema);

export default Product;
