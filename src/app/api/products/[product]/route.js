import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionToDB } from "../../../../utils/db";
import { Product } from "../../../../utils/Models/productModel";

export async function GET(request, content) {
    let id = content.params.product
    await mongoose.connect(connectionToDB)
    let data = await Product.findById({ _id: id })
    return NextResponse.json(data.length === 0 ? { result: "No data Found !" } : data)
}

export async function PUT(request, content) {
    let id = content.params.product
    let payload = await request.json()
    await mongoose.connect(connectionToDB)

    let data = await Product.findByIdAndUpdate({ _id: id }, payload, { new: true })

    if (!payload.name || !payload.price || !payload.company || !payload.color) {
        return NextResponse.json({ result: "Required Feild Not Found !!", error: true })
    }

    return NextResponse.json({ result: "Product Update Successfully !", Product: data, error: false })
}
