import { Schema, model } from "mongoose";

export const cartSchema = new Schema({
products: [
    {
        _id: false,
        quantity: {
            type: Number,
            default: 1
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: "products" // señalo el modulo de producto
        }
    }
    ]
});

export const CartModel = model("carts", cartSchema);