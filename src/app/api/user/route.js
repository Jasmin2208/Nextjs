import { users } from "../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    const data = users;
    return NextResponse.json(data)
}
