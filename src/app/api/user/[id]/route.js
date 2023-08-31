import { NextResponse } from "next/server";
import { users } from "../../../../utils/db";

export async function GET(request, content) {
    const userData = users.filter((items) => items.id == content.params.id)
    return NextResponse.json(userData.length === 0 ? { result: "No data Found !" } : userData)
}

export async function PUT(request, content) {
    let payload = await request.json()
    payload.id = content.params.id;
    if (!payload.id || !payload.name || !payload.age || !payload.gender) {
        return NextResponse.json({ result: "Required Feild Not Found !!", error: true })
    }
    return NextResponse.json({ result: "User Update Successfully !", data: payload, error: false })
}
