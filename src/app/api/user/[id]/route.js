import { NextResponse } from "next/server";
import { users } from "../../../../utils/db";

export async function GET(request, content) {
    const userData = users.filter((items) => items.id == content.params.id)
    return NextResponse.json(userData.length === 0 ? { result: "No data Found !" } : userData)
}
