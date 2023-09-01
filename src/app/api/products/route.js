import { connectionToDB } from "../../../utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "../../../utils/Models/productModel";

export async function GET() {
    try {
        let data = []
        await mongoose.connect(connectionToDB)
        data = await Product.find()
        return NextResponse.json({ result: data, error: false })
    } catch (error) {
        return NextResponse.json({ result: error.message, error: true })
    }
}

export async function POST(request) {
    try {
        const payload = await request.json()
        await mongoose.connect(connectionToDB)
        const data = await new Product(payload).save()
        return NextResponse.json({ result: data, error: false })
    } catch (error) {
        return NextResponse.json({ result: error.message, error: true })
    }
}