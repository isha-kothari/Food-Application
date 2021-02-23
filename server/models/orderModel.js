const mongoose = require('mongoose');
const addressSchema = require('./addressModel');
const foodSchema = require('./foodModel');

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },
        orderLocation: {
            type: addressSchema,
            required: true
        },
        totalAmount: {
            type: Number,
            required: true
        },
        orderOtp: {
            type: Number
            // required: true,
        },
        orderStatus:
        {
            type: String,
            enum: ['ordered', 'accepted', 'cooking', 'outfordelivery', 'delivered', 'cancelled'],
            required: true,
        },
        orderDateAndTime: {
            type: Date,
            required: true,
            default: Date.now
        },
        foodList: [
            {
                _id: false,
                foodItem: { type: foodSchema, required: true },
                quantity: { type: Number, required: true }
            }
        ],
        restaurantDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'restaurant' },
        deliveryExecutive: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
    }
)

module.exports = orderSchema;