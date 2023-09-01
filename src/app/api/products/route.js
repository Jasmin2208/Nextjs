import { connectionToDB } from "../../../utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "../../../utils/Models/productModel";

export async function GET(request, content) {
    try {
        await mongoose.connect(connectionToDB)
        const data = await Product.find()
        return NextResponse.json({ result: data, error: false })
    } catch (error) {
        return NextResponse.json({ result: error.message, error: true })
    }
}