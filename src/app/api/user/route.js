import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({
        name: "jasmin",
        age: 20,
        gender: "male"
    })
}
