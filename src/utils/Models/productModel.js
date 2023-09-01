import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    company: String,
    color: String
})

export const Product = mongoose.models.products || mongoose.model("products", productSchema)