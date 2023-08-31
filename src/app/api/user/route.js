import { users } from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    const data = users;
    return NextResponse.json(data)
}

export async function POST(request) {
    const payload = await request.json()
    if (!payload.name || !payload.age || !payload.gender) {
        return NextResponse.json({ result: "Required Feild Not Found !!" })
    }
    return NextResponse.json({ result: "hello", data: payload })
}